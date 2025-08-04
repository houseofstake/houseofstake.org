import React from 'react';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Social',
    links: [
      {
        label: 'Blog',
        href: '/blog',
        isExternal: false,
      },
      {
        label: 'NEAR Forum',
        href: 'https://gov.near.org/c/house-of-stake/158',
        isExternal: true,
      },
      {
        label: 'X / Twitter',
        href: 'https://x.com/NEARGovernance',
        isExternal: true,
      },
      {
        label: 'Telegram',
        href: 'https://t.me/NEAR_HouseOfStake',
        isExternal: true,
      },
      {
        label: 'Github',
        href: 'https://github.com/houseofstake',
        isExternal: true,
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>House of Stake</h3>
          </div>

          <div className={styles.linksContainer}>
            {footerSections.map((section) => (
              <div key={section.title} className={styles.section}>
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                <ul className={styles.linksList}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={styles.link}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={
                          link.isExternal ? 'noopener noreferrer' : undefined
                        }
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © House of Stake {currentYear}. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
