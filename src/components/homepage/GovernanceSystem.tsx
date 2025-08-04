import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

veNEAR creates a strong alignment between governance power and economic commitment. Those with more at stake—literally and figuratively—have more influence, encouraging responsible, engaged decision-making that supports the long-term health of the ecosystem.

![veNEAR Governance Model](/img/4262b3cb81555c40e4b2b30de47a378581d6184e.png)`,
  },
  {
    id: 'locking',
    title: 'veNEAR Locking Mechanism',
    content: `To obtain veNEAR — the voting token used in NEAR governance — users must lock NEAR, stNEAR, or liNEAR in a vote-escrow contract. House of Stake supports two locking mechanisms:

## 1. Fixed Lock

Users choose a fixed lock-up period, ranging from 3 months to 4 years. The longer the lock duration, the more veNEAR they receive per token. Voting power (veNEAR) decays linearly over time until the lock expires.

- **Minimum duration:** 3 months
- **Maximum duration:** 4 years
- **Conversion rate:** Increases with longer lock durations
- **Best for:** Users confident in long-term alignment

The amount of veNEAR received is proportional to both the number of tokens locked and the duration selected.

### 📊 Example: veNEAR by Lock Duration

| User | Locked NEAR | Lock-up (months) | veNEAR | veNEAR Premium |
|------|-------------|------------------|--------|----------------|
| A    | 1           | 12               | 1.5    | 50%            |
| B    | 1           | 24               | 2.0    | 100%           |
| C    | 1           | 36               | 2.5    | 150%           |
| D    | 1           | 48               | 3.0    | 200%           |`,
  },
  {
    id: 'proposal',
    title: 'Proposal & Voting Process',
    content: 'Content for Proposal & Voting Process will be added here.',
  },
  {
    id: 'rewards',
    title: 'Rewards & Incentives',
    content: `## Rewards & Incentives Overview

House of Stake implements a sustainable incentive system to encourage meaningful participation in NEAR governance. The model is designed to reward both veNEAR holders and endorsed delegates, balancing competitiveness with long-term sustainability.

### veNEAR Holder Rewards

veNEAR holders receive rewards for locking tokens and engaging in governance.

- Funded by 0.5% of annual NEAR inflation
- Distributed proportionally based on veNEAR amount and lock duration
- Rewards must be claimed manually
- Voting participation may be required in future phases
- Target APY ranges from approximately 5.8% to 8.8%, benchmarked against DeFi yields

### Delegate Incentives

Endorsed delegates are eligible for additional rewards, provided they meet performance and transparency standards.

- Minimum 80% voting participation
- Required to publish quarterly public voting reports
- Must hold at least 0.5% of total veNEAR supply
- Must complete KYC/KYB verification for accountability

### Sustainable Funding

Incentives are funded from a predictable and capped source:

- 0.5% protocol inflation allocated to governance incentives
- Potential future funding from ecosystem revenues such as protocol fees
- Transparent and scalable budget model

### Dynamic Reward Scaling

To ensure rewards remain sustainable as participation grows, veNEAR APY adjusts automatically based on total veNEAR supply:

![Dynamic Reward Scaling Formula](https://placehold.co/600x300/1a1a1a/ffffff/png?text=Dynamic+Reward+Scaling+Formula)

This formula ensures that APY decreases as veNEAR supply increases, maintaining fair yields in early stages while controlling emissions over time.`,
  },
  {
    id: 'inflation',
    title: 'Inflation Model',
    content: `## Inflation Model Overview

House of Stake employs a fixed and transparent inflation mechanism to support governance incentives and long-term platform sustainability.

### Core Principles

1. **Annual inflation rate:** 0.5% of total NEAR supply  
2. **Inflation allocation:** 100% goes to governance participation incentives  
3. **Reward distribution:**
   - veNEAR holders  
   - Endorsed delegates  

### Design Rationale

1. Incentivizes long-term token locking and active governance participation  
2. Aligns economic incentives with governance quality  
3. Replaces ad-hoc treasury grants with a sustainable funding stream  
4. Provides a predictable and bounded budget for governance operations  

### Flexibility and Governance

1. The inflation rate and distribution logic can be adjusted through governance  
2. Possible triggers for change include:
   - Participation levels  
   - Tokenomic shifts  
   - Ecosystem growth and evolving needs`,
  },
  {
    id: 'versioning',
    title: 'Versioning & Evolution',
    content: `## Versioning & Evolution Overview

House of Stake is designed as an evolving governance system. To stay relevant, it must be able to improve over time — without losing stability or trust.

### On-chain Versioning

1. Each major governance change (e.g., new roles, voting rules, funding mechanisms) is treated as a version upgrade  
2. Version upgrades follow the standard proposal and voting process  
3. All changes are:
   - Tracked on-chain  
   - Publicly documented  
   - Linked to specific proposals and rationale  

### Why Versioning Matters

1. Promotes transparency and continuity  
2. Prevents abrupt or undocumented changes  
3. Creates a shared memory for governance evolution  

### Community-Driven Iteration

1. Governance is intentionally open-ended — it is never considered "final"  
2. The system welcomes:
   - Experimentation  
   - Iterative improvements  
   - New governance ideas  
3. All changes must go through transparent proposal, debate, and voting processes`,
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
                    <Markdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        table: ({children}) => <table className={styles.dataTable}>{children}</table>,
                        h2: ({children}) => <h2 className={styles.contentHeading2}>{children}</h2>,
                        h3: ({children}) => <h3 className={styles.contentHeading3}>{children}</h3>,
                        ul: ({children}) => <ul className={styles.contentList}>{children}</ul>,
                        ol: ({children}) => <ol className={styles.contentOrderedList}>{children}</ol>,
                        li: ({children}) => <li className={styles.contentListItem}>{children}</li>,
                        strong: ({children}) => <strong className={styles.contentStrong}>{children}</strong>,
                        img: ({src, alt}) => <img src={src} alt={alt} className={styles.contentInlineImage} />,
                      }}
                    >
                      {tab.content}
                    </Markdown>
                  </div>
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
                    <Markdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        table: ({children}) => <table className={styles.dataTable}>{children}</table>,
                        h2: ({children}) => <h2 className={styles.contentHeading2}>{children}</h2>,
                        h3: ({children}) => <h3 className={styles.contentHeading3}>{children}</h3>,
                        ul: ({children}) => <ul className={styles.contentList}>{children}</ul>,
                        ol: ({children}) => <ol className={styles.contentOrderedList}>{children}</ol>,
                        li: ({children}) => <li className={styles.contentListItem}>{children}</li>,
                        strong: ({children}) => <strong className={styles.contentStrong}>{children}</strong>,
                        img: ({src, alt}) => <img src={src} alt={alt} className={styles.contentInlineImage} />,
                      }}
                    >
                      {activeContent.content}
                    </Markdown>
                  </div>
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
