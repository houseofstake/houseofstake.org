// Font loading script - Hides page until fonts are ready (max 3 seconds)
(function () {
  // Inject CSS to hide the page initially
  const style = document.createElement('style');
  style.id = 'font-loader-styles';
  style.textContent = `
    html {
      visibility: hidden !important;
      opacity: 0 !important;
    }
    html.fonts-ready {
      visibility: visible !important;
      opacity: 1 !important;
      transition: opacity 0.3s ease-in-out;
    }
  `;

  // Add style as first element in head to ensure it applies immediately
  if (document.head.firstChild) {
    document.head.insertBefore(style, document.head.firstChild);
  } else {
    document.head.appendChild(style);
  }

  // Function to show the page
  const showPage = () => {
    document.documentElement.classList.add('fonts-ready');
    // Clean up the style tag after transition completes
    setTimeout(() => {
      const styleTag = document.getElementById('font-loader-styles');
      if (styleTag) {
        styleTag.remove();
      }
    }, 500);
  };

  // Check if document.fonts API is supported
  if (!document.fonts) {
    showPage();
    return;
  }

  // Define critical font weights to check
  const criticalFonts = [
    '400 16px "FK Grotesk"',
    '500 16px "FK Grotesk"',
    '600 16px "FK Grotesk"',
  ];

  // Check if all critical fonts are already loaded
  const checkFontsLoaded = () => {
    return criticalFonts.every((font) => {
      try {
        return document.fonts.check(font);
      } catch (e) {
        return false;
      }
    });
  };

  // If fonts are already loaded (from cache), show immediately
  if (checkFontsLoaded()) {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      showPage();
    });
    return;
  }

  // Set up 3-second timeout (matching font-display: fallback behavior)
  let timeoutId = setTimeout(() => {
    showPage();
  }, 3000);

  // Wait for all fonts to be ready
  document.fonts.ready
    .then(() => {
      clearTimeout(timeoutId);
      showPage();
    })
    .catch((error) => {
      clearTimeout(timeoutId);
      showPage();
    });

  // Additional safety: show page after DOMContentLoaded + 3s if something goes wrong
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      if (!document.documentElement.classList.contains('fonts-ready')) {
        showPage();
      }
    }, 3000);
  });
})();
