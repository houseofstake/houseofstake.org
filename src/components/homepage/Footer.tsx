import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuBookText, LuScroll } from 'react-icons/lu';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
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
        label: 'NEAR Forum',
        href: 'https://gov.near.org/c/house-of-stake/158',
        isExternal: true,
        icon: (
          <img src="/img/near-logo.svg" alt="NEAR" width={14} height={14} />
        ),
      },
      {
        label: 'Proposal',
        href: 'https://gov.houseofstake.org/proposals',
        isExternal: false,
        icon: <LuScroll size={14} />,
      },
      {
        label: 'Blog',
        href: '/blog#',
        isExternal: false,
        icon: <LuBookText size={14} />,
      },
      {
        label: 'Github',
        href: 'https://github.com/houseofstake',
        isExternal: true,
        icon: <FaGithub size={14} />,
      },
      {
        label: 'Twitter',
        href: 'https://x.com/NEARGovernance',
        isExternal: true,
        icon: <FaXTwitter size={14} />,
      },
      {
        label: 'Telegram',
        href: 'https://t.me/NEAR_HouseOfStake',
        isExternal: true,
        icon: <FaTelegram size={14} />,
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy#', isExternal: false },
      { label: 'Terms of Use', href: '/terms#', isExternal: false },
      { label: 'Cookie Policy', href: '/cookies#', isExternal: false },
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
                        {link.icon && (
                          <span className={styles.linkIcon}>{link.icon}</span>
                        )}
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
          © NEAR House of Stake Foundation {currentYear}. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
