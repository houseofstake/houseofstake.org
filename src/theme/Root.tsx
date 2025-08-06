import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Head from '@docusaurus/Head';

// Custom Root component that wraps the entire Docusaurus app
// This ensures pages scroll to top when navigation routes change
function Root({ children }: { children: React.ReactNode }) {
  const location = useLocation();

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

    // Force scroll to top on route change
    const scrollToTop = () => {
      // Use both methods to ensure scroll happens
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate scroll
    scrollToTop();

    // Use requestAnimationFrame for better timing
    window.requestAnimationFrame(() => {
      scrollToTop();
    });

    // Also scroll after a slight delay to handle any async rendering
    const timeoutId = setTimeout(() => {
      scrollToTop();
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <>
      <Head>
        {/* Preload critical font weights to prevent FOUT */}
        <link
          rel="preload"
          href="/fonts/FKGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/FKGrotesk-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/FKGrotesk-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {children}
    </>
  );
}

export default Root;
