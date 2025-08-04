import React from 'react';
import Link from '@docusaurus/Link';
import styles from './GetInvolved.module.css';

interface CardData {
  title: string;
  link: string;
}

const cards: CardData[] = [
  {
    title: 'Join the Forum',
    link: 'https://gov.near.org/c/house-of-stake/158',
  },
  {
    title: 'Read Proposals',
    link: 'https://agora-near.vercel.app/proposals',
  },
  {
    title: 'Contribute to code',
    link: '/docs/get-involved/contribute-to-code-or-documentation',
  },
];

const GetInvolved: React.FC = () => {
  return (
    <section className={styles.sectionSplitTextVisual}>
      <div className={styles.backgroundImage} />

      <div className={styles.content}>
        <div className={styles.headerTitle}>
          <div className={styles.container}>
            <h2 className={styles.title}>Get Involved</h2>
          </div>
          <div className={styles.divider} />
        </div>

        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className={styles.squareCard}
              {...(card.link.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <div className={styles.cardInner}>
                <div className={styles.bg} />
                <div className={styles.contentTop}>
                  <div className={styles.textWrapper}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                </div>
                <div className={styles.contentBottom}>
                  <div className={styles.arrowWrapper}>
                    <div className={styles.topLine} />
                    <div className={styles.arrowIcon}>
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
      </div>
    </section>
  );
};

export default GetInvolved;
