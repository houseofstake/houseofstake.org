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
    - label: 'Edit page'
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
      description: 'Loren Ipsom'
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
      title: 'What is veNEAR'
      content: |
        **veNEAR** is a non-transferable governance token earned by locking NEAR, stNEAR, or liNEAR. The longer you lock, the more voting power you get.
      docsLink: '/docs/governance-system/what-is-venear#'
    - id: 'locking'
      title: 'veNEAR Locking Mechanism'
      content: |
        Lock NEAR, stNEAR, or liNEAR to get veNEAR. Two options:

        - **Fixed Lock**: Lock for 3–48 months. More time = more veNEAR. Power decays over time.
        - **Rolling Lock**: No set period. veNEAR grows over time. Unlock anytime with 3-month cooldown.

        **Fixed = max power, less flexibility. Rolling = gradual power, flexible exit.**
      docsLink: '/docs/governance-system/venear-locking-mechanisms#'
    - id: 'proposal'
      title: 'Proposal & Voting Process'
      content: |
        House of Stake uses a 3-step governance flow:

        1. **Submit Proposal**  
           Anyone can propose using a public template. Community feedback is required before voting.

        2. **Screening Committee**  
           7 members review proposals:
           - 4+ approvals → simple majority (51%) vote
           - <4 approvals → needs supermajority (75%)
           
           Filters low-quality proposals early.

        3. **On-chain Voting**  
           veNEAR holders vote directly or via delegates.  
           Voting power = veNEAR balance.  
           Standard voting period (e.g. 5–7 days).

        All activity is public for transparency and accountability.
      docsLink: '/docs/governance-system/proposal-and-voting-process#'
    - id: 'rewards'
      title: 'Rewards & Incentives'
      content: |
        House of Stake rewards active participation:

        ## veNEAR Holders
        - Earn ~5.8–8.8% APY (from 0.5% NEAR inflation)
        - Based on veNEAR amount & lock duration
        - Voting may be required to claim
        - Manual claiming, not auto-compounding

        ## Delegates
        - Rewards for ≥80% voting, public updates, 0.5%+ veNEAR stake, KYC/KYB
        - Incentivizes active, transparent delegation

        ## Funding
        - 0.5% protocol inflation (capped, transparent)
        - Future: ecosystem revenue may contribute

        ## Dynamic Scaling
        Rewards adjust with veNEAR supply:

        $$\\text{veNEAR}_{\\text{APY}} = \\frac{198}{\\sqrt{\\text{veNEAR}_{\\text{supply}}}}$$

        → Lower APY as supply grows = sustainable model
      docsLink: '/docs/governance-system/rewards-and-incentives#'
    - id: 'inflation'
      title: 'Inflation Model'
      content: |
        House of Stake uses 0.5% annual NEAR inflation to fund governance.

        - **100%** goes to veNEAR holders and active delegates
        - Predictable, capped, and sustainable
        - No major dilution to NEAR holders

        **Why it matters:**
        - Rewards long-term locking and voting
        - Reduces need for treasury grants
        - Keeps governance funding transparent and stable

        **Adjustable via governance** if needed in the future.
      docsLink: '/docs/governance-system/inflation-model#'
    - id: 'versioning'
      title: 'Versioning & Evolution'
      content: |
        House of Stake evolves through on-chain versioning:

        - Major changes = version upgrades (roles, rules, funding)
        - Approved via standard proposal + voting process
        - All versions tracked and documented on-chain

        **Why it matters:**
        - Ensures transparency and stability
        - Prevents undocumented changes
        - Builds a shared history of governance evolution

        Governance stays open to improvement — if proposed and approved by the community.
      docsLink: '/docs/governance-system/versioning-and-evolution#'

