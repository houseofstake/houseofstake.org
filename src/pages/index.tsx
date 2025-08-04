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
        <link rel="preload" href="/img/hero.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/get_involved.svg" as="image" type="image/svg+xml" />
        
        {/* Logo and header */}
        <link rel="preload" href="/img/182fdc317f272c138653a6ca64dcec845f43ec76.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/7362a17600fbfb1a525a67eaca6061513d362c27.svg" as="image" type="image/svg+xml" />
        
        {/* Social icons */}
        <link rel="preload" href="/img/d844f433a694945489021a9342caa22e6247c18e.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/c89ebe1c8ba03c7cac32652e2768adfd3f41339b.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/e3d72dc08bb70db3f8a2c2219f275f4dc2934a16.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/009c4b08ae2422f0e72fb148868714faf971ba43.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/f021978b954a445305131d3b44c8e621b9241c33.svg" as="image" type="image/svg+xml" />
        
        {/* Governance and other icons */}
        <link rel="preload" href="/img/governance-icon.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/img/4262b3cb81555c40e4b2b30de47a378581d6184e.png" as="image" type="image/png" />
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
