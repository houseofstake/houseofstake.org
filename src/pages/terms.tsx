import React from 'react';
import Head from '@docusaurus/Head';
import Header from '@site/src/components/homepage/Header';
import Footer from '@site/src/components/homepage/Footer';
import styles from './privacy.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use - House of Stake</title>
        <meta name="description" content="Terms of Use for House of Stake" />
      </Head>
      <Header />
      <div className={styles.privacyPage}>
        <section className={styles.hero}>
          <div className={styles.heroBackground} />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Terms of Use</h1>
            <p className={styles.subtitle}>⚠️ PLACEHOLDER CONTENT - NOT ACTUAL LEGAL TEXT</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.textContent}>
              <div style={{backgroundColor: '#ffeb3b', padding: '16px', borderRadius: '8px', marginBottom: '32px'}}>
                <p style={{margin: 0, color: '#000', fontWeight: 600}}>
                  ⚠️ DEVELOPMENT PLACEHOLDER: This page contains Lorem Ipsum text for layout purposes only. 
                  Replace with actual legal content before production deployment.
                </p>
              </div>
              
              <h2>Lorem Ipsum Agreement</h2>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. By accessing or using this website, you agree to be bound by these Lorem Ipsum Terms of Use.</p>
              
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              
              <h2>1. Acceptance of Lorem Terms</h2>
              
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              
              <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
              
              <h2>2. Lorem Ipsum Services</h2>
              
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
              
              <ul>
                <li>Lorem ipsum dolor sit amet services</li>
                <li>Consectetur adipiscing elit features</li>
                <li>Sed do eiusmod tempor incididunt functionality</li>
                <li>Ut labore et dolore magna aliqua tools</li>
                <li>Ut enim ad minim veniam resources</li>
              </ul>
              
              <h2>3. User Lorem Responsibilities</h2>
              
              <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
              
              <p>Quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
              
              <h2>4. Lorem Ipsum Property Rights</h2>
              
              <p>Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
              
              <ul>
                <li><strong>Content:</strong> Lorem ipsum dolor sit amet</li>
                <li><strong>Trademarks:</strong> Consectetur adipiscing elit</li>
                <li><strong>Copyright:</strong> Sed do eiusmod tempor incididunt</li>
                <li><strong>Patents:</strong> Ut labore et dolore magna aliqua</li>
              </ul>
              
              <h2>5. Prohibited Lorem Conduct</h2>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Users shall not:</p>
              
              <ul>
                <li>Engage in Lorem ipsum dolor sit amet activities</li>
                <li>Violate any consectetur adipiscing elit laws</li>
                <li>Infringe upon sed do eiusmod tempor rights</li>
                <li>Disrupt ut labore et dolore magna services</li>
                <li>Circumvent ut enim ad minim veniam measures</li>
              </ul>
              
              <h2>6. Lorem Disclaimers</h2>
              
              <p>THE LOREM IPSUM SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.</p>
              
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              
              <h2>7. Limitation of Lorem Liability</h2>
              
              <p>IN NO EVENT SHALL LOREM IPSUM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.</p>
              
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              
              <h2>8. Lorem Indemnification</h2>
              
              <p>You agree to defend, indemnify and hold harmless Lorem Ipsum and its consectetur adipiscing elit from and against any and all claims, damages, obligations, losses, liabilities, costs or debt.</p>
              
              <h2>9. Governing Lorem Law</h2>
              
              <p>These Terms shall be governed by and construed in accordance with the laws of Lorem Ipsum jurisdiction, without regard to its conflict of law provisions.</p>
              
              <h2>10. Contact Lorem Information</h2>
              
              <p>If you have any questions about these Lorem Ipsum Terms of Use, please contact us at: <a href="mailto:legal@loremipsum.com">legal@loremipsum.com</a></p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}