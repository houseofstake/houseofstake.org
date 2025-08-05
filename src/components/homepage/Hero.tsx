import React from 'react';
import Header from './Header';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url('/img/hero.png')` }}
      />
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.textContentWrapper}>
            <div className={styles.textContentTitle}>
              <div className={styles.titleWrapper}>
                <p className={styles.subtitle}>House of Stake</p>
                <h1 className={styles.title}>
                  Governance of the NEAR Ecosystem
                </h1>
              </div>
              <a
                href="https://agora-near.vercel.app/"
                target="_blank"
                className={styles.specialButton}
              >
                <div className={styles.logoIcon}>
                  <img src="/img/near-logo.svg" alt="NEAR Logo" />
                </div>
                <span className={styles.buttonLabel}>Participate</span>
              </a>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.cardValue}>100K+</div>
              <div className={styles.cardLabel}>
                Participants by total onchain wallets
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardValue}>1,000+</div>
              <div className={styles.cardLabel}>Proposals</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardValue}>5.5M</div>
              <div className={styles.cardLabel}>veNEAR staked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
