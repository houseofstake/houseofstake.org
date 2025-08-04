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
    link: '/docs/structure/screening-committee',
  },
  {
    id: 'security',
    title: 'Security Council',
    link: '/docs/structure/security-council',
  },
  {
    id: 'responsibilities',
    title: 'Responsibilities & Scope (RACI)',
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
                          p: ({children}) => <p className={styles.contentLine}>{children}</p>,
                          ul: ({children}) => <ul className={styles.contentList}>{children}</ul>,
                          li: ({children}) => <li className={styles.contentListItem}>{children}</li>,
                          strong: ({children}) => <strong className={styles.contentStrong}>{children}</strong>,
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
