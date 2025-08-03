import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/img/182fdc317f272c138653a6ca64dcec845f43ec76.svg"
          alt="NEAR Logo"
          className={styles.logo}
        />
      </div>

      <h1 className={styles.brandTitle}>House of Stake</h1>

      <nav className={styles.nav}>
        <Link to="/docs" className={styles.navLink}>
          Documentation
        </Link>

        <a
          href="https://github.com/houseofstake/houseofstake.org/edit/main/README.md"
          className={styles.navLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit page
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.externalIcon}
          >
            <path
              d="M10 2L2 10M10 2H4M10 2V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <Link to="/docs" className={styles.participateButton}>
          Participate
        </Link>
      </nav>
    </header>
  );
};

export default Header;