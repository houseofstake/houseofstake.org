import React from 'react';
import Header from './Header';
import styles from './Hero.module.css';
import useHomepageContent from '@site/src/utils/useHomepageContent';

const Hero: React.FC = () => {
  const content = useHomepageContent();
  const hero = content.hero || {};
  const stats = hero.stats || [];

  return (
    <section id="hero" className={styles.hero}>
      <Header />
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url('${hero.backgroundImage || '/img/hero.png'}')`,
        }}
      />
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.textContentWrapper}>
            <div className={styles.textContentTitle}>
              <div className={styles.titleWrapper}>
                <p className={styles.subtitle}>
                  {hero.subtitle || 'House of Stake'}
                </p>
                <h1 className={styles.title}>
                  {hero.title || 'Governance of the NEAR Ecosystem'}
                </h1>
              </div>
              {hero.cta && (
                <a href={hero.cta.href} className={styles.specialButton}>
                  <div className={styles.logoIcon}>
                    <img src="/img/near-logo.svg" alt="NEAR Logo" />
                  </div>
                  <span className={styles.buttonLabel}>{hero.cta.label}</span>
                </a>
              )}
            </div>
          </div>
          <div className={styles.cardsContainer}>
            {stats.map((s, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardValue}>{s.value}</div>
                <div className={styles.cardLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
