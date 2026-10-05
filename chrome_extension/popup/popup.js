// Camellia Tips Luxury Sommelier - Popup Logic

const PROTOCOLS = {
  ctc: {
    name: 'Ancestral Brew — CTC Monsoon',
    seconds: 270,
    temp: '100°C',
    ratio: '2.5g / 150ml',
    totalInfusions: 2,
    tip: 'Pre-heat porcelain vessel with boiling water before adding leaves for rich malty extraction.'
  },
  orthodox: {
    name: 'Ancestral Brew — Orthodox Blend',
    seconds: 225,
    temp: '85°C',
    ratio: '3.0g / 150ml',
    totalInfusions: 3,
    tip: 'Soft water recommended. Avoid boiling off delicate golden tip natural sweetness.'
  },
  mogra: {
    name: 'Legacy Leaf — Green Tea Mogra',
    seconds: 135,
    temp: '78°C',
    ratio: '3.0g / 150ml',
    totalInfusions: 4,
    tip: 'Gentle pre-boil water allows night-blooming jasmine florals to bloom gracefully.'
  },
  hyson: {
    name: 'Legacy Leaf — Young Hyson',
    seconds: 150,
    temp: '80°C',
    ratio: '3.0g / 150ml',
    totalInfusions: 3,
    tip: 'Early-spring tender whole leaf. Best enjoyed in clear glass to admire leaf unfolding.'
  },
  gyokuro: {
    name: 'Imperial Gyokuro Harvest',
    seconds: 120,
    temp: '60°C',
    ratio: '4.0g / 100ml',
    totalInfusions: 4,
    tip: 'Low temperature water concentrates intense umami and shade-grown amino acids.'
  },
  puerh: {
    name: 'Vintage Pu-erh Vault',
    seconds: 45,
    temp: '95°C',
    ratio: '5.0g / 110ml',
    totalInfusions: 8,
    tip: 'Flash rinse first infusion for 5 seconds before drinking subsequent rich liquors.'
  }
};

const CATALOG_ITEMS = [
  {
    id: 'ab-eb',
    name: 'Ancestral Brew — English Breakfast Blend',
    category: 'ancestral-brew',
    price: '₹ 450',
    badge: 'Lot DNG-AB01',
    provenance: 'Upper Assam • DNG Enterprises',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp1EKKdQ1KSdG5HU-gAXkD7i7CVb6cc0u7c1MtpOwO00S8ZDkMkX6vvQu3yur144Aa2Bi3rxcq54LI4dUUHjpLp9CMAzh-5FX1tj4fG8K0P8eXBVKEPNCKw0So2bjLzfrCYXuCDFBB2yMjHsDc0Q-l6eSgLqNRwKTa2JgLUOtRnLKnyOcKl5Lvp1F3bckCGStRzxdusrlQejNOvYpleyG_W3kR9kdQvQPppmfQi6tXRgB22ILTmI4hgh2y3YT5XR6bVWQ',
    notes: 'Consistent Malt • Nutty Back Notes',
    protocolKey: 'ctc'
  },
  {
    id: 'ab-orth',
    name: 'Ancestral Brew — Orthodox Blend',
    category: 'ancestral-brew',
    price: '₹ 555',
    badge: 'Lot DNG-AB02',
    provenance: 'Upper Assam • Camellia Cellar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWXkyb7aWq6yoQ0M4m3VhVTp5lCWz0oFmHOTZZNRXUW6QllHBixHFLe5E0GR5xHqiqmDTIv3KCO7njoxA_fUcE_eyDm6WdcExU0bWWO2EnsThNb5GID4Z7umm5GJiro2OhLFhd6826ioPcKpf7nF4k1T6Kz-66e3ierJbnKhwCG9H5Ve_CZiqrcmPUd79aOvQ__6kbFStRP97NGgM26Z8vLmlSO6FqOZjnkfhBJQr9YvzpeWQbWeDStanVgCAJk8LH6ko',
    notes: 'Golden Tips • Mild Sweetness',
    protocolKey: 'orthodox'
  },
  {
    id: 'mb-ctc',
    name: 'Monsoon Bliss — CTC Blend',
    category: 'monsoon-bliss',
    price: '₹ 300',
    badge: 'Lot DNG-MB03',
    provenance: 'North Assam • Camellia Tips',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF0t3_Q9rYCHzMlSftDukw5yWi39birJav5iF1waL49zx2Ym93pHwgR-YHT72Y_hLtgayym28Tn-bn-zOZQQQym1jqvYyIJUrMKCXREFdgvLl0Gaw553buvWCaGWrCzi-cKLsOfsDKLWDBhZKGfVtWVKy-wW4sGE6xowhvU32Wp5r2XiQeVkvL96-Do6wmElo5j5HjgDyVK65GoZHBVInG4ESEo_6sBhUnJDxAByqdZX_afI_ZTMeiYGyR0wab5ZqsipuA',
    notes: 'Warm Spices Pairing • Robust Malt',
    protocolKey: 'ctc'
  },
  {
    id: 'll-mogra',
    name: 'Legacy Leaf — Green Tea Mogra',
    category: 'legacy-leaf',
    price: '₹ 750',
    badge: 'Lot DNG-LL04',
    provenance: 'Assam High Elevation • DNG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4ehup8SWOxTOpDDIIVRje3KqO-P7A64gY9IK5Q0gOiFayJNdr061Ej7MnVMgbW9cJih0SLCbmzF9kwmJtBTCgktSmFDp5Nh214ykUpQDE8I2X6WBBnSB-2r1I4LQb78QVvOxhZK1-k-zvnPBwQW2JO9NQ7iCw3o1RLf8HG1NZGWiZnJWDK67ymp3OMxUY0x2TCUcqgVVojYjGVFBcVZaH4ai_Y2_EoW74k31_WDetb7FR3rUEMT3Eik4CuISWs4loU',
    notes: 'Jasmine Mogra • Calming Brew',
    protocolKey: 'mogra'
  }
];

