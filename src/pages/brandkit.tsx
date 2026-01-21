import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './brandkit.module.css';
import Header from '@site/src/components/homepage/Header';
import Footer from '@site/src/components/homepage/Footer';
// Custom arrow icon matching the site's design system
const ArrowUpRight = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
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
);

export default function BrandKit() {
  const title = 'Brand Kit';

  return (
    <>
      <Head>
        <title>{title} - House of Stake</title>
        <meta
          name="description"
          content="House of Stake brand guidelines, logos, typography, and color palette"
        />
      </Head>
      <Header />
      <div className={styles.brandKitPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Let's build the brand
              <br />
              together.
            </h1>
            <p className={styles.heroSubtitle}>
              These guidelines help us define and build a consistent brand
              presence and experience across the world.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1Ig6LjbzZTqaJgkrpLGBNdGujHYa8VzDI"
              className={styles.heroButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download All Logos
              <ArrowUpRight size={20} />
            </a>
          </div>
        </section>

        <div className={styles.content}>
          {/* Logo Section */}
          <section className={styles.logoSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitleCentered}>Logo</h2>
              <div className={styles.sectionDivider} />
              <h3 className={styles.sectionSubtitle}>Logo variations</h3>
              <p className={styles.sectionDescription}>
                The logo combines the NEAR identity with House of Stake,
                highlighting a strong connection to the ecosystem.
                <br />
                Its form represents structured collective governance and
                transparent processes.
              </p>
            </div>

            {/* Primary Logos */}
            <div className={styles.logoGrid}>
              <div className={styles.logoCard}>
                <div className={styles.logoCardPreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-stacked-black.svg')}
                    alt="Primary Vertical logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Primary Vertical logo
                  </h4>
                  <p className={styles.logoCardMetaLabel}>Minimum size</p>
                  <p className={styles.logoCardMetaValue}>
                    Digital 60px wide
                    <br />
                    Print 150mm wide
                  </p>
                </div>
              </div>

              <div className={styles.logoCard}>
                <div className={styles.logoCardPreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-horizontal-black.svg')}
                    alt="Primary Horizontal logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Primary Horizontal logo
                  </h4>
                  <p className={styles.logoCardMetaLabel}>Minimum size</p>
                  <p className={styles.logoCardMetaValue}>
                    Digital 200px wide
                    <br />
                    Print 50mm wide
                  </p>
                </div>
              </div>

              <div className={styles.logoCard}>
                <div className={styles.logoCardPreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/icon-coral.png')}
                    alt="Icon"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>Icon</h4>
                  <p className={styles.logoCardMetaLabel}>Minimum size</p>
                  <p className={styles.logoCardMetaValue}>
                    Digital 32px wide
                    <br />
                    Print 8mm wide
                  </p>
                </div>
              </div>
            </div>

            {/* Inverted Logos */}
            <div className={styles.subSectionHeader}>
              <h3 className={styles.subSectionTitle}>Inverted</h3>
            </div>

            <div className={styles.logoGrid}>
              <div className={styles.logoCard}>
                <div className={`${styles.logoCardPreview} ${styles.coral}`}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-stacked-black.svg')}
                    alt="Inverted Primary Vertical logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Inverted Primary Vertical logo
                  </h4>
                </div>
              </div>

              <div className={styles.logoCard}>
                <div className={`${styles.logoCardPreview} ${styles.coral}`}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-horizontal-black.svg')}
                    alt="Inverted Primary Horizontal logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Inverted Primary Horizontal logo
                  </h4>
                </div>
              </div>

              <div className={styles.logoCard}>
                <div className={`${styles.logoCardPreview} ${styles.coral}`}>
                  <img
                    src={useBaseUrl('/img/brandkit/icon-black.png')}
                    alt="Inverted Icon"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>Inverted Icon</h4>
                </div>
              </div>
            </div>

            {/* Monotone Logos */}
            <div className={styles.subSectionHeader}>
              <h3 className={styles.subSectionTitle}>Monotone</h3>
            </div>

            <div className={styles.logoGridTwo}>
              <div className={styles.logoCard}>
                <div className={styles.logoCardPreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-stacked-black.svg')}
                    alt="Monotone Black Primary Vertical logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Monotone Black Primary Vertical logo
                  </h4>
                </div>
              </div>

              <div className={styles.logoCard}>
                <div className={styles.logoCardPreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-horizontal-black.svg')}
                    alt="Monotone Black Primary Horizontal logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Monotone Black Primary Horizontal logo
                  </h4>
                </div>
              </div>
            </div>

            <div className={styles.logoGridTwo}>
              <div className={styles.logoCard}>
                <div className={`${styles.logoCardPreview} ${styles.dark}`}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-stacked-white.svg')}
                    alt="Monotone Black Primary Horizontal logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Monotone Black Primary Horizontal logo
                  </h4>
                </div>
              </div>

              <div className={styles.logoCard}>
                <div className={`${styles.logoCardPreview} ${styles.dark}`}>
                  <img
                    src={useBaseUrl('/img/brandkit/logo-horizontal-white.svg')}
                    alt="Monotone White Primary Horizontal logo"
                  />
                </div>
                <div className={styles.logoCardInfo}>
                  <h4 className={styles.logoCardTitle}>
                    Monotone White Primary Horizontal logo
                  </h4>
                </div>
              </div>
            </div>

            {/* Clear Space */}
            <div className={styles.subSectionHeader}>
              <h3 className={styles.subSectionTitle}>Clear Space</h3>
              <p className={styles.sectionDescription}>
                Our logo looks best when it has enough space around it.
              </p>
            </div>

            <div className={styles.clearSpaceContainer}>
              <div className={styles.clearSpacePreview}>
                <img
                  src={useBaseUrl('/img/brandkit/clearspace-diagram.png')}
                  alt="Logo clear space diagram"
                />
              </div>
              <div className={styles.clearSpaceInfo}>
                <h4 className={styles.clearSpaceTitle}>Logo</h4>
                <p className={styles.clearSpaceDescription}>
                  The NEAR House of Stake logo requires clear space between it
                  and surrounding elements.
                  <br />
                  The minimum clear space on all sides is defined by ½ the width
                  of the "N" in the brand icon.
                </p>
              </div>
            </div>

            {/* Incorrect Use */}
            <div className={styles.subSectionHeader}>
              <h3 className={styles.subSectionTitle}>Incorrect use</h3>
            </div>

            <div className={styles.incorrectUseGrid}>
              <div className={styles.incorrectUseCard}>
                <div className={styles.incorrectUsePreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/incorrect-angled.png')}
                    alt="Do not place on angle"
                  />
                </div>
                <p className={styles.incorrectUseLabel}>
                  Do not place the logo on an angle
                </p>
              </div>

              <div className={styles.incorrectUseCard}>
                <div className={styles.incorrectUsePreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/incorrect-stretched.png')}
                    alt="Do not stretch"
                  />
                </div>
                <p className={styles.incorrectUseLabel}>
                  Do not stretch or warp the logo
                </p>
              </div>

              <div className={styles.incorrectUseCard}>
                <div className={styles.incorrectUsePreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/incorrect-shadow.png')}
                    alt="Do not apply effects"
                  />
                </div>
                <p className={styles.incorrectUseLabel}>
                  Do not apply a drop shadow, stroke, or other visual effects
                </p>
              </div>

              <div className={styles.incorrectUseCard}>
                <div
                  className={`${styles.incorrectUsePreview} ${styles.darkGray}`}
                >
                  <img
                    src={useBaseUrl('/img/brandkit/incorrect-lowcontrast.png')}
                    alt="Do not place on low contrast"
                  />
                </div>
                <p className={styles.incorrectUseLabel}>
                  Do not place the logo on a low contrast background colour.
                </p>
              </div>

              <div className={styles.incorrectUseCard}>
                <div className={styles.incorrectUsePreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/incorrect-wrongcolor.png')}
                    alt="Do not use unapproved colors"
                  />
                </div>
                <p className={styles.incorrectUseLabel}>
                  Do not use colours outside the brand guide approved colours
                </p>
              </div>

              <div className={styles.incorrectUseCard}>
                <div className={styles.incorrectUsePreview}>
                  <img
                    src={useBaseUrl('/img/brandkit/incorrect-spacing.png')}
                    alt="Do not change spacing"
                  />
                </div>
                <p className={styles.incorrectUseLabel}>
                  Do not change spacing, alignment, or relative locations of the
                  design elements
                </p>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className={styles.typographySection}>
            <h2 className={styles.sectionTitleCentered}>Typography</h2>
            <div className={styles.sectionDivider} />

            {/* Heading/Subheadings row */}
            <div className={styles.typographyRow}>
              <p className={styles.typographyRowLabel}>Heading/Subheadings</p>
              <p className={styles.typographyRowSampleBlack}>FK Grotesk</p>
            </div>
            <div className={styles.sectionDivider} />

            {/* Body Copy row */}
            <div className={styles.typographyRow}>
              <p className={styles.typographyRowLabel}>Body Copy</p>
              <p className={styles.typographyRowSampleRegular}>FK Grotesk</p>
            </div>
            <div className={styles.sectionDivider} />

            {/* Two column layout */}
            <div className={styles.typographyColumns}>
              <div className={styles.typographyColumnLeft}>
                <h3 className={styles.typographyFontTitle}>FK Grotesk</h3>
                <p className={styles.typographyFontDescription}>
                  <strong>FK Grotesk</strong> is our heading/display font, it
                  comes in a full range of weights but we will use the bold
                  primarily for its impactful effect.
                </p>
              </div>
              <div className={styles.typographyColumnRight}>
                <p className={styles.typographyUppercase}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className={styles.typographyLowercase}>
                  abcdefghijklmnopqrstuvwxyz 1234567890
                </p>
              </div>
            </div>

            {/* Weight showcase */}
            <div className={styles.typographyWeights}>
              <p className={styles.weightThin}>FK Grotesk thin</p>
              <p className={styles.weightLight}>FK Grotesk light</p>
              <p className={styles.weightRegular}>FK Grotesk regular</p>
              <p className={styles.weightMedium}>FK Grotesk medium</p>
              <p className={styles.weightBold}>FK Grotesk bold</p>
              <p className={styles.weightBlack}>FK Grotesk black</p>
            </div>

            {/* Download button */}
            <a
              href="https://drive.google.com/drive/folders/1Ig6LjbzZTqaJgkrpLGBNdGujHYa8VzDI"
              className={styles.typographyDownloadButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download All Font Family
              <ArrowUpRight size={24} />
            </a>

            {/* Arial Bold fallback */}
            <div className={styles.arialSection}>
              <h4 className={styles.arialTitle}>Arial Bold</h4>
              <p className={styles.arialDescription}>
                Default font (when <strong>FK Grotesk</strong> isn't available)
              </p>
            </div>
          </section>

          {/* Colour Section */}
          <section className={styles.colourSection}>
            <h2 className={styles.sectionTitleCentered}>Colour</h2>
            <div className={styles.sectionDivider} />
            <h3 className={styles.colourSubtitle}>Primary colour</h3>

            <div className={styles.colourGrid}>
              <div className={`${styles.colourCard} ${styles.blackCard}`}>
                <div className={styles.colourCardContent}>
                  <p className={styles.colourCardName}>Black</p>
                  <p className={styles.colourCardHex}>#000000</p>
                  <p className={styles.colourCardRgb}>RGB 0 0 0</p>
                </div>
              </div>

              <div className={`${styles.colourCard} ${styles.whiteCard}`}>
                <div className={styles.colourCardContent}>
                  <p className={styles.colourCardNameDark}>White</p>
                  <p className={styles.colourCardHexDark}>#FFFFFF</p>
                  <p className={styles.colourCardRgbDark}>RGB 255 255 255</p>
                </div>
              </div>

              <div className={`${styles.colourCard} ${styles.coralCard}`}>
                <div className={styles.colourCardContent}>
                  <p className={styles.colourCardNameDark}>Coral</p>
                  <p className={styles.colourCardHexDark}>#FF7966</p>
                  <p className={styles.colourCardRgbDark}>RGB 255 121 102</p>
                </div>
              </div>
            </div>

            <div className={styles.sectionDivider} />
            <h3 className={styles.colourSubtitle}>Colour contrast</h3>

            <div className={styles.contrastGrid}>
              <div className={styles.contrastCard}>
                <img
                  src={useBaseUrl('/img/brandkit/contrast-black-white.png')}
                  alt="Background Black, Foreground White"
                />
              </div>
              <div className={styles.contrastCard}>
                <img
                  src={useBaseUrl('/img/brandkit/contrast-white-black.png')}
                  alt="Background White, Foreground Black"
                />
              </div>
              <div className={styles.contrastCard}>
                <img
                  src={useBaseUrl('/img/brandkit/contrast-coral-black.png')}
                  alt="Background Coral, Foreground Black"
                />
              </div>
              <div className={styles.contrastCard}>
                <img
                  src={useBaseUrl('/img/brandkit/contrast-image-black.png')}
                  alt="Background Images, Foreground Black"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
