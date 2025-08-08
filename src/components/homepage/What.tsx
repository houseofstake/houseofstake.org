import React from 'react';
import Link from '@docusaurus/Link';
import styles from './What.module.css';
import useHomepageContent from '@site/src/utils/useHomepageContent';
import type { HomepageContent } from '@site/src/shared/homepageContentSchema';

type CardData = NonNullable<
  NonNullable<HomepageContent['what']>['cards']
>[number];

const What: React.FC = () => {
  const content = useHomepageContent();
  const cards: CardData[] = (content.what?.cards as CardData[]) ?? [];

  return (
    <section id="what" className={styles.sectionSplitTextVisual}>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Link key={index} to={card.link} className={styles.squareCard}>
            <div className={styles.cardInner}>
              <div className={styles.bg} />
              <div className={styles.contentTop}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
              <div className={styles.contentBottom}>
                <div className={styles.arrowWrapper}>
                  <div className={styles.topLine} />
                  <div className={styles.arrowUpRight}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 30L30 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 10H30V25"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.bottomLine} />
                </div>
              </div>
            </div>
            <div className={styles.cardBorder} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default What;
