import React, { type ReactNode } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
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
