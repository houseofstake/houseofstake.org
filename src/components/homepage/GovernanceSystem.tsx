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

![veNEAR Governance Model](/img/venear-governance-model.png)`,
  },
  {
    id: 'locking',
    title: 'veNEAR Locking Mechanism',
    content: `## veNEAR Locking Mechanism

To obtain **veNEAR**, users must lock **NEAR**, **stNEAR**, or **liNEAR** tokens in a vote-escrow contract.
House of Stake supports a **Rolling Lock** mechanism, providing flexibility while encouraging long-term alignment with the NEAR ecosystem.

---

### 🔁 Rolling Lock

The Rolling Lock mechanism allows users to lock tokens without selecting a fixed period.
veNEAR **accumulates linearly over time**, up to a maximum equivalent of 4 years of lock. Users can initiate an unlock at any moment. Once initiated, a **3-month cooldown** begins, during which **veNEAR voting power decays to zero**, and tokens become withdrawable at the end.

**Key properties:**
- ✅ No fixed period required
- 📈 veNEAR accrues over time (max at 4 years)
- ⏳ 3-month unlock cooldown
- 🧩 Flexible exit for uncertain users

---

### 📊 Example: veNEAR Accumulation and Unlock Flow

This mechanism rewards consistent long-term locking while preserving flexibility.

1. User deposits 1 NEAR into veNEAR contract.
2. veNEAR accrues gradually (e.g., per epoch).
3. After 3 years, the user decides to unlock.
4. A 3-month cooldown begins — veNEAR decays linearly to 0.
5. After cooldown ends, the 1 NEAR becomes withdrawable.

---

### ⚖️ Feature Comparison

| Feature            | Rolling Lock                          |
|--------------------|---------------------------------------|
| Initial choice     | No initial lock needed                |
| Flexibility        | High (can unlock anytime)             |
| Max voting power   | Yes (accumulates over time)           |
| Exit process       | Start 3-month cooldown anytime        |

---

The Rolling Lock model is ideal for users who prefer **gradual commitment** over fixed terms.
It supports a **stake- and time-weighted governance** system that balances flexibility with long-term influence.`,
  },
  {
    id: 'proposal',
    title: 'Proposal & Voting Process',
    content: `House of Stake uses a two-step decision-making process to ensure efficiency, transparency, and decentralization.

### 1. Proposal Submission
Anyone can submit a proposal using a standard template and must post it publicly for discussion.
It should include goals, rationale, impact, and any funding request.

### 2. Screening Committee Review
A 7-member committee checks if the proposal is ready:

- 4+ approvals → moves to a simple majority vote (51%)
- Fewer than 4 → requires a supermajority (75%)

### 3. On-chain Voting
Approved proposals go to a veNEAR-based vote:

- Voting power = veNEAR held
- Standard voting period (e.g., 5–7 days)

### 4. Transparency
All proposals, reviews, and results are published for full transparency and auditability.`,
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
