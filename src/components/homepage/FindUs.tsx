import React from 'react';
import styles from './FindUs.module.css';

interface SocialCard {
  id: string;
  title: string;
  icon: string;
  href: string;
  isExternal?: boolean;
}

const socialCards: SocialCard[] = [
  {
    id: 'blog',
    title: 'Blog',
    icon: '/img/d844f433a694945489021a9342caa22e6247c18e.svg',
    href: '/blog',
    isExternal: false,
  },
  {
    id: 'forum',
    title: 'NEAR Forum',
    icon: '/img/c89ebe1c8ba03c7cac32652e2768adfd3f41339b.svg',
    href: 'https://gov.near.org/c/house-of-stake/158',
    isExternal: true,
  },
  {
    id: 'twitter',
    title: 'X / Twitter',
    icon: '/img/e3d72dc08bb70db3f8a2c2219f275f4dc2934a16.svg',
    href: 'https://x.com/NEARGovernance',
    isExternal: true,
  },
  {
    id: 'telegram',
    title: 'Telegram',
    icon: '/img/009c4b08ae2422f0e72fb148868714faf971ba43.svg',
    href: 'https://t.me/NEAR_HouseOfStake',
    isExternal: true,
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: '/img/f021978b954a445305131d3b44c8e621b9241c33.svg',
    href: 'https://github.com/houseofstake',
    isExternal: true,
  },
];

const FindUs: React.FC = () => {
  return (
    <section className={styles.sectionSplitTextVisual}>
      <div className={styles.headerTitle}>
        <div className={styles.container}>
          <h2 className={styles.title}>Find Us On</h2>
        </div>
        <div className={styles.divider} />
      </div>

      <div className={styles.cardsContainer}>
        {socialCards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            className={styles.squareCard}
            target={card.isExternal ? '_blank' : undefined}
            rel={card.isExternal ? 'noopener noreferrer' : undefined}
            aria-label={`Visit our ${card.title}`}
          >
            <div className={styles.cardInner}>
              <div className={styles.bg} />
              <div className={styles.contentTop}>
                <div className={styles.textWrapper}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <img
                  src={card.icon}
                  alt={card.title}
                  className={styles.cardIcon}
                />
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
          </a>
        ))}

        {/* Empty card for layout - hidden on mobile */}
        <div className={styles.emptyCard}>
          <div className={styles.cardInner}>
            <div className={styles.bg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
