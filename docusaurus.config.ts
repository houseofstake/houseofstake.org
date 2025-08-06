import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Load environment variables from .env file
import 'dotenv/config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'House of Stake',
  tagline: "HoS is the NEAR ecosystem's social governance platform",
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: process.env.SITE_URL || 'https://houseofstake.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'houseofstake', // Usually your GitHub org/user name.
  projectName: 'houseofstake.org', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Custom fields to pass environment variables to the client
  customFields: {
    githubToken: process.env.GITHUB_TOKEN || '',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs', // Serve docs at /docs
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/houseofstake/houseofstake.org/tree/main/',
          breadcrumbs: true, // Enable breadcrumbs
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'House of Stake Blog',
          blogDescription:
            'Latest updates and insights from the NEAR House of Stake community',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 5,
          editUrl:
            'https://github.com/houseofstake/houseofstake.org/tree/main/',
        },
        theme: {
          customCss: './src/css/global.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Open Graph and social card image - Docusaurus will automatically handle og:image and twitter:image
    image: 'img/og-image.jpg',
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:type', content: 'website' },
    ],
    navbar: {
      title: 'House of Stake',
      logo: {
        alt: 'NEAR Logo',
        src: 'img/near-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/houseofstake/houseofstake.org/edit/main/README.md',
          label: 'Edit page',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/NEAR_HouseOfStake',
            },
            {
              label: 'X',
              href: 'https://x.com/neargovernance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/houseofstake/houseofstake.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NEAR House of Stake Foundation.`,
    },
    prism: {
      theme: prismThemes.github,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
