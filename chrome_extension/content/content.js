// Content Script for Camellia Tips Chrome Extension

(() => {
  const TEA_KEYWORDS = ['tea', 'steep', 'assam', 'darjeeling', 'puerh', 'pu-erh', 'oolong', 'gyokuro', 'mogra', 'matcha', 'chai', 'infusion', 'camellia'];
  let floatingWidget = null;

  // Listen for text selection
  document.addEventListener('mouseup', () => {
    const selection = window.getSelection().toString().trim();
    if (selection.length > 2 && selection.length < 50) {
      const lower = selection.toLowerCase();
      const isTeaRelated = TEA_KEYWORDS.some(kw => lower.includes(kw));

      if (isTeaRelated) {
        showFloatingWidget(selection);
      }
    }
  });

  function showFloatingWidget(selectedText) {
    removeFloatingWidget();

    floatingWidget = document.createElement('div');
    floatingWidget.className = 'ct-floating-widget';
    floatingWidget.innerHTML = `
      <div class="ct-widget-inner">
        <span class="ct-widget-logo">🍵</span>
        <span class="ct-widget-text">Camellia Tips: <strong>"${selectedText}"</strong></span>
        <button class="ct-widget-btn" id="ctWidgetBtnSearch">Search Catalog</button>
        <button class="ct-widget-close" id="ctWidgetBtnClose">×</button>
      </div>
    `;

    document.body.appendChild(floatingWidget);

    document.getElementById('ctWidgetBtnSearch').addEventListener('click', () => {
      window.open(`http://localhost:4321/collection?search=${encodeURIComponent(selectedText)}`, '_blank');
      removeFloatingWidget();
    });

    document.getElementById('ctWidgetBtnClose').addEventListener('click', removeFloatingWidget);

    // Auto dismiss after 8 seconds
    setTimeout(removeFloatingWidget, 8000);
  }

  function removeFloatingWidget() {
    if (floatingWidget && floatingWidget.parentNode) {
      floatingWidget.parentNode.removeChild(floatingWidget);
      floatingWidget = null;
    }
  }
})();
