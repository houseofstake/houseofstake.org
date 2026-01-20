import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import styles from './Footer.module.css';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuBookText, LuScroll } from 'react-icons/lu';
import useHomepageContent from '@site/src/utils/useHomepageContent';

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

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const content = useHomepageContent();
  const brandTitle = content.footer?.brandTitle || 'House of Stake';
  const sections: FooterSection[] = (content.footer?.sections || []).map(
    (section: any) => ({
      title: section.title,
      links: (section.links || []).map((link: any) => ({
        label: link.label,
        href: link.href,
        isExternal: link.isExternal,
        icon:
          link.icon === 'near' ? (
            <img
              src={useBaseUrl('/img/near-logo.svg')}
              alt="NEAR"
              width={14}
              height={14}
            />
          ) : link.icon === 'scroll' ? (
            <LuScroll size={14} />
          ) : link.icon === 'book' ? (
            <LuBookText size={14} />
          ) : link.icon === 'github' ? (
            <FaGithub size={14} />
          ) : link.icon === 'x' ? (
            <FaXTwitter size={14} />
          ) : link.icon === 'telegram' ? (
            <FaTelegram size={14} />
          ) : undefined,
      })),
    })
  );
  const bottomBarTemplate =
    content.footer?.bottomBarText ||
    '© NEAR House of Stake Foundation {year}. All rights reserved';
  const bottomBar = bottomBarTemplate.replace('{year}', String(currentYear));

  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>{brandTitle}</h3>
          </div>

          <div className={styles.linksContainer}>
            {sections.map((section) => (
              <div key={section.title} className={styles.section}>
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                <ul className={styles.linksList}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          className={styles.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon && (
                            <span className={styles.linkIcon}>{link.icon}</span>
                          )}
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.href} className={styles.link}>
                          {link.icon && (
                            <span className={styles.linkIcon}>{link.icon}</span>
                          )}
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>{bottomBar}</p>
      </div>
    </footer>
  );
};

export default Footer;
