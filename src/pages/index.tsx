import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Hero from '@site/src/components/homepage/Hero';
import What from '@site/src/components/homepage/What';
import How from '@site/src/components/homepage/How';
import StructureRoles from '@site/src/components/homepage/StructureRoles';
import GovernanceSystem from '@site/src/components/homepage/GovernanceSystem';
import Roadmap from '@site/src/components/homepage/Roadmap';
import Footer from '@site/src/components/homepage/Footer';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }
    
    const scrollToAnchor = () => {
      const hash = window.location.hash;
      
      if (hash) {
        // Small delay to ensure components are mounted
        setTimeout(() => {
          const id = hash.substring(1);
          
          // If hash is just '#' or empty, scroll to top
          if (!id || id === '') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            // Otherwise, try to find the element and scroll to it
            const element = document.getElementById(id);
            
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // Adjust for header after scrollIntoView completes
              setTimeout(() => {
                window.scrollBy(0, -90);
              }, 300);
            }
          }
        }, 300);
      }
    };
    
    // Call on mount
    scrollToAnchor();
    
    // Listen for hash changes
    window.addEventListener('hashchange', scrollToAnchor);
    
    return () => {
      window.removeEventListener('hashchange', scrollToAnchor);
    };
  }, []);
  return (
    <>
      <Head>
        <title>{`${siteConfig.title}`}</title>
        {/* Preload all images for faster loading */}
        {/* Hero and main sections */}
        <link rel="preload" href="/img/hero.png" as="image" type="image/png" />

        {/* Logo and header */}
        <link
          rel="preload"
          href="/img/near-logo.svg"
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
      </main>
      <Footer />
    </>
  );
}
// Force rebuild at Sun Aug  3 22:09:28 EEST 2025
