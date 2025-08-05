import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import Link from '@docusaurus/Link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const checkScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.scrollY;
      const shouldBeScrolled = scrollTop > 0;

      setIsScrolled((prev) =>
        prev !== shouldBeScrolled ? shouldBeScrolled : prev
      );
      animationFrameRef.current = requestAnimationFrame(checkScroll);
    };

    animationFrameRef.current = requestAnimationFrame(checkScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`navbar ${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuActive : ''}`}
    >
      <Link to="/" className={styles.iconContainer}>
        <img src="/img/near-logo.svg" alt="NEAR Logo" className={styles.logo} />
      </Link>

      <div className={styles.container}>
        <Link to="/" className={styles.brandLink}>
          <h1 className={styles.brandTitle}>House of Stake</h1>
        </Link>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <nav
          className={`${styles.menuContainer} ${isMenuOpen ? styles.menuOpen : ''}`}
        >
          <Link
            to="/docs/overview/what-is-house-of-stake"
            className={styles.menuItem}
            onClick={() => setIsMenuOpen(false)}
          >
            Docs
          </Link>

          <Link
            to="/blog"
            className={styles.menuItem}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
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

          <a
            href="https://agora-near.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.participateButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Participate
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
