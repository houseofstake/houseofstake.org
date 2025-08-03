import React, { useState } from 'react';
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
    title: 'Locking Mechanisms',
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

  const activeContent = tabContents.find(tab => tab.id === activeTab);

  return (
    <section className={styles.governanceSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Governance System</h2>
          <div className={styles.divider} />
        </div>

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

          <div className={styles.tabContent}>
            {activeContent && (
              <>
                <div className={styles.contentText}>
                  {activeContent.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                {activeContent.image && (
                  <div 
                    className={styles.contentImage}
                    style={{ backgroundImage: `url('${activeContent.image}')` }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSystem;