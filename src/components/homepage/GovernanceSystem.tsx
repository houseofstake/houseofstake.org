import React, { useState, useEffect } from 'react';
import styles from './GovernanceSystem.module.css';

interface TabContent {
  id: string;
  title: string;
  content: string;
  image?: string;
}

const tabContents: TabContent[] = [
  {
    id: 'venear',
    title: 'What is veNEAR',
    content: `veNEAR (vote-escrowed NEAR) is a governance token that gives NEAR holders the ability to participate in House of Stake governance in a stake-weighted, time-locked manner.

By locking NEAR, stNEAR, or liNEAR tokens for a fixed period (from 3 months up to 4 years), users receive veNEAR. The longer the lock duration, the greater the voting power received. This mechanism aligns incentives for long-term commitment and active participation.

veNEAR creates a strong alignment between governance power and economic commitment. Those with more at stake—literally and figuratively—have more influence, encouraging responsible, engaged decision-making that supports the long-term health of the ecosystem.`,
    image: '/img/4262b3cb81555c40e4b2b30de47a378581d6184e.png',
  },
  {
    id: 'locking',
    title: 'veNEAR Locking Mechanism',
    content: 'Content for Locking Mechanisms will be added here.',
  },
  {
    id: 'proposal',
    title: 'Proposal & Voting Process',
    content: 'Content for Proposal & Voting Process will be added here.',
  },
  {
    id: 'rewards',
    title: 'Rewards & Incentives',
    content: 'Content for Rewards & Incentives will be added here.',
  },
  {
    id: 'inflation',
    title: 'Inflation Model',
    content: 'Content for Inflation Model will be added here.',
  },
  {
    id: 'versioning',
    title: 'Versioning & Evolution',
    content: 'Content for Versioning & Evolution will be added here.',
  },
];

const GovernanceSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('venear');
  const [expandedAccordions, setExpandedAccordions] = useState<string[]>([
    'venear',
  ]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeContent = tabContents.find((tab) => tab.id === activeTab);

  const toggleAccordion = (id: string) => {
    setExpandedAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.governanceSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <h2 className={styles.title}>Governance System</h2>
          </div>
          <div className={styles.divider} />
        </div>

        {isMobile ? (
          // Accordion layout for mobile/tablet
          <div className={styles.accordionWrapper}>
            {tabContents.map((tab) => (
              <div key={tab.id} className={styles.accordionItem}>
                <div
                  className={`${styles.accordionHeader} ${expandedAccordions.includes(tab.id) ? styles.expanded : ''}`}
                >
                  <button
                    className={styles.accordionTitleButton}
                    onClick={() => toggleAccordion(tab.id)}
                    aria-expanded={expandedAccordions.includes(tab.id)}
                  >
                    <span className={styles.accordionTitle}>{tab.title}</span>
                  </button>
                  <button
                    className={`${styles.accordionIconButton} ${expandedAccordions.includes(tab.id) ? styles.expanded : ''}`}
                    onClick={() => toggleAccordion(tab.id)}
                    aria-label={
                      expandedAccordions.includes(tab.id)
                        ? 'Collapse'
                        : 'Expand'
                    }
                  >
                    <svg
                      className={styles.accordionIcon}
                      width="57"
                      height="58"
                      viewBox="0 0 57 58"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7153 14.8579V43.1421"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.2061 31.6519L28.7156 43.1423L17.2251 31.6519"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={`${styles.accordionContent} ${expandedAccordions.includes(tab.id) ? styles.expanded : ''}`}
                >
                  <div className={styles.accordionText}>
                    {tab.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {tab.image && (
                    <div
                      className={styles.accordionImage}
                      style={{ backgroundImage: `url('${tab.image}')` }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Tab layout for desktop
          <div className={styles.contentWrapper}>
            <div className={styles.tabList}>
              {tabContents.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  <span className={styles.tabTitle}>{tab.title}</span>
                </button>
              ))}
            </div>

            <div className={styles.tabContent} key={activeTab}>
              {activeContent && (
                <>
                  <div className={styles.contentText}>
                    {activeContent.content
                      .split('\n\n')
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>
                  {activeContent.image && (
                    <div
                      className={styles.contentImage}
                      style={{
                        backgroundImage: `url('${activeContent.image}')`,
                      }}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GovernanceSystem;