const SOMMELIER_RECOMMENDATIONS = {
  focus: {
    tea: 'Ancestral Brew — Orthodox Blend',
    protocolKey: 'orthodox',
    desc: 'Hand-crafted golden tips offering focused mental clarity, crisp malt structure, and zero caffeine crash.'
  },
  calm: {
    tea: 'Legacy Leaf — Green Tea Mogra',
    protocolKey: 'mogra',
    desc: 'Night-blooming jasmine infused whole leaves to soothe senses, lower blood pressure, and restore equilibrium.'
  },
  morning: {
    tea: 'Ancestral Brew — CTC Monsoon',
    protocolKey: 'ctc',
    desc: 'Full-bodied monsoon leaf harvest providing immediate vigor, rich amber depth, and robust aromatic finish.'
  },
  dining: {
    tea: 'Vintage Pu-erh Vault',
    protocolKey: 'puerh',
    desc: 'Aged subterranean vault tea that cuts through rich culinary pairings with deep earthy complexity.'
  }
};

// State Variables
let currentProtocolKey = 'ctc';
let remainingSeconds = PROTOCOLS['ctc'].seconds;
let totalDurationSeconds = PROTOCOLS['ctc'].seconds;
let timerInterval = null;
let isTimerRunning = false;
let currentInfusion = 1;
let wishlist = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSteepingMatrix();
  initCatalog();
  initSommelier();
  initCellar();
  loadSavedState();
});

// Tab Navigation
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
  });
}

// Tab 1: Steeping Matrix & Timer Engine
function initSteepingMatrix() {
  const presetSelect = document.getElementById('teaPresetSelect');
  const btnStartPause = document.getElementById('btnStartPause');
  const btnReset = document.getElementById('btnResetTimer');
  const btnMinus15 = document.getElementById('btnMinus15');
  const btnPlus15 = document.getElementById('btnPlus15');

  presetSelect.addEventListener('change', (e) => {
    setProtocol(e.target.value);
  });

  btnStartPause.addEventListener('click', toggleTimer);
  btnReset.addEventListener('click', resetTimer);

  btnMinus15.addEventListener('click', () => {
    adjustTime(-15);
  });

  btnPlus15.addEventListener('click', () => {
    adjustTime(15);
  });
}

function setProtocol(key) {
  if (!PROTOCOLS[key]) return;
  currentProtocolKey = key;
  const p = PROTOCOLS[key];

  remainingSeconds = p.seconds;
  totalDurationSeconds = p.seconds;
  currentInfusion = 1;

  document.getElementById('tempBadge').textContent = `🌡️ ${p.temp}`;
  document.getElementById('ratioBadge').textContent = `⚖️ ${p.ratio}`;
  document.getElementById('infusionNum').textContent = currentInfusion;
  document.getElementById('infusionTotal').textContent = p.totalInfusions;
  document.getElementById('steepTipText').textContent = p.tip;

  updateTimerDisplay();
  saveStateToStorage();
}

function toggleTimer() {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (remainingSeconds <= 0) return;
  isTimerRunning = true;

  updateStartButtonUI(true);

  // Send message to background service worker for alarm sync
  if (typeof chrome !== 'undefined' && chrome.runtime) {
    chrome.runtime.sendMessage({
      action: 'start_steep_timer',
      durationSecs: remainingSeconds,
      teaName: PROTOCOLS[currentProtocolKey].name
    });
  }

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      completeSteep();
    }
  }, 1000);

  saveStateToStorage();
}

function pauseTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
  updateStartButtonUI(false);

  if (typeof chrome !== 'undefined' && chrome.runtime) {
    chrome.runtime.sendMessage({ action: 'cancel_steep_timer' });
  }

  saveStateToStorage();
}

function resetTimer() {
  pauseTimer();
  remainingSeconds = totalDurationSeconds;
  updateTimerDisplay();
  saveStateToStorage();
}

function adjustTime(delta) {
  remainingSeconds = Math.max(5, remainingSeconds + delta);
  totalDurationSeconds = Math.max(remainingSeconds, totalDurationSeconds);
  updateTimerDisplay();
  saveStateToStorage();
}

function updateTimerDisplay() {
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const displayStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  document.getElementById('timerCountdown').textContent = displayStr;

  // Ring Progress Calculation (Circumference ~ 553px)
  const ring = document.getElementById('timerProgressRing');
  const fraction = remainingSeconds / Math.max(1, totalDurationSeconds);
  const offset = 553 * (1 - fraction);
  ring.style.strokeDashoffset = offset;
}

function updateStartButtonUI(running) {
  const textEl = document.getElementById('btnStartText');
  const iconEl = document.getElementById('playPauseIcon');

  if (running) {
    textEl.textContent = 'PAUSE INFUSION';
    iconEl.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/>';
  } else {
    textEl.textContent = 'START INFUSION';
    iconEl.innerHTML = '<path d="M8 5v14l11-7z" fill="currentColor"/>';
  }
}

function completeSteep() {
  pauseTimer();
  
  // Play Zen Chime sound
  const chkAudio = document.getElementById('chkAudioNotify');
  if (chkAudio && chkAudio.checked) {
    playZenChimeSound();
  }

  // Next infusion increment if available
  const p = PROTOCOLS[currentProtocolKey];
  if (currentInfusion < p.totalInfusions) {
    currentInfusion++;
    document.getElementById('infusionNum').textContent = currentInfusion;
  }

  alert(`🍵 Your ${p.name} infusion is steeped to perfection! Strain and serve.`);
}

// Web Audio API Zen Chime Sound
function playZenChimeSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    // Create dual oscillator for crystalline resonance
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(528, ctx.currentTime); // 528 Hz Solfeggio frequency

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(1056, ctx.currentTime); // Harmonic octave

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 2.5);
    osc2.stop(ctx.currentTime + 2.5);
  } catch (err) {
    console.warn('Audio chime playback restricted or unsupported.', err);
  }
}

// Tab 2: Catalog Renderer
function initCatalog() {
  const searchInput = document.getElementById('catalogSearch');
  const filterPills = document.querySelectorAll('#categoryFilterPills .pill');

  renderCatalog('all', '');

  searchInput.addEventListener('input', (e) => {
    const activePill = document.querySelector('#categoryFilterPills .pill.active');
    const cat = activePill ? activePill.getAttribute('data-cat') : 'all';
    renderCatalog(cat, e.target.value.toLowerCase());
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-cat');
      renderCatalog(cat, searchInput.value.toLowerCase());
    });
  });
}

