import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
        <img
          src="/img/182fdc317f272c138653a6ca64dcec845f43ec76.svg"
          alt="NEAR Logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.container}>
        <h1 className={styles.brandTitle}>House of Stake</h1>

        <nav className={styles.menuContainer}>
          <Link to="/docs" className={styles.menuItem}>
            Documentation
          </Link>

          <div className={styles.menuItem}>
            <a
              href="https://github.com/houseofstake/houseofstake.org/edit/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuLink}
            >
              Edit page
            </a>
            <svg
              className={styles.externalIcon}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V7.5M7.5 1.5H10.5M10.5 1.5V4.5M10.5 1.5L5.5 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Link to="/docs" className={styles.participateButton}>
            Participate
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;