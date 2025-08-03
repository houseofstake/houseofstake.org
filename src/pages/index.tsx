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