structureRoles:
  visible: false
  title: 'Structure & Roles'
  items:
    - id: 'working-groups'
      title: 'Working Groups Overview'
      content: |
        House of Stake includes several working groups composed of endorsed delegates, each focused on a key area of NEAR ecosystem governance.

        These groups develop strategy, shape proposals, and support execution. They operate independently, coordinate across domains, and share regular updates.

        **Current groups:**

        - **Governance Infrastructure & Processes** — voting systems, proposal processes, and governance tools

        - **Ecosystem Growth Strategy** — ecosystem expansion, partnerships, and incentive programs

        - **Treasury Strategy & Management** — treasury allocation, funding frameworks, and reporting

        - **Network Economics & Security** — tokenomics, inflation, and network sustainability
      link: '/docs/structure/working-groups-overview#'
    - id: 'delegates'
      title: 'Delegates & Participants'
      content: |
        **Delegates:** trusted members who vote on proposals, provide rationale, and engage with the community.

        **Participants:** any veNEAR holder can vote, submit proposals, or delegate their voting power.

        **Endorsed Delegates:** selected through a screening process, must maintain high participation and transparency.
      link: '/docs/structure/delegates-and-participants#'
    - id: 'screening'
      title: 'Screening Committee'
      content: |
        The **Screening Committee** is a key governance body in House of Stake. It pre-screens proposals, oversees delegates, and ensures alignment with protocol goals.

        To enable a fast launch, the **NEAR Foundation** appointed an **interim Committee** consisting of:

        - Bianca Guimaraes-Chadwick (NEAR Foundation)
        - Lane Rettig (NEAR Foundation)
        - Bowen Wang (Near One)
        - Gauntlet (1 seat)

        This interim Committee selected the first cohort of Endorsed Delegates and will **step down** after the community approves a formal **Charter** and elects a new Committee.

        ---

        ## 🔄 What's Next

        - A **Screening Committee Charter** will be proposed (target: mid-August)
        - It will define elections, term lengths, responsibilities, and structure
        - Once approved, a new **community-elected Committee** will take over

        ---

        ## ✅ Responsibilities

        - **Pre-screen proposals** before full vote (rejected proposals require 75% supermajority)
        - **Manage delegate process**: calls, selection, and oversight
        - **Adjust veNEAR rewards** to stay competitive
        - **Enforce Code of Conduct** and handle conflicts
        - **Ensure transparency** by publishing decisions and rationale

        In the future, authority over delegate selection will shift to the **House of Delegates**.

        ---

        ## 🗳️ Get Involved

        Want to nominate someone or share input?
        Join the discussion in the forum, Telegram, or the proposal repo.
      link: '/docs/structure/screening-committee#'
    - id: 'security'
      title: 'Security Council'
      content: |
        The Security Council acts as the final line of defense within House of Stake governance, safeguarding the NEAR protocol's security, integrity, and resilience—especially during emergencies or critical upgrades.

        ## Purpose

        - Respond to urgent threats and vulnerabilities
        - Coordinate emergency actions (e.g. halts, patches)
        - Oversee transitions during sensitive governance changes
        - Preserve network trust in times of crisis

        ## Structure

        The Council includes:

        - **Core Members** – Permanent reps from key NEAR ecosystem orgs (e.g. NEAR Foundation, Near One)
        - **Key Members** – Independent experts with technical or strategic depth

        This mix ensures stability while allowing for diverse input.

        ## Responsibilities

        - Trigger emergency interventions
        - Publicly disclose actions within 7 days
        - Monitor proposals for malicious behavior
        - Coordinate with validators, devs, and governance actors
        - Maintain the technical integrity of governance
        - Support the Screening Committee on security issues

        ## Accountability

        Though their powers are reserved for exceptional situations, Security Council members must act transparently and in the ecosystem's best interest. Their role and authority may evolve through governance decisions as the system matures.
      link: '/docs/structure/security-council#'
    - id: 'responsibilities'
      title: 'Responsibilities & Scope (RACI)'
      content: |
        The RACI model helps define how governance works in House of Stake by clarifying who does what. Each key participant—like the Screening Committee, Delegates, or veNEAR holders—has a distinct role:

        **R** – Responsible: The ones doing the work

        **A** – Accountable: The ones who own the outcome

        **C** – Consulted: Those who offer input or advice

        **I** – Informed: Those who stay in the loop

        Here's how these roles are distributed across core governance processes:

        | Process | Screening Committee | Endorsed Delegates | Delegates | Security Council | veNEAR Holders |
        |---------|-------------------|-------------------|-----------|-----------------|----------------|
        | Pre-screening grant proposals | R, A | | | C | I |
        | Voting on proposals | | R, A | R, A | I | R, A |
        | Selecting new delegates | R | | | C | I |
        | Removing bad actors | R | | | C | I |
        | Emergency intervention | | | | R, A | I |
        | Updating reward frameworks | R, A | | | C | I |

        These roles aren't set in stone—they may evolve as the system grows.
      link: '/docs/structure/responsibilities-and-scope#'
    - id: 'code-of-conduct'
      title: 'Code of Conduct'
      link: '/docs/structure/code-of-conduct#'
    - id: 'conflict-of-interest'
      title: 'Conflict of Interest Policy'
      link: '/docs/structure/conflict-of-interest-policy#'

