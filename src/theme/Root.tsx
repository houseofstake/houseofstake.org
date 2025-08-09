import React, { useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Custom Root component that wraps the entire Docusaurus app
// This ensures pages scroll to top when navigation routes change
function Root({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const previousPathname = useRef<string | null>(null);

  // Disable browser scroll restoration on mount
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Only run on client side
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const currentPathname = location.pathname;
    const hasHash = location.hash;
    const isPathChange = previousPathname.current !== null && previousPathname.current !== currentPathname;

    // Update previous pathname for next comparison
    previousPathname.current = currentPathname;

    // If there's a hash, let the browser handle scrolling to the anchor
    if (hasHash) {
      // For direct navigation to anchor (initial load or refresh)
      // We need to wait for the DOM to be ready and then trigger the anchor scroll
      const scrollToAnchor = () => {
        const hash = location.hash.slice(1); // Remove the #
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView();
        }
      };
      
      // Try immediately
      scrollToAnchor();
      
      // Try again after DOM is ready
      requestAnimationFrame(() => {
        scrollToAnchor();
      });
      
      // And once more after a delay for async content
      setTimeout(() => {
        scrollToAnchor();
      }, 100);
      
      return;
    }

    // Only scroll to top if we're changing pages (not on initial load or same page navigation)
    if (isPathChange) {
      // Force scroll to top on route change
      const scrollToTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      // Immediate scroll
      scrollToTop();

      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        scrollToTop();
      });

      // Also scroll after a slight delay to handle any async rendering
      const timeoutId = setTimeout(() => {
        scrollToTop();
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}

export default Root;