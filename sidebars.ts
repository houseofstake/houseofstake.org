import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '📁 Overview',
      items: [
        'overview/what-is-house-of-stake',
        'overview/governance-philosophy',
        'overview/mission-vision-values',
      ],
    },
    {
      type: 'category',
      label: '📁 Structure & Roles',
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
      items: [
        'strategic-direction/why-this-matters',
        'strategic-direction/roadmap-and-milestones',
        'strategic-direction/the-future-ai-and-scaling',
      ],
    },
    {
      type: 'category',
      label: '📁 Get Involved',
      items: [
        'get-involved/submit-a-proposal',
        'get-involved/contribute-to-code-or-documentation',
      ],
    },
    {
      type: 'category',
      label: '📁 Working Groups',
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
