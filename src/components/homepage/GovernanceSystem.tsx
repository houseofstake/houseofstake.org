import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styles from './GovernanceSystem.module.css';
import useHomepageContent from '@site/src/utils/useHomepageContent';
import type { HomepageContent } from '@site/src/shared/homepageContentSchema';

type TabContent = NonNullable<
  NonNullable<HomepageContent['governanceSystem']>['tabs']
>[number];

const GovernanceSystem: React.FC = () => {
  const content = useHomepageContent();
  const tabs: TabContent[] = (content.governanceSystem?.tabs as TabContent[]) ?? [];
  const sectionTitle = content.governanceSystem?.title || 'Governance System';
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '');
  const [expandedAccordions, setExpandedAccordions] = useState<string[]>([
    tabs[0]?.id || '',
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
        const matchingTab = tabs.find((tab) => tab.id === tabId);
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

  const activeContent = tabs.find((tab) => tab.id === activeTab);

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
            <h2 className={styles.title}>{sectionTitle}</h2>
          </div>
          <div className={styles.divider} />
        </div>

        {isMobile ? (
          // Accordion layout for mobile/tablet
          <div className={styles.accordionWrapper}>
            {tabs.map((tab) => (
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
              {tabs.map((tab) => (
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
