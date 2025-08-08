import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const CategoryCard = ({ title, description, href }) => (
  <article className="col col--6 margin-bottom--lg">
    <Link
      className="card padding--lg"
      href={href}
      style={{
        display: 'block',
        height: '100%',
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid var(--ifm-color-emphasis-200)',
        transition: 'all 0.2s ease',
      }}
    >
      <h2
        className="text--truncate"
        title={title}
        style={{ marginBottom: '0.5rem' }}
      >
        {title}
      </h2>
      <p
        className="text--truncate"
        title={description}
        style={{ marginBottom: 0, color: 'var(--ifm-color-content-secondary)' }}
      >
        {description}
      </p>
    </Link>
  </article>
);

const categories = [
  {
    title: '📁 Overview',
    description:
      'Learn about House of Stake, its governance philosophy, and our mission.',
    href: '/docs/overview',
  },
  {
    title: '📁 Structure & Roles',
    description:
      'Explore the organizational structure, working groups, committees, and key roles within House of Stake.',
    href: '/docs/structure',
  },
  {
    title: '📁 Governance System',
    description:
      'Understand the veNEAR token system, voting mechanisms, and governance processes.',
    href: '/docs/governance-system',
  },
  {
    title: '📁 Strategic Direction',
    description:
      'Discover our vision for the future, including roadmap, milestones, and long-term goals.',
    href: '/docs/strategic-direction',
  },
  {
    title: '📁 Get Involved',
    description:
      'Learn how to participate in House of Stake by submitting proposals or contributing to the project.',
    href: '/docs/get-involved',
  },
  {
    title: '📁 Working Groups',
    description:
      'Explore the various working groups focusing on governance, ecosystem growth, treasury, and network economics.',
    href: '/docs/working-groups',
  },
];

export default function DocsIndex(): React.ReactElement {
  return (
    <Layout
      title="Documentation"
      description="Explore all documentation categories for House of Stake"
    >
      <main>
        <div className="container margin-vert--lg">
          <div className="text--center margin-bottom--xl">
            <h1>Documentation</h1>
            <p className="hero__subtitle">
              Welcome to the House of Stake documentation. Browse through our
              comprehensive guides and resources.
            </p>
          </div>
          <section className="row">
            {categories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