roadmap:
  visible: false
  title: 'Roadmap'
  quarters: ['Q1 2025', 'Q2 2025', 'Q3 2025']
  currentQuarter: 'Q2 2025'
  items:
    - {
        id: '1',
        title: 'Initial Delegate Selection',
        status: 'Complete',
        statusColor: '#C7F5D8',
        statusTextColor: '#096D50',
        category: 'governance',
        issueNumber: 1,
        quarter: 'Q1 2025',
      }
    - {
        id: '2',
        title: 'Agora Contract',
        status: 'Complete',
        statusColor: '#C7F5D8',
        statusTextColor: '#096D50',
        category: 'governance',
        issueNumber: 2,
        quarter: 'Q1 2025',
      }
    - {
        id: '3',
        title: 'Backend Contracts',
        status: 'Complete',
        statusColor: '#C7F5D8',
        statusTextColor: '#096D50',
        category: 'governance',
        issueNumber: 3,
        quarter: 'Q1 2025',
      }
    - {
        id: '4',
        title: 'First Delegate Meetings, Form Working Groups',
        status: 'Complete',
        statusColor: '#C7F5D8',
        statusTextColor: '#096D50',
        category: 'governance',
        issueNumber: 4,
        quarter: 'Q1 2025',
      }
    - {
        id: '5',
        title: 'Audit Backend',
        status: 'Complete',
        statusColor: '#C7F5D8',
        statusTextColor: '#096D50',
        category: 'governance',
        issueNumber: 5,
        quarter: 'Q1 2025',
      }
    - {
        id: '6',
        title: 'Research Best Practices, Constitution',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'governance',
        issueNumber: 6,
        quarter: 'Q2 2025',
      }
    - {
        id: '7',
        title: 'First Draft Proposals',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'governance',
        issueNumber: 7,
        quarter: 'Q2 2025',
      }
    - {
        id: '8',
        title: 'Finalize HoS 1.0 & 2.0 Params',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'governance',
        issueNumber: 8,
        quarter: 'Q2 2025',
      }
    - {
        id: '9',
        title: 'Hire Head of Governance',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'governance',
        issueNumber: 9,
        quarter: 'Q2 2025',
      }
    - {
        id: '10',
        title: 'First In-person Event',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'governance',
        issueNumber: 10,
        quarter: 'Q2 2025',
      }
    - {
        id: '11',
        title: 'HoS Dashboard Launch',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'governance',
        issueNumber: 11,
        quarter: 'Q2 2025',
      }
    - {
        id: '12',
        title: 'HoS Alpha Complete',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 12,
        quarter: 'Q2 2025',
      }
    - {
        id: '13',
        title: 'HoS Alpha Complete',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'research',
        issueNumber: 13,
        quarter: 'Q2 2025',
      }
    - {
        id: '14',
        title: 'Finalize Research Partnership',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'research',
        issueNumber: 14,
        quarter: 'Q2 2025',
      }
    - {
        id: '15',
        title: 'AI Assistant',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'research',
        issueNumber: 15,
        quarter: 'Q2 2025',
      }
    - {
        id: '16',
        title: 'HoS Beta Complete',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 16,
        quarter: 'Q3 2025',
      }
    - {
        id: '17',
        title: 'First Final Proposals',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 17,
        quarter: 'Q3 2025',
      }
    - {
        id: '18',
        title: 'HoS 1.0 Go Live',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 18,
        quarter: 'Q3 2025',
      }
    - {
        id: '19',
        title: 'First Staking',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 19,
        quarter: 'Q3 2025',
      }
    - {
        id: '20',
        title: 'First Vote',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 20,
        quarter: 'Q3 2025',
      }
    - {
        id: '21',
        title: 'Finalize HoS 2.0 Design',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 21,
        quarter: 'Q3 2025',
      }
    - {
        id: '22',
        title: 'Target 10% Staking',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'governance',
        issueNumber: 22,
        quarter: 'Q3 2025',
      }
    - {
        id: '23',
        title: 'Hire First Researchers',
        status: 'In Progress',
        statusColor: '#ADFCF3',
        statusTextColor: '#0282A2',
        category: 'research',
        issueNumber: 23,
        quarter: 'Q3 2025',
      }
    - {
        id: '24',
        title: 'Research Lab Launch',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'research',
        issueNumber: 24,
        quarter: 'Q3 2025',
      }
    - {
        id: '25',
        title: 'First AI Delegate Prototype (Public Goods Funding)',
        status: 'Scheduled',
        statusColor: '#DCDCF9',
        statusTextColor: '#4D3BC2',
        category: 'research',
        issueNumber: 25,
        quarter: 'Q3 2025',
      }

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
