// Font loading script to prevent FOUT/FOIT
(function() {
  // Hide the entire page initially
  document.documentElement.style.visibility = 'hidden';
  document.documentElement.style.opacity = '0';
  
  // Define the fonts we need to wait for
  const fontsToLoad = [
    new FontFace('FK Grotesk', 'url(/fonts/FKGrotesk-Regular.woff2) format("woff2"), url(/fonts/FKGrotesk-Regular.woff) format("woff")', { weight: '400' }),
    new FontFace('FK Grotesk', 'url(/fonts/FKGrotesk-Medium.woff2) format("woff2"), url(/fonts/FKGrotesk-Medium.woff) format("woff")', { weight: '500' }),
    new FontFace('FK Grotesk', 'url(/fonts/FKGrotesk-Bold.woff2) format("woff2"), url(/fonts/FKGrotesk-Bold.woff) format("woff")', { weight: '600' }),
  ];
  
  // Load all fonts
  Promise.all(fontsToLoad.map(font => {
    document.fonts.add(font);
    return font.load();
  }))
  .then(() => {
    // All critical fonts loaded, show the page with a fade-in
    document.documentElement.style.transition = 'opacity 0.3s ease-in-out';
    document.documentElement.style.visibility = 'visible';
    document.documentElement.style.opacity = '1';
  })
  .catch(error => {
    console.warn('Font loading error:', error);
    // Show page anyway after error to prevent indefinite hiding
    document.documentElement.style.visibility = 'visible';
    document.documentElement.style.opacity = '1';
  });
  
  // Fallback: Show page after 3 seconds regardless
  setTimeout(() => {
    if (document.documentElement.style.visibility === 'hidden') {
      document.documentElement.style.transition = 'opacity 0.3s ease-in-out';
      document.documentElement.style.visibility = 'visible';
      document.documentElement.style.opacity = '1';
    }
  }, 3000);
})();