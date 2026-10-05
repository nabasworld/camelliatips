// Background Service Worker for Camellia Tips Chrome Extension

// Initialize Context Menus on Install
chrome.runtime.onInstalled.addListener(() => {
  console.log('Camellia Tips Extension Installed Successfully.');

  // Create Context Menu Items
  chrome.contextMenus.create({
    id: 'camellia_search',
    title: 'Search "%s" on Camellia Tips',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'camellia_open_steep',
    title: 'Open Steeping Matrix Companion',
    contexts: ['page', 'selection']
  });
});

// Handle Context Menu Clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'camellia_search' && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    chrome.tabs.create({ url: `http://localhost:4321/collection?search=${query}` });
  } else if (info.menuItemId === 'camellia_open_steep') {
    chrome.tabs.create({ url: 'http://localhost:4321/reserve' });
  }
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'start_steep_timer') {
    const delayMinutes = message.durationSecs / 60;
    
    // Clear old alarm and set new alarm
    chrome.alarms.clear('camellia_steep_alarm', () => {
      chrome.alarms.create('camellia_steep_alarm', { delayInMinutes: delayMinutes });
    });

    // Store tea name
    chrome.storage.local.set({ activeTeaName: message.teaName || 'Tea' });
    sendResponse({ status: 'alarm_set' });
  } else if (message.action === 'cancel_steep_timer') {
    chrome.alarms.clear('camellia_steep_alarm');
    sendResponse({ status: 'alarm_cancelled' });
  }
  return true;
});

// Alarm Listener for Notification Trigger
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'camellia_steep_alarm') {
    chrome.storage.local.get(['activeTeaName'], (data) => {
      const teaName = data.activeTeaName || 'Camellia Tips Tea';

      chrome.notifications.create('steep_complete_notification', {
        type: 'basic',
        iconUrl: chrome.runtime.getURL('icons/icon128.png'),
        title: '🍵 Steeping Complete — Camellia Tips',
        message: `Your ${teaName} infusion is steeped to perfection! Time to strain and enjoy.`,
        priority: 2,
        buttons: [{ title: 'Open Steeping Guide' }]
      });
    });
  }
});

// Handle Notification Button Clicks
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (notificationId === 'steep_complete_notification') {
    chrome.tabs.create({ url: 'http://localhost:4321' });
  }
});
