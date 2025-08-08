import React from 'react';
import Head from '@docusaurus/Head';
import styles from './legal.module.css';
import Header from '@site/src/components/homepage/Header';
import Footer from '@site/src/components/homepage/Footer';
import CaliforniaPrivacyContent from '@site/legal/privacy-california.mdx';

export default function PrivacyCalifornia() {
  const title = 'California Privacy Rights';
  const lastUpdated = 'Last updated: 7 August 2025';

  return (
    <>
      <Head>
        <title>{title} - House of Stake</title>
        <meta name="description" content={`${title} - House of Stake`} />
      </Head>
      <Header />
      <div className={styles.legalPage}>
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{lastUpdated}</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.textContent}>
              <CaliforniaPrivacyContent />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
