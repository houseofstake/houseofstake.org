import React from 'react';
import styles from './GetInvolved.module.css';

interface ActionButton {
  label: string;
  href: string;
}

const actionButtons: ActionButton[] = [
  {
    label: 'Join the Forum',
    href: 'https://gov.near.org',
  },
  {
    label: 'Read Proposals',
    href: '/docs',
  },
  {
    label: 'Contribute to code',
    href: 'https://github.com/near',
  },
];

const GetInvolved: React.FC = () => {
  return (
    <section className={styles.getInvolvedSection}>
      <div className={styles.backgroundImage} />
      <div className={styles.container}>
        <h2 className={styles.title}>Get Involved</h2>
        <div className={styles.buttonGrid}>
          {actionButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={styles.actionButton}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={
                button.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
