---
header:
  brandTitle: 'House of Stake'
  menu:
    - label: 'Docs'
      to: '/docs/overview/what-is-house-of-stake#'
      type: 'link'
    - label: 'Blog'
      to: '/blog#'
      type: 'link'
    - label: 'Edit this page'
      type: 'edit'
    - label: 'Govern'
      href: 'https://gov.houseofstake.org'
      type: 'button'
      variant: 'primary'

hero:
  visible: true
  backgroundImage: '/img/hero.png'
  subtitle: 'House of Stake'
  title: 'Governance of the NEAR Ecosystem'
  cta:
    label: 'Govern'
    href: 'https://gov.houseofstake.org'
  stats:
    - value: '100K+'
      label: 'Participants by total onchain wallets'
    - value: '1,000+'
      label: 'Proposals'
    - value: '5.5M'
      label: 'veNEAR staked'

what:
  visible: true
  cards:
    - title: 'What is HoS?'
      description: 'House of Stake is a governance framework for the NEAR ecosystem, designed to facilitate decentralized decision-making.'
      link: '/docs/overview/what-is-house-of-stake'
    - title: 'How Governance Works'
      description: 'Understand the veNEAR token, voting mechanisms, and proposal process that power our decentralized governance system.'
      link: '/docs/governance-system/what-is-venear'
    - title: 'Our Mission'
      description: ''
      link: '/docs/overview/mission-vision-values'

how:
  visible: true
  title: 'How is it different'
  description: 'House of Stake is a governance framework for the NEAR ecosystem, designed to facilitate decentralized decision-making.'
  features:
    - 'Stake-weighted voting via veNEAR'
    - 'Pre-screening of proposals by a Screening Committee'
    - 'Delegate system with clear roles and incentives'
    - 'Structured funding from the 0.5% protocol inflation'
    - 'On-chain voting and transparent processes'
  learnMore:
    label: 'Learn more'
    to: '/docs#'

governanceSystem:
  visible: false
  title: 'Governance System'
  tabs:
    - id: 'venear'
      title: 'Example: veNEAR overview'
      content: |
        - Example bullet A about veNEAR
        - Example bullet B about locking and voting power
        - Example bullet C about delegating
      docsLink: '/docs#'
    - id: 'proposals'
      title: 'Example: Proposal lifecycle'
      content: |
        1. Example step: draft proposal
        2. Example step: screening
        3. Example step: on-chain vote
      docsLink: '/docs#'
    - id: 'rewards'
      title: 'Example: Rewards overview'
      content: |
        - Example: holders may receive rewards
        - Example: delegates may be incentivized
        - Example: parameters are configurable
      docsLink: '/docs#'
    - id: 'versioning'
      title: 'Example: Versioning & upgrades'
      content: |
        Example text: upgrades are versioned and approved by vote.
      docsLink: '/docs#'

structureRoles:
  visible: false
  title: 'Structure & Roles'
  items:
    - id: 'working-groups'
      title: 'Example: Working Groups Overview'
      content: |
        Example summary: short description of how working groups operate.
      link: '/docs/structure/working-groups-overview#'
    - id: 'delegates'
      title: 'Example: Delegates & Participants'
      content: |
        Example summary: explain that delegates represent voters.
      link: '/docs/structure/delegates-and-participants#'
    - id: 'screening'
      title: 'Example: Screening Committee'
      content: |
        Example summary: routes proposals and sets voting thresholds.
      link: '/docs/structure/screening-committee#'
    - id: 'security'
      title: 'Example: Security Council'
      content: |
        Example summary: emergency response with transparent disclosures.
      link: '/docs/structure/security-council#'
    - id: 'responsibilities'
      title: 'Example: Responsibilities & Scope (RACI)'
      content: |
        Example summary: use RACI to clarify who does what.
      link: '/docs/structure/responsibilities-and-scope#'
    - id: 'code-of-conduct'
      title: 'Example: Code of Conduct'
      link: '/docs/structure/code-of-conduct#'
    - id: 'conflict-of-interest'
      title: 'Example: Conflict of Interest Policy'
      link: '/docs/structure/conflict-of-interest-policy#'

roadmap:
  visible: false
  title: 'Roadmap'
  quarters: ['Q1 2025', 'Q2 2025', 'Q3 2025']
  currentQuarter: 'Q2 2025'
  items:
    - id: 'q1-1'
      title: 'Example: Founding delegates selected'
      status: 'Complete'
      statusColor: '#C7F5D8'
      statusTextColor: '#096D50'
      category: 'governance'
      issueNumber: 1
      quarter: 'Q1 2025'
    - id: 'q1-2'
      title: 'Example: Research plan draft'
      status: 'Complete'
      statusColor: '#C7F5D8'
      statusTextColor: '#096D50'
      category: 'research'
      issueNumber: 2
      quarter: 'Q1 2025'
    - id: 'q2-1'
      title: 'Example: Publish governance parameters draft'
      status: 'In Progress'
      statusColor: '#ADFCF3'
      statusTextColor: '#0282A2'
      category: 'governance'
      issueNumber: 3
      quarter: 'Q2 2025'
    - id: 'q2-2'
      title: 'Example: Open forum discussion and feedback'
      status: 'In Progress'
      statusColor: '#ADFCF3'
      statusTextColor: '#0282A2'
      category: 'governance'
      issueNumber: 4
      quarter: 'Q2 2025'
    - id: 'q3-1'
      title: 'Example: 1.0 launch (governance)'
      status: 'Scheduled'
      statusColor: '#DCDCF9'
      statusTextColor: '#4D3BC2'
      category: 'governance'
      issueNumber: 5
      quarter: 'Q3 2025'
    - id: 'q3-2'
      title: 'Example: AI delegate prototype (research)'
      status: 'Scheduled'
      statusColor: '#DCDCF9'
      statusTextColor: '#4D3BC2'
      category: 'research'
      issueNumber: 6
      quarter: 'Q3 2025'

footer:
  brandTitle: 'House of Stake'
  sections:
    - title: 'Social'
      links:
        - {
            label: 'NEAR Forum',
            href: 'https://gov.near.org/c/house-of-stake/158',
            isExternal: true,
            icon: 'near',
          }
        - {
            label: 'Proposal',
            href: 'https://gov.houseofstake.org/proposals',
            isExternal: false,
            icon: 'scroll',
          }
        - { label: 'Blog', href: '/blog#', isExternal: false, icon: 'book' }
        - {
            label: 'Github',
            href: 'https://github.com/houseofstake',
            isExternal: true,
            icon: 'github',
          }
        - {
            label: 'Twitter',
            href: 'https://x.com/NEARGovernance',
            isExternal: true,
            icon: 'x',
          }
        - {
            label: 'Telegram',
            href: 'https://t.me/NEAR_HouseOfStake',
            isExternal: true,
            icon: 'telegram',
          }
    - title: 'Legal'
      links:
        - { label: 'Privacy', href: '/privacy#', isExternal: false }
        - { label: 'Terms of Use', href: '/terms#', isExternal: false }
        - { label: 'Cookie Policy', href: '/cookies#', isExternal: false }
  bottomBarText: '© NEAR House of Stake Foundation {year}. All rights reserved'
---
