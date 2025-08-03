import React from 'react';
import Link from '@docusaurus/Link';
import styles from './How.module.css';

const features = [
  'Stake-weighted voting via veNEAR',
  'Pre-screening of proposals by a Screening Committee',
  'Delegate system with clear roles and incentives',
  'Structured funding from the 0.5% protocol inflation',
  'On-chain voting and transparent processes',
];

const How: React.FC = () => {
  return (
    <section className={styles.sectionSplitTextVisual}>
      <div className={styles.headerTitle}>
        <div className={styles.container}>
          <h2 className={styles.title}>How is it different</h2>
        </div>
        <div className={styles.containerDivider}>
          <div className={styles.divider} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            House of Stake is a governance framework for the NEAR ecosystem, designed to facilitate decentralized decision-making.
          </p>
        </div>
      </div>
      
      <div className={styles.cardsGrid}>
        {features.map((feature, index) => (
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
        
        <div className={styles.learnMoreCard}>
          <div className={styles.learnMoreCardInner}>
            <div className={styles.bg} />
            <div className={styles.learnMoreInnerCard}>
              <div className={styles.learnMoreInnerCardContent}>
                <div className={styles.bg} />
                <div className={styles.learnMoreContentTop}>
                  <Link to="/docs/governance-system/proposal-and-voting-process" className={styles.learnMoreLink}>
                    <div className={styles.learnMoreText}>
                      <span className={styles.learnMoreLabel}>Learn more</span>
                    </div>
                    <div className={styles.arrowIcon}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 10.5L10.5 5.5M10.5 5.5H5.5M10.5 5.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardBorder} />
        </div>
      </div>
    </section>
  );
};

export default How;