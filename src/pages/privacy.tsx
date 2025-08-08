import React from 'react';
import Head from '@docusaurus/Head';
import styles from './legal.module.css';
import Header from '@site/src/components/homepage/Header';
import Footer from '@site/src/components/homepage/Footer';
import PrivacyContent, {
  frontMatter as privacyFrontMatter,
} from '@site/legal/privacy.mdx';

export default function Privacy() {
  const fm =
    (privacyFrontMatter as { title?: string; lastUpdated?: string }) || {};
  const title = fm.title ?? 'Privacy Policy';
  const lastUpdated = fm.lastUpdated
    ? `Last updated: ${fm.lastUpdated}`
    : undefined;

  return (
    <>
      <Head>
        <title>{title} - House of Stake</title>
        <meta name="description" content={`${title} for House of Stake`} />
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
              <PrivacyContent />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
