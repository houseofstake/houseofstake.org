import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './StructureRoles.module.css';

interface AccordionItem {
  id: string;
  title: string;
  content?: string;
  link: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 'working-groups',
    title: 'Working Groups Overview',
    content: `House of Stake includes several working groups composed of endorsed delegates, each focused on a key area of NEAR ecosystem governance.

These groups develop strategy, shape proposals, and support execution. They operate independently, coordinate across domains, and share regular updates.

**Current groups:**

- **Governance Infrastructure & Processes** — voting systems, proposal processes, and governance tools

- **Ecosystem Growth Strategy** — ecosystem expansion, partnerships, and incentive programs

- **Treasury Strategy & Management** — treasury allocation, funding frameworks, and reporting

- **Network Economics & Security** — tokenomics, inflation, and network sustainability`,
    link: '/docs/structure/working-groups-overview',
  },
  {
    id: 'delegates',
    title: 'Delegates & Participants',
    content: `**Delegates:** trusted members who vote on proposals, provide rationale, and engage with the community.

**Participants:** any veNEAR holder can vote, submit proposals, or delegate their voting power.

**Endorsed Delegates:** selected through a screening process, must maintain high participation and transparency.`,
    link: '/docs/structure/delegates-and-participants',
  },
  {
    id: 'screening',
    title: 'Screening Committee',
    content: `The **Screening Committee** is a key governance body in House of Stake. It pre-screens proposals, oversees delegates, and ensures alignment with protocol goals.

To enable a fast launch, the **NEAR Foundation** appointed an **interim Committee** consisting of:

- Bianca Guimaraes-Chadwick (NEAR Foundation)
- Lane Rettig (NEAR Foundation)
- Bowen Wang (Near One)
- Gauntlet (1 seat)

This interim Committee selected the first cohort of Endorsed Delegates and will **step down** after the community approves a formal **Charter** and elects a new Committee.

---

## 🔄 What's Next

- A **Screening Committee Charter** will be proposed (target: mid-August)
- It will define elections, term lengths, responsibilities, and structure
- Once approved, a new **community-elected Committee** will take over

---

## ✅ Responsibilities

- **Pre-screen proposals** before full vote (rejected proposals require 75% supermajority)
- **Manage delegate process**: calls, selection, and oversight
- **Adjust veNEAR rewards** to stay competitive
- **Enforce Code of Conduct** and handle conflicts
- **Ensure transparency** by publishing decisions and rationale

In the future, authority over delegate selection will shift to the **House of Delegates**.

---

## 🗳️ Get Involved

Want to nominate someone or share input?
Join the discussion in the forum, Telegram, or the proposal repo.`,
    link: '/docs/structure/screening-committee',
  },
  {
    id: 'security',
    title: 'Security Council',
    content: `The Security Council acts as the final line of defense within House of Stake governance, safeguarding the NEAR protocol's security, integrity, and resilience—especially during emergencies or critical upgrades.

## Purpose

- Respond to urgent threats and vulnerabilities
- Coordinate emergency actions (e.g. halts, patches)
- Oversee transitions during sensitive governance changes
- Preserve network trust in times of crisis

## Structure

The Council includes:

- **Core Members** – Permanent reps from key NEAR ecosystem orgs (e.g. NEAR Foundation, Near One)
- **Key Members** – Independent experts with technical or strategic depth

This mix ensures stability while allowing for diverse input.

## Responsibilities

- Trigger emergency interventions
- Publicly disclose actions within 7 days
- Monitor proposals for malicious behavior
- Coordinate with validators, devs, and governance actors
- Maintain the technical integrity of governance
- Support the Screening Committee on security issues

## Accountability

Though their powers are reserved for exceptional situations, Security Council members must act transparently and in the ecosystem's best interest. Their role and authority may evolve through governance decisions as the system matures.`,
    link: '/docs/structure/security-council',
  },
  {
    id: 'responsibilities',
    title: 'Responsibilities & Scope (RACI)',
    content: `The RACI model helps define how governance works in House of Stake by clarifying who does what. Each key participant—like the Screening Committee, Delegates, or veNEAR holders—has a distinct role:

**R** – Responsible: The ones doing the work

**A** – Accountable: The ones who own the outcome

**C** – Consulted: Those who offer input or advice

**I** – Informed: Those who stay in the loop

Here's how these roles are distributed across core governance processes:

| Process | Screening Committee | Endorsed Delegates | Delegates | Security Council | veNEAR Holders |
|---------|-------------------|-------------------|-----------|-----------------|----------------|
| Pre-screening grant proposals | R, A | | | C | I |
| Voting on proposals | | R, A | R, A | I | R, A |
| Selecting new delegates | R | | | C | I |
| Removing bad actors | R | | | C | I |
| Emergency intervention | | | | R, A | I |
| Updating reward frameworks | R, A | | | C | I |

These roles aren't set in stone—they may evolve as the system grows.`,
    link: '/docs/structure/responsibilities-and-scope',
  },
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct',
    link: '/docs/structure/code-of-conduct',
  },
  {
    id: 'conflict-of-interest',
    title: 'Conflict of Interest Policy',
    link: '/docs/structure/conflict-of-interest-policy',
  },
];

const StructureRoles: React.FC = () => {
  const [openItem, setOpenItem] = useState<string>('delegates');

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? '' : itemId);
  };

  return (
    <section className={styles.sectionSplitTextVisual}>
      <div className={styles.headerTitle}>
        <div className={styles.container}>
          <h2 className={styles.title}>Structure & Roles</h2>
        </div>
        <div className={styles.divider} />
      </div>

      <div className={styles.content}>
        {accordionItems.map((item) => (
          <div key={item.id} className={styles.accordion}>
            <div className={styles.accordionContainer}>
              <div className={styles.leftContent}>
                <div className={styles.contentWrapper}>
                  <div className={styles.titleWrapper}>
                    <Link to={item.link} className={styles.accordionTitle}>
                      {item.title}
                    </Link>
                  </div>
                </div>
              </div>
              <button
                className={`${styles.arrowButton} ${openItem === item.id ? styles.open : ''}`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
                aria-label={openItem === item.id ? 'Collapse' : 'Expand'}
              >
                {openItem === item.id ? (
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="8.75"
                      y="27.125"
                      width="38.5"
                      height="1.75"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="27.125"
                      y="8.75"
                      width="1.75"
                      height="38.5"
                      fill="currentColor"
                    />
                    <rect
                      x="8.75"
                      y="27.125"
                      width="38.5"
                      height="1.75"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>
            </div>
            {item.content && (
              <div
                className={`${styles.expandedContent} ${openItem === item.id ? styles.open : ''}`}
              >
                <div className={styles.expandedContentInner}>
                  <div className={styles.expandedTextWrapper}>
                    <div className={styles.expandedText}>
                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p className={styles.contentLine}>{children}</p>
                          ),
                          ul: ({ children }) => (
                            <ul className={styles.contentList}>{children}</ul>
                          ),
                          li: ({ children }) => (
                            <li className={styles.contentListItem}>
                              {children}
                            </li>
                          ),
                          strong: ({ children }) => (
                            <strong className={styles.contentStrong}>
                              {children}
                            </strong>
                          ),
                        }}
                      >
                        {item.content}
                      </Markdown>
                    </div>
                  </div>
                  <div className={styles.spacer} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StructureRoles;
