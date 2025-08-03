import React from 'react';
import Header from './Header';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} />
      <Header />
      <div className={styles.heroContentWrapper}>
        <div className={styles.textContentTitle}>
          <h1 className={styles.title}>
            Governance of the NEAR Ecosystem
          </h1>
          <p className={styles.subtitle}>Subtitle</p>
        </div>
        <a href="/docs" className={styles.specialButton}>
          <div className={styles.logoIcon}>
            <img src="/img/7362a17600fbfb1a525a67eaca6061513d362c27.svg" alt="NEAR Logo" />
          </div>
          <span className={styles.buttonLabel}>Participate</span>
        </a>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardTextGroup}>
                <div className={styles.cardValue}>100K+</div>
                <div className={styles.cardLabel}>
                  Participants by total onchain wallets
                </div>
              </div>
            </div>
            <div className={styles.cardBorder} />
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardTextGroup}>
                <div className={styles.cardValue}>1,000+</div>
                <div className={styles.cardLabel}>Proposals</div>
              </div>
            </div>
            <div className={styles.cardBorder} />
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardTextGroup}>
                <div className={styles.cardValue}>5.5M</div>
                <div className={styles.cardLabel}>veNEAR staked</div>
              </div>
            </div>
            <div className={styles.cardBorder} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;