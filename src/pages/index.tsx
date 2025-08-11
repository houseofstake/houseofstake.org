import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Hero from '@site/src/components/homepage/Hero';
import What from '@site/src/components/homepage/What';
import How from '@site/src/components/homepage/How';
import StructureRoles from '@site/src/components/homepage/StructureRoles';
import GovernanceSystem from '@site/src/components/homepage/GovernanceSystem';
import Roadmap from '@site/src/components/homepage/Roadmap';
import Footer from '@site/src/components/homepage/Footer';
import useHomepageContent from '@site/src/utils/useHomepageContent';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const content = useHomepageContent();

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
        <link
          rel="preload"
          href={useBaseUrl('/img/hero.png')}
          as="image"
          type="image/png"
        />

        {/* Logo and header */}
        <link
          rel="preload"
          href={useBaseUrl('/img/near-logo.svg')}
          as="image"
          type="image/svg+xml"
        />
      </Head>

      <main>
        {(content.hero?.visible ?? true) && <Hero />}
        {(content.what?.visible ?? true) && <What />}
        {(content.how?.visible ?? true) && <How />}
        {(content.structureRoles?.visible ?? false) && <StructureRoles />}
        {(content.governanceSystem?.visible ?? false) && <GovernanceSystem />}
        {(content.roadmap?.visible ?? false) && <Roadmap />}
      </main>
      <Footer />
    </>
  );
}
