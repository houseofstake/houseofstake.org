import React, { useState } from 'react';
import styles from './StructureRoles.module.css';

interface AccordionItem {
  id: string;
  title: string;
  content?: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 'working-groups',
    title: 'Working Groups Overview',
  },
  {
    id: 'delegates',
    title: 'Delegates & Participants',
    content: `Delegates: trusted members who vote on proposals, provide rationale, and engage with the community.
Participants: any veNEAR holder can vote, submit proposals, or delegate their voting power.
Endorsed Delegates: selected through a screening process, must maintain high participation and transparency.`,
  },
  {
    id: 'screening',
    title: 'Screening Committee',
  },
  {
    id: 'security',
    title: 'Security Council',
  },
  {
    id: 'responsibilities',
    title: 'Responsibilities & Scope (RACI)',
  },
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct',
  },
  {
    id: 'conflict-of-interest',
    title: 'Conflict of Interest Policy',
  },
];

const StructureRoles: React.FC = () => {
  const [openItem, setOpenItem] = useState<string>('delegates');

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? '' : itemId);
  };

  return (
    <section className={styles.structureSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Structure & Roles</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.accordionContainer}>
          {accordionItems.map((item) => (
            <div key={item.id} className={styles.accordionItem}>
              <button
                className={styles.accordionButton}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span className={styles.accordionTitle}>{item.title}</span>
                <div className={`${styles.accordionIcon} ${openItem === item.id ? styles.open : ''}`}>
                  {openItem === item.id ? (
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8.75" y="27.125" width="38.5" height="1.75" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="27.125" y="8.75" width="1.75" height="38.5" fill="currentColor"/>
                      <rect x="8.75" y="27.125" width="38.5" height="1.75" fill="currentColor"/>
                    </svg>
                  )}
                </div>
              </button>
              {openItem === item.id && item.content && (
                <div className={styles.accordionContent}>
                  <div className={styles.accordionContentInner}>
                    {item.content.split('\n').map((line, index) => (
                      <p key={index} className={styles.contentText}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureRoles;