import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '@site/src/components/homepage/Hero';
import What from '@site/src/components/homepage/What';
import How from '@site/src/components/homepage/How';
import StructureRoles from '@site/src/components/homepage/StructureRoles';
import GovernanceSystem from '@site/src/components/homepage/GovernanceSystem';
import Roadmap from '@site/src/components/homepage/Roadmap';
import GetInvolved from '@site/src/components/homepage/GetInvolved';
import FindUs from '@site/src/components/homepage/FindUs';
import Footer from '@site/src/components/homepage/Footer';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <title>{`${siteConfig.title}`}</title>
        {/* Preload all images for faster loading */}
        {/* Hero and main sections */}
        <link rel="preload" href="/img/hero.png" as="image" type="image/png" />
        <link
          rel="preload"
          href="/img/get_involved.png"
          as="image"
          type="image/png"
        />

        {/* Logo and header */}
        <link
          rel="preload"
          href="/img/near-logo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/near-logo-button.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* Social icons */}
        <link
          rel="preload"
          href="/img/blog-icon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/near-forum-icon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/twitter-x-icon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/telegram-icon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/github-icon.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* Governance and other icons */}
        <link
          rel="preload"
          href="/img/governance-icon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/venear-governance-model.png"
          as="image"
          type="image/png"
        />
      </Head>

      <main>
        <Hero />
        <What />
        <How />
        <StructureRoles />
        <GovernanceSystem />
        <Roadmap />
        <GetInvolved />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
// Force rebuild at Sun Aug  3 22:09:28 EEST 2025
