import React from 'react';
import Head from '@docusaurus/Head';
import styles from './legal.module.css';
import Header from '@site/src/components/homepage/Header';
import Footer from '@site/src/components/homepage/Footer';
import EUUKPrivacyContent, {
  frontMatter as euUkFrontMatter,
} from '@site/legal/privacy-eu-uk.mdx';

export default function PrivacyEUUK() {
  const fm =
    (euUkFrontMatter as { title?: string; lastUpdated?: string }) || {};
  const title = fm.title ?? 'European Privacy Addendum';
  const lastUpdated = fm.lastUpdated
    ? `Last updated: ${fm.lastUpdated}`
    : undefined;

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
            {lastUpdated && <p className={styles.subtitle}>{lastUpdated}</p>}
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.textContent}>
              <EUUKPrivacyContent />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