function renderCatalog(categoryFilter, searchQuery) {
  const container = document.getElementById('catalogList');
  container.innerHTML = '';

  const filtered = CATALOG_ITEMS.filter(item => {
    const matchesCat = (categoryFilter === 'all' || item.category === categoryFilter);
    const matchesQuery = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) ||
      item.notes.toLowerCase().includes(searchQuery) ||
      item.provenance.toLowerCase().includes(searchQuery);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-wishlist">No teas match your search.</div>';
    return;
  }

  filtered.forEach(item => {
    const isSaved = wishlist.includes(item.id);
    const card = document.createElement('div');
    card.className = 'catalog-item';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="item-thumb" />
      <div class="item-info">
        <span class="item-badge">${item.badge}</span>
        <h4 class="item-title">${item.name}</h4>
        <span class="item-meta">${item.notes}</span>
      </div>
      <div class="item-actions">
        <span class="item-price">${item.price}</span>
        <button class="btn-steep-sm" data-protocol="${item.protocolKey}">STEEP</button>
        <button class="btn-wish-sm ${isSaved ? 'active' : ''}" data-id="${item.id}">
          ${isSaved ? '♥' : '♡'}
        </button>
      </div>
    `;

    // Steep button action
    card.querySelector('.btn-steep-sm').addEventListener('click', () => {
      document.querySelector('.tab-btn[data-tab="steep"]').click();
      document.getElementById('teaPresetSelect').value = item.protocolKey;
      setProtocol(item.protocolKey);
    });

    // Wishlist toggle action
    card.querySelector('.btn-wish-sm').addEventListener('click', (e) => {
      toggleWishlist(item.id);
      renderCatalog(categoryFilter, searchQuery);
    });

    container.appendChild(card);
  });
}

// Tab 3: Sommelier Mood Matcher
function initSommelier() {
  const moodBtns = document.querySelectorAll('.mood-btn');
  const btnLoadSteep = document.getElementById('btnLoadMatchedSteep');

  moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      moodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mood = btn.getAttribute('data-mood');
      const rec = SOMMELIER_RECOMMENDATIONS[mood];
      if (rec) {
        document.getElementById('matchTeaName').textContent = rec.tea;
        document.getElementById('matchTeaDesc').textContent = rec.desc;
        btnLoadSteep.setAttribute('data-protocol', rec.protocolKey);
      }
    });
  });

  btnLoadSteep.addEventListener('click', () => {
    const key = btnLoadSteep.getAttribute('data-protocol') || 'orthodox';
    document.querySelector('.tab-btn[data-tab="steep"]').click();
    document.getElementById('teaPresetSelect').value = key;
    setProtocol(key);
  });
}

// Tab 4: Cellar & Wishlist
function initCellar() {
  const btnVerify = document.getElementById('btnVerifyKey');
  const keyInput = document.getElementById('cellarKeyInput');
  const keyFeedback = document.getElementById('keyFeedback');
  const btnClearWishlist = document.getElementById('btnClearWishlist');

  btnVerify.addEventListener('click', () => {
    const val = keyInput.value.trim().toUpperCase();
    if (val.includes('CELLAR') || val.includes('CT-') || val === 'VIP' || val === '2025') {
      keyFeedback.className = 'key-feedback success';
      keyFeedback.textContent = '✓ Cellar Key Authenticated. Vault Allocation Priority Unlocked!';
    } else if (!val) {
      keyFeedback.className = 'key-feedback error';
      keyFeedback.textContent = 'Please enter an allocation access key.';
    } else {
      keyFeedback.className = 'key-feedback error';
      keyFeedback.textContent = 'Invalid allocation key format. Please request key via Concierge.';
    }
  });

  btnClearWishlist.addEventListener('click', () => {
    wishlist = [];
    saveWishlistToStorage();
    renderWishlistUI();
  });
}

function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(id);
  }
  saveWishlistToStorage();
  renderWishlistUI();
}

function renderWishlistUI() {
  const countEl = document.getElementById('wishlistCount');
  const itemsContainer = document.getElementById('wishlistItems');

  countEl.textContent = wishlist.length;

  if (wishlist.length === 0) {
    itemsContainer.innerHTML = '<div class="empty-wishlist">No saved teas yet. Click the heart icon in Catalog to save your favorite leaves.</div>';
    return;
  }

  itemsContainer.innerHTML = '';
  wishlist.forEach(id => {
    const item = CATALOG_ITEMS.find(c => c.id === id);
    if (item) {
      const row = document.createElement('div');
      row.className = 'catalog-item';
      row.style.padding = '6px 10px';
      row.innerHTML = `
        <div class="item-info">
          <h4 class="item-title">${item.name}</h4>
          <span class="item-meta">${item.price} • ${item.badge}</span>
        </div>
        <button class="btn-steep-sm" style="align-self:center;">Brew</button>
      `;
      row.querySelector('.btn-steep-sm').addEventListener('click', () => {
        document.querySelector('.tab-btn[data-tab="steep"]').click();
        document.getElementById('teaPresetSelect').value = item.protocolKey;
        setProtocol(item.protocolKey);
      });
      itemsContainer.appendChild(row);
    }
  });
}

// Storage Helpers
function saveStateToStorage() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({
      currentProtocolKey,
      remainingSeconds,
      totalDurationSeconds,
      isTimerRunning,
      currentInfusion
    });
  }
}

function saveWishlistToStorage() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ wishlist });
  }
}

function loadSavedState() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['wishlist', 'currentProtocolKey', 'remainingSeconds', 'isTimerRunning'], (data) => {
      if (data.wishlist) {
        wishlist = data.wishlist;
        renderWishlistUI();
      }
      if (data.currentProtocolKey) {
        currentProtocolKey = data.currentProtocolKey;
        document.getElementById('teaPresetSelect').value = currentProtocolKey;
        setProtocol(currentProtocolKey);
      }
    });
  }
}
