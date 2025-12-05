import React, {
  useState,
  useLayoutEffect,
  useRef,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Header.module.css';
import useHomepageContent from '@site/src/utils/useHomepageContent';

const SearchBar = lazy(() => import('@theme/SearchBar'));

// Map of routes to their corresponding GitHub edit URLs
const ROUTE_TO_GITHUB_MAP: Record<string, string> = {
  // Main pages
  '/': 'src/content/homepage.md',

  // Legal pages (these are MDX files rendered by TSX components)
  '/privacy': 'legal/privacy.mdx',
  '/terms': 'legal/terms.mdx',
  '/cookies': 'legal/cookies.mdx',
  '/privacy-california': 'legal/privacy-california.mdx',
  '/privacy-eu-uk': 'legal/privacy-eu-uk.mdx',

  // Documentation landing page
  '/docs': 'src/pages/docs/index.tsx',
  '/docs/': 'src/pages/docs/index.tsx',

  // Blog landing page
  '/blog': 'blog/',
  '/blog/': 'blog/',
};

const Header: React.FC = () => {
  const location = useLocation();
  const content = useHomepageContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  const editUrl = useMemo(() => {
    const baseGithubUrl =
      'https://github.com/houseofstake/houseofstake.org/edit/main';
    const pathname = location.pathname;

    if (ROUTE_TO_GITHUB_MAP[pathname]) {
      return `${baseGithubUrl}/${ROUTE_TO_GITHUB_MAP[pathname]}`;
    }

    if (pathname.startsWith('/docs/')) {
      const docPath = pathname.replace(/^\/docs\//, '').replace(/\/$/, '');

      if (!docPath || docPath === '') {
        return `${baseGithubUrl}/src/pages/docs/index.tsx`;
      }

      return `${baseGithubUrl}/docs/${docPath}.md`;
    }

    if (pathname.startsWith('/blog/')) {
      const blogPath = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');

      if (blogPath && blogPath !== '') {
        return `${baseGithubUrl}/blog/`;
      }

      return `${baseGithubUrl}/blog/`;
    }

    return `${baseGithubUrl}/src/pages/index.tsx`;
  }, [location.pathname]);

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

  const headerMenu = content.header?.menu || [];
  const isDocsPage = location.pathname.includes('/docs');

  return (
    <header
      className={`navbar ${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuActive : ''}`}
    >
      <div className={styles.header}>
        <Link to="/#" className={styles.iconContainer}>
          <img
            src={useBaseUrl('/img/near-logo.svg')}
            alt="NEAR Logo"
            className={styles.logo}
          />
        </Link>

        <div className={styles.container}>
          <Link to="/#" className={styles.brandLink}>
            <h1 className={styles.brandTitle}>
              {content.header?.brandTitle || 'House of Stake'}
            </h1>
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
            {isDocsPage && (
              <>
                <div className={styles.searchContainer}>
                  <Suspense fallback={<div />}>
                    <SearchBar />
                  </Suspense>
                </div>
                <div className={styles.searchContainerMobile}>
                  <Suspense fallback={<div />}>
                    <SearchBar />
                  </Suspense>
                </div>
              </>
            )}
            {headerMenu.map((item, idx) => {
              if (item.type === 'button') {
                const href = item.href || '#';
                return (
                  <a
                    key={idx}
                    href={href}
                    className={styles.participateButton}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }

              if (item.type === 'edit') {
                return (
                  <div key={idx} className={styles.menuItem}>
                    <a
                      href={editUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.menuLink}
                    >
                      {item.label}
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
                );
              }

              const to = item.to || '#';
              return (
                <Link
                  key={idx}
                  to={to}
                  className={styles.menuItem}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
