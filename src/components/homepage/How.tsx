import React from 'react';
import Link from '@docusaurus/Link';
import styles from './How.module.css';
import useHomepageContent from '@site/src/utils/useHomepageContent';

const How: React.FC = () => {
  const content = useHomepageContent();
  const title = content.how?.title || 'How is it different';
  const description = content.how?.description || '';
  const features = content.how?.features || [];
  const learnMore = content.how?.learnMore;
  return (
    <section id="how" className={styles.sectionSplitTextVisual}>
      <div className={styles.headerTitle}>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.containerDivider}>
          <div className={styles.divider} />
        </div>
        <div className={styles.textContainer}>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {features.map((feature: string, index: number) => (
          <div key={index} className={styles.squareCard}>
            <div className={styles.cardInner}>
              <div className={styles.bg} />
              <div className={styles.contentTop}>
                <div className={styles.textWrapper}>
                  <p className={styles.featureText}>{feature}</p>
                </div>
              </div>
            </div>
            <div className={styles.cardBorder} />
          </div>
        ))}

        {learnMore && (
          <div className={styles.learnMoreCard}>
            <div className={styles.learnMoreCardInner}>
              <div className={styles.bg} />
              <div className={styles.learnMoreInnerCard}>
                <div className={styles.learnMoreInnerCardContent}>
                  <div className={styles.bg} />
                  <div className={styles.learnMoreContentTop}>
                    <Link to={learnMore.to} className={styles.learnMoreLink}>
                      <div className={styles.learnMoreText}>
                        <span className={styles.learnMoreLabel}>
                          {learnMore.label}
                        </span>
                      </div>
                      <div className={styles.arrowIcon}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 10.5L10.5 5.5M10.5 5.5H5.5M10.5 5.5V10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardBorder} />
          </div>
        )}
      </div>
    </section>
  );
};

export default How;
