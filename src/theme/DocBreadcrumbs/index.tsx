import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';

function HomeBreadcrumbItem(): JSX.Element {
  return (
    <li className="breadcrumbs__item">
      <Link aria-label="Home page" className="breadcrumbs__link" href="/docs#">
        <svg viewBox="0 0 24 24" className="breadcrumbHomeIcon_YNFT">
          <path
            d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </li>
  );
}

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      className={clsx('theme-doc-breadcrumbs', 'breadcrumbsContainer_Z_bl')}
      aria-label="Breadcrumbs"
    >
      <ul className="breadcrumbs">
        <HomeBreadcrumbItem />
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <li
              key={idx}
              className={clsx('breadcrumbs__item', {
                'breadcrumbs__item--active': isLast,
              })}
            >
              {item.href && !isLast ? (
                <Link className="breadcrumbs__link" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumbs__link">{item.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
