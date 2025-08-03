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
    <section className={styles.howSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>How is it different</h2>
        <div className={styles.divider} />
        <p className={styles.description}>
          House of Stake is a governance framework for the NEAR ecosystem, designed to facilitate decentralized decision-making.
        </p>
      </div>
      
      <div className={styles.cardsGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <p className={styles.featureText}>{feature}</p>
          </div>
        ))}
        
        <div className={styles.learnMoreCard}>
          <Link to="/docs" className={styles.learnMoreLink}>
            Learn more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 3.5L12.5 12.5M12.5 12.5V3.5M12.5 12.5H3.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default How;