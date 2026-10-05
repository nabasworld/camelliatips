# 🍵 Camellia Tips — Luxury Sommelier Chrome Extension

An ultra-luxurious, Manifest V3 Chrome Extension crafted for **Camellia Tips** connoisseurs. Features precision thermodynamic steeping protocols, rare tea catalog exploration, sommelier mood matcher, background desktop alert timers, and private cellar access.

---

## 🌟 Key Features

1. **⏱️ Sommelier Steeping Matrix & Companion**:
   - Multi-infusion precision timers for CTC Monsoon, Ancestral Orthodox, Mogra Green, Young Hyson, Imperial Gyokuro, & Vintage Pu-erh.
   - Temperature (°C) & Water-to-Leaf Ratio guidance.
   - Live visual countdown ring with pause, resume, and +/- 15s adjustment.
   - **Audio Zen Bell Chime** (Web Audio 528Hz Solfeggio tone) and **Background Desktop Alerts** when steep completes!

2. **🍃 Rare Tea Catalog Explorer**:
   - Browse catalog lots directly from the extension popup.
   - Live search by tea name, tasting notes, or provenance.
   - Category filtering (Ancestral Brew, Monsoon Bliss, Legacy Leaf).
   - One-click **"Brew Now"** (pre-loads steep settings) & **Wishlist Hearting** (saved in Chrome local storage).

3. **🧘 Sommelier Mood Matcher**:
   - Discover the perfect brew for your moment: *Deep Focus*, *Evening Calm*, *Morning Energy*, or *High Tea Pairing*.
   - Instant recommendation engine with tea tasting notes and 1-click timer load.
   - Daily Sommelier tea ceremony wisdom quotes.

4. **🔑 Private Cellar & Quick Access**:
   - Allocation key validator for member vault access (`CT-CELLAR-2025`).
   - One-click navigation shortcuts to Private Cellar, Reserve Collection, Catalog, & Brand Story.

5. **✨ Context Menu & Web Smart Widget**:
   - Highlight any tea word on any webpage to search Camellia Tips catalog or launch the floating quick-steep widget.

---

## 🚀 How to Install in Google Chrome

Follow these quick steps to load the unpacked extension in Chrome:

1. Open **Google Chrome**.
2. In the address bar, navigate to: `chrome://extensions/`
3. In the top right corner, toggle **Developer mode** to `ON` (switch to blue).
4. Click the **"Load unpacked"** button in the top left.
5. Select the `chrome_extension` folder located at:
   ```
   f:\Camelia important files\Website and social media\Camellia Tips website\stitch_camellia_tips_luxury_landing_page\chrome_extension
   ```
6. Click **Select Folder**.
7. The **Camellia Tips — Luxury Sommelier & Steeping Matrix** extension icon will now appear in your Chrome toolbar!

---

## 🛠️ File Structure

```
chrome_extension/
├── manifest.json         # Manifest V3 specification
├── popup/
│   ├── popup.html        # Main extension UI (Obsidian & Gold luxury layout)
│   ├── popup.css         # Custom styling, animations & ring timer graphics
│   └── popup.js          # Steeping engine, Web Audio chime, catalog & state storage
├── background/
│   └── background.js     # Background Service Worker for alarms, notifications & context menus
├── content/
│   ├── content.js        # Web page text selector and floating tea widget
│   └── content.css       # Floating widget luxury styling
├── icons/
│   ├── icon.svg          # Master SVG vector logo
│   ├── icon16.png        # 16x16 PNG toolbar icon
│   ├── icon48.png        # 48x48 PNG extension manager icon
│   └── icon128.png       # 128x128 PNG Chrome Web Store icon
└── create_icons.js       # Node script for icon generation
```
