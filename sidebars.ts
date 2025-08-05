import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '📁 Overview',
      link: {
        type: 'generated-index',
        title: 'Overview',
        description: 'Learn about House of Stake, its governance philosophy, and our mission.',
        slug: '/overview',
      },
      items: [
        'overview/what-is-house-of-stake',
        'overview/governance-philosophy',
        'overview/mission-vision-values',
      ],
    },
    {
      type: 'category',
      label: '📁 Structure & Roles',
      link: {
        type: 'generated-index',
        title: 'Structure & Roles',
        description: 'Explore the organizational structure, working groups, committees, and key roles within House of Stake.',
        slug: '/structure',
      },
      items: [
        'structure/working-groups-overview',
        'structure/delegates-and-participants',
        'structure/screening-committee',
        'structure/security-council',
        'structure/responsibilities-and-scope',
        'structure/code-of-conduct',
        'structure/conflict-of-interest-policy',
      ],
    },
    {
      type: 'category',
      label: '📁 Governance System',
      link: {
        type: 'generated-index',
        title: 'Governance System',
        description: 'Understand the veNEAR token system, voting mechanisms, and governance processes.',
        slug: '/governance-system',
      },
      items: [
        'governance-system/what-is-venear',
        'governance-system/venear-locking-mechanisms',
        'governance-system/proposal-and-voting-process',
        'governance-system/rewards-and-incentives',
        'governance-system/inflation-model',
        'governance-system/versioning-and-evolution',
      ],
    },
    {
      type: 'category',
      label: '📁 Strategic Direction',
      link: {
        type: 'generated-index',
        title: 'Strategic Direction',
        description: 'Discover our vision for the future, including roadmap, milestones, and long-term goals.',
        slug: '/strategic-direction',
      },
      items: [
        'strategic-direction/why-this-matters',
        'strategic-direction/roadmap-and-milestones',
        'strategic-direction/the-future-ai-and-scaling',
      ],
    },
    {
      type: 'category',
      label: '📁 Get Involved',
      link: {
        type: 'generated-index',
        title: 'Get Involved',
        description: 'Learn how to participate in House of Stake by submitting proposals or contributing to the project.',
        slug: '/get-involved',
      },
      items: [
        'get-involved/submit-a-proposal',
        'get-involved/contribute-to-code-or-documentation',
      ],
    },
    {
      type: 'category',
      label: '📁 Working Groups',
      link: {
        type: 'generated-index',
        title: 'Working Groups',
        description: 'Explore the various working groups focusing on governance, ecosystem growth, treasury, and network economics.',
        slug: '/working-groups',
      },
      items: [
        'working-groups/governance-infrastructure-and-processes',
        'working-groups/ecosystem-growth-strategy',
        'working-groups/treasury-strategy-and-management',
        'working-groups/network-economics-and-security',
      ],
    },
  ],
};

export default sidebars;
