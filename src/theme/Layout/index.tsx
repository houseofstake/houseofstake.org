import React, { type ReactNode, useEffect } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Header from '@site/src/components/homepage/Header';
import Footer from '@site/src/components/homepage/Footer';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  // Hide the default navbar and footer
  const customProps = {
    ...props,
    noNavbar: true,
    noFooter: true,
  };

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // If hash is just '#' (no specific anchor), scroll to top
      if (hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ paddingTop: '72px' }}>
        <Layout {...customProps} />
      </div>
      <Footer />
    </>
  );
}
