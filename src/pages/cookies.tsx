import React from 'react';
import Head from '@docusaurus/Head';
import Header from '@site/src/components/homepage/Header';
import Footer from '@site/src/components/homepage/Footer';
import styles from './privacy.module.css';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy - House of Stake</title>
        <meta name="description" content="Cookie Policy for House of Stake" />
      </Head>
      <Header />
      <div className={styles.privacyPage}>
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Cookie Policy</h1>
            <p className={styles.subtitle}>
              ⚠️ PLACEHOLDER CONTENT - NOT ACTUAL LEGAL TEXT
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.textContent}>
              <div
                style={{
                  backgroundColor: '#ffeb3b',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '32px',
                }}
              >
                <p style={{ margin: 0, color: '#000', fontWeight: 600 }}>
                  ⚠️ DEVELOPMENT PLACEHOLDER: This page contains Lorem Ipsum
                  text for layout purposes only. Replace with actual legal
                  content before production deployment.
                </p>
              </div>

              <h2>Lorem Ipsum Cookie Notice</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. This
                Cookie Policy explains how we use cookies and similar
                technologies.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. We use cookies
                to provide, secure, and improve our services.
              </p>

              <h2>What Are Lorem Cookies?</h2>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Cookies are small text
                files that are placed on your computer or mobile device when you
                visit a website.
              </p>

              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. They are widely
                used to make websites work more efficiently.
              </p>

              <h2>Types of Lorem Ipsum Cookies</h2>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium. We use the following types of
                cookies:
              </p>

              <ul>
                <li>
                  <strong>Essential Lorem Cookies:</strong> Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit
                </li>
                <li>
                  <strong>Performance Ipsum Cookies:</strong> Sed do eiusmod
                  tempor incididunt ut labore
                </li>
                <li>
                  <strong>Functionality Dolor Cookies:</strong> Ut enim ad minim
                  veniam, quis nostrud
                </li>
                <li>
                  <strong>Analytics Sit Cookies:</strong> Exercitation ullamco
                  laboris nisi ut aliquip
                </li>
                <li>
                  <strong>Advertising Amet Cookies:</strong> Ex ea commodo
                  consequat duis aute irure
                </li>
              </ul>

              <h2>How We Use Lorem Cookies</h2>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti. We
                use cookies for the following purposes:
              </p>

              <ul>
                <li>To enable Lorem ipsum dolor sit amet functionality</li>
                <li>To analyze consectetur adipiscing elit usage</li>
                <li>To remember sed do eiusmod tempor preferences</li>
                <li>To provide ut labore et dolore magna security</li>
                <li>To deliver ut enim ad minim veniam content</li>
              </ul>

              <h2>Third-Party Lorem Cookies</h2>

              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Some of our pages may contain
                content from third-party services, which may set their own
                cookies.
              </p>

              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus.
              </p>

              <h2>Managing Lorem Ipsum Cookies</h2>

              <p>
                Omnis voluptas assumenda est, omnis dolor repellendus. You can
                control and manage cookies in various ways:
              </p>

              <ul>
                <li>
                  <strong>Browser Settings:</strong> Lorem ipsum dolor sit amet
                  browser controls
                </li>
                <li>
                  <strong>Mobile Settings:</strong> Consectetur adipiscing elit
                  device preferences
                </li>
                <li>
                  <strong>Third-Party Tools:</strong> Sed do eiusmod tempor
                  opt-out mechanisms
                </li>
              </ul>

              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae.
              </p>

              <h2>Cookie Lorem Table</h2>

              <p>Below is a Lorem ipsum list of cookies we use:</p>

              <ul>
                <li>
                  <strong>lorem_session:</strong> Essential - Lorem ipsum dolor
                  sit amet (30 days)
                </li>
                <li>
                  <strong>ipsum_analytics:</strong> Analytics - Consectetur
                  adipiscing elit tracking (2 years)
                </li>
                <li>
                  <strong>dolor_preferences:</strong> Functionality - Sed do
                  eiusmod tempor settings (1 year)
                </li>
                <li>
                  <strong>sit_performance:</strong> Performance - Ut labore et
                  dolore magna metrics (7 days)
                </li>
                <li>
                  <strong>amet_marketing:</strong> Marketing - Ut enim ad minim
                  veniam targeting (90 days)
                </li>
              </ul>

              <h2>Changes to Lorem Cookie Policy</h2>

              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h2>Contact Lorem Ipsum</h2>

              <p>
                If you have questions about our use of cookies, please contact
                us at:{' '}
                <a href="mailto:cookies@loremipsum.com">
                  cookies@loremipsum.com
                </a>
              </p>

              <p>Last updated: Lorem ipsum date</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
