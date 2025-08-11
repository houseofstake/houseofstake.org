import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './StructureRoles.module.css';
import useHomepageContent from '@site/src/utils/useHomepageContent';
import type { HomepageContent } from '@site/src/shared/homepageContentSchema';

type AccordionItem = NonNullable<
  NonNullable<HomepageContent['structureRoles']>['items']
>[number];

const StructureRoles: React.FC = () => {
  const content = useHomepageContent();
  const sectionTitle = content.structureRoles?.title || 'Structure & Roles';
  const accordionItems: AccordionItem[] =
    (content.structureRoles?.items as AccordionItem[]) ?? [];
  const [openItem, setOpenItem] = useState<string>('');

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? '' : itemId);
  };

  // Auto-open accordion based on URL hash
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      // Check if the hash matches any accordion item
      const matchingItem = accordionItems.find((item) => item.id === hash);
      if (matchingItem) {
        setOpenItem(matchingItem.id);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <section id="structure-roles" className={styles.sectionSplitTextVisual}>
      <div className={styles.headerTitle}>
        <div className={styles.container}>
          <h2 className={styles.title}>{sectionTitle}</h2>
        </div>
        <div className={styles.divider} />
      </div>

      <div className={styles.content}>
        {accordionItems.map((item) => (
          <div key={item.id} id={item.id} className={styles.accordion}>
            <button
              className={styles.accordionContainer}
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItem === item.id}
              aria-label={openItem === item.id ? 'Collapse' : 'Expand'}
            >
              <div className={styles.leftContent}>
                <div className={styles.contentWrapper}>
                  <div className={styles.titleWrapper}>
                    <span className={styles.accordionTitle}>{item.title}</span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.arrowButton} ${openItem === item.id ? styles.open : ''}`}
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
              </div>
            </button>
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
                      <div className={styles.learnMoreWrapper}>
                        <Link to={item.link} className={styles.learnMoreLink}>
                          Learn more →
                        </Link>
                      </div>
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
