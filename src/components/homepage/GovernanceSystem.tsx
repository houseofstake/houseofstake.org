import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styles from './GovernanceSystem.module.css';

interface TabContent {
  id: string;
  title: string;
  content: string;
  image?: string;
  docsLink?: string;
}

const tabContents: TabContent[] = [
  {
    id: 'venear',
    title: 'What is veNEAR',
    content: `**veNEAR** is a non-transferable governance token earned by locking NEAR, stNEAR, or liNEAR. The longer you lock, the more voting power you get.`,
    docsLink: '/docs/governance-system/what-is-venear#',
  },
  {
    id: 'locking',
    title: 'veNEAR Locking Mechanism',
    content: `Lock NEAR, stNEAR, or liNEAR to get veNEAR. Two options:

- **Fixed Lock**: Lock for 3–48 months. More time = more veNEAR. Power decays over time.
- **Rolling Lock**: No set period. veNEAR grows over time. Unlock anytime with 3-month cooldown.

**Fixed = max power, less flexibility. Rolling = gradual power, flexible exit.**`,
    docsLink: '/docs/governance-system/venear-locking-mechanisms#',
  },
  {
    id: 'proposal',
    title: 'Proposal & Voting Process',
    content: `House of Stake uses a 3-step governance flow:

1. **Submit Proposal**
Anyone can propose using a public template. Community feedback is required before voting.

2. **Screening Committee**
7 members review proposals:
- 4+ approvals → simple majority (51%) vote
- <4 approvals → needs supermajority (75%)
Filters low-quality proposals early.

3. **On-chain Voting**
veNEAR holders vote directly or via delegates.
Voting power = veNEAR balance.
Standard voting period (e.g. 5–7 days).

All activity is public for transparency and accountability.`,
    docsLink: '/docs/governance-system/proposal-and-voting-process#',
  },
  {
    id: 'rewards',
    title: 'Rewards & Incentives',
    content: `House of Stake rewards active participation:

## veNEAR Holders
- Earn ~5.8–8.8% APY (from 0.5% NEAR inflation)
- Based on veNEAR amount & lock duration
- Voting may be required to claim
- Manual claiming, not auto-compounding

## Delegates
- Rewards for ≥80% voting, public updates, 0.5%+ veNEAR stake, KYC/KYB
- Incentivizes active, transparent delegation

## Funding
- 0.5% protocol inflation (capped, transparent)
- Future: ecosystem revenue may contribute

## Dynamic Scaling
Rewards adjust with veNEAR supply:
$$\\text{veNEAR}_{\\text{APY}} = \\frac{198}{\\sqrt{\\text{veNEAR}_{\\text{supply}}}}$$
→ Lower APY as supply grows = sustainable model`,
    docsLink: '/docs/governance-system/rewards-and-incentives#',
  },
  {
    id: 'inflation',
    title: 'Inflation Model',
    content: `House of Stake uses 0.5% annual NEAR inflation to fund governance.

- **100%** goes to veNEAR holders and active delegates
- Predictable, capped, and sustainable
- No major dilution to NEAR holders

**Why it matters:**
- Rewards long-term locking and voting
- Reduces need for treasury grants
- Keeps governance funding transparent and stable

**Adjustable via governance** if needed in the future.`,
    docsLink: '/docs/governance-system/inflation-model#',
  },
  {
    id: 'versioning',
    title: 'Versioning & Evolution',
    content: `House of Stake evolves through on-chain versioning:

- Major changes = version upgrades (roles, rules, funding)
- Approved via standard proposal + voting process
- All versions tracked and documented on-chain

**Why it matters:**
- Ensures transparency and stability
- Prevents undocumented changes
- Builds a shared history of governance evolution

Governance stays open to improvement — if proposed and approved by the community.`,
    docsLink: '/docs/governance-system/versioning-and-evolution#',
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

  // Auto-select tab or expand accordion based on URL hash
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      // Check if hash starts with "governance-" and extract the tab id
      if (hash.startsWith('governance-')) {
        const tabId = hash.replace('governance-', '');
        const matchingTab = tabContents.find(tab => tab.id === tabId);
        if (matchingTab) {
          if (isMobile) {
            // On mobile, expand the accordion
            setExpandedAccordions([matchingTab.id]);
          } else {
            // On desktop, select the tab
            setActiveTab(matchingTab.id);
          }
        }
      }
    };

    // Check on mount and when mobile state changes
    checkHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);
    
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [isMobile]);

  const activeContent = tabContents.find((tab) => tab.id === activeTab);

  const toggleAccordion = (id: string) => {
    setExpandedAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="governance-system" className={styles.governanceSection}>
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
              <div
                key={tab.id}
                id={`governance-${tab.id}`}
                className={styles.accordionItem}
              >
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
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        table: ({ children }) => (
                          <table className={styles.dataTable}>{children}</table>
                        ),
                        h2: ({ children }) => (
                          <h2 className={styles.contentHeading2}>{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className={styles.contentHeading3}>{children}</h3>
                        ),
                        ul: ({ children }) => (
                          <ul className={styles.contentList}>{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className={styles.contentOrderedList}>
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className={styles.contentListItem}>{children}</li>
                        ),
                        strong: ({ children }) => (
                          <strong className={styles.contentStrong}>
                            {children}
                          </strong>
                        ),
                        img: ({ src, alt }) => (
                          <img
                            src={src}
                            alt={alt}
                            className={styles.contentInlineImage}
                          />
                        ),
                      }}
                    >
                      {tab.content}
                    </Markdown>
                    {tab.docsLink && (
                      <div className={styles.learnMoreWrapper}>
                        <a href={tab.docsLink} className={styles.learnMoreLink}>
                          Learn more →
                        </a>
                      </div>
                    )}
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

            <div
              id={`governance-${activeTab}`}
              className={styles.tabContent}
              key={activeTab}
            >
              {activeContent && (
                <>
                  <div className={styles.contentText}>
                    <Markdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        table: ({ children }) => (
                          <table className={styles.dataTable}>{children}</table>
                        ),
                        h2: ({ children }) => (
                          <h2 className={styles.contentHeading2}>{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className={styles.contentHeading3}>{children}</h3>
                        ),
                        ul: ({ children }) => (
                          <ul className={styles.contentList}>{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className={styles.contentOrderedList}>
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className={styles.contentListItem}>{children}</li>
                        ),
                        strong: ({ children }) => (
                          <strong className={styles.contentStrong}>
                            {children}
                          </strong>
                        ),
                        img: ({ src, alt }) => (
                          <img
                            src={src}
                            alt={alt}
                            className={styles.contentInlineImage}
                          />
                        ),
                      }}
                    >
                      {activeContent.content}
                    </Markdown>
                    {activeContent.docsLink && (
                      <div className={styles.learnMoreWrapper}>
                        <a
                          href={activeContent.docsLink}
                          className={styles.learnMoreLink}
                        >
                          Learn more →
                        </a>
                      </div>
                    )}
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
