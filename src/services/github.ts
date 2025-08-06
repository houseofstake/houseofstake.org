// GitHub service for fetching project data
// Currently using hardcoded data to avoid exposing GitHub tokens in the browser
// TODO: Implement backend API for dynamic GitHub data fetching

// GitHub token is not included for security reasons
// If dynamic data is needed, implement a backend service
const GITHUB_TOKEN = '';

export interface GitHubProjectItem {
  id: string;
  content: {
    __typename: string;
    title?: string;
    number?: number;
    state?: string;
    url?: string;
    labels?: {
      nodes: Array<{
        name: string;
        color: string;
      }>;
    };
  };
  fieldValues: {
    nodes: Array<{
      __typename: string;
      name?: string;
      field?: {
        name: string;
      };
    }>;
  };
}

export interface RoadmapItem {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  statusTextColor: string;
  category: 'governance' | 'research';
  issueNumber: number;
  url: string;
  projectNumber?: number;
}

export interface GitHubProjectData {
  items: RoadmapItem[];
  statuses: Map<string, string>; // status name -> color
  columns: string[]; // ordered list of column names
  error?: string;
}

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';
const ORG_NAME = 'houseofstake';
const PROJECT_NUMBER = 1;

// Map project numbers to their icons
export const PROJECT_ICONS: Record<number, string> = {
  1: '/img/governance-icon.svg', // HoS Core Team Kanban - Governance icon
};

// Hardcoded colors for kanban states (matching Figma design)
const KANBAN_STATE_COLORS: Record<string, string> = {
  Todo: '#E2E8F0', // Light slate gray
  'Next Sprint/On Deck': '#E9D5FF', // Light purple
  'This Sprint': '#BAE6FD', // Light sky blue
  'Paused/Blocked': '#FED7AA', // Light amber/orange
  Done: '#C7F5D8', // Light green from Figma
};

// Text colors for each status badge
const KANBAN_TEXT_COLORS: Record<string, string> = {
  Todo: '#475569', // Dark slate gray
  'Next Sprint/On Deck': '#6B21A8', // Dark purple
  'This Sprint': '#0369A1', // Dark sky blue
  'Paused/Blocked': '#C2410C', // Dark amber/orange
  Done: '#096D50', // Dark green from Figma
};

// Hardcoded data from the GitHub API (fetched on August 4, 2025)
export function getHardcodedProjectData(): GitHubProjectData {
  const statuses = new Map<string, string>([
    ['Todo', KANBAN_STATE_COLORS['Todo']],
    ['Next Sprint/On Deck', KANBAN_STATE_COLORS['Next Sprint/On Deck']],
    ['This Sprint', KANBAN_STATE_COLORS['This Sprint']],
    ['Paused/Blocked', KANBAN_STATE_COLORS['Paused/Blocked']],
    ['Done', KANBAN_STATE_COLORS['Done']],
  ]);

  const columns = [
    'Todo',
    'Next Sprint/On Deck',
    'This Sprint',
    'Paused/Blocked',
    'Done',
  ];

  const items: RoadmapItem[] = [
    // Todo items
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2b8',
      title: 'Review existing proposals',
      status: 'Todo',
      statusColor: KANBAN_STATE_COLORS['Todo'],
      statusTextColor: KANBAN_TEXT_COLORS['Todo'],
      category: 'governance',
      issueNumber: 8,
      url: 'https://github.com/houseofstake/pm/issues/8',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdBMrk',
      title: 'Add support for self-executing proposals',
      status: 'Todo',
      statusColor: KANBAN_STATE_COLORS['Todo'],
      statusTextColor: KANBAN_TEXT_COLORS['Todo'],
      category: 'governance',
      issueNumber: 14,
      url: 'https://github.com/houseofstake/pm/issues/14',
      projectNumber: 1,
    },
    // Next Sprint/On Deck items
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2cc',
      title: 'Structure HoS Foundation Fireblocks vault',
      status: 'Next Sprint/On Deck',
      statusColor: KANBAN_STATE_COLORS['Next Sprint/On Deck'],
      statusTextColor: KANBAN_TEXT_COLORS['Next Sprint/On Deck'],
      category: 'governance',
      issueNumber: 9,
      url: 'https://github.com/houseofstake/pm/issues/9',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdBLOc',
      title: 'Org design',
      status: 'Next Sprint/On Deck',
      statusColor: KANBAN_STATE_COLORS['Next Sprint/On Deck'],
      statusTextColor: KANBAN_TEXT_COLORS['Next Sprint/On Deck'],
      category: 'governance',
      issueNumber: 10,
      url: 'https://github.com/houseofstake/pm/issues/10',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2Gg',
      title: 'Research roadmap draft',
      status: 'Next Sprint/On Deck',
      statusColor: KANBAN_STATE_COLORS['Next Sprint/On Deck'],
      statusTextColor: KANBAN_TEXT_COLORS['Next Sprint/On Deck'],
      category: 'research',
      issueNumber: 5,
      url: 'https://github.com/houseofstake/pm/issues/5',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2Ck',
      title: 'Code of Conduct policy document',
      status: 'Next Sprint/On Deck',
      statusColor: KANBAN_STATE_COLORS['Next Sprint/On Deck'],
      statusTextColor: KANBAN_TEXT_COLORS['Next Sprint/On Deck'],
      category: 'governance',
      issueNumber: 2,
      url: 'https://github.com/houseofstake/pm/issues/2',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdHHIU',
      title: 'Staker incentives for HoS 1.0',
      status: 'Next Sprint/On Deck',
      statusColor: KANBAN_STATE_COLORS['Next Sprint/On Deck'],
      statusTextColor: KANBAN_TEXT_COLORS['Next Sprint/On Deck'],
      category: 'governance',
      issueNumber: 18,
      url: 'https://github.com/houseofstake/pm/issues/18',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdJ6C8',
      title: 'Content Review: Core Sections of the House of Stake Website',
      status: 'Next Sprint/On Deck',
      statusColor: KANBAN_STATE_COLORS['Next Sprint/On Deck'],
      statusTextColor: KANBAN_TEXT_COLORS['Next Sprint/On Deck'],
      category: 'governance',
      issueNumber: 21,
      url: 'https://github.com/houseofstake/pm/issues/21',
      projectNumber: 1,
    },
    // This Sprint items
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_15c',
      title: 'MVV (Mission, Vision, Values)',
      status: 'This Sprint',
      statusColor: KANBAN_STATE_COLORS['This Sprint'],
      statusTextColor: KANBAN_TEXT_COLORS['This Sprint'],
      category: 'governance',
      issueNumber: 1,
      url: 'https://github.com/houseofstake/pm/issues/1',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2GQ',
      title: 'Product roadmap draft',
      status: 'This Sprint',
      statusColor: KANBAN_STATE_COLORS['This Sprint'],
      statusTextColor: KANBAN_TEXT_COLORS['This Sprint'],
      category: 'governance',
      issueNumber: 4,
      url: 'https://github.com/houseofstake/pm/issues/4',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2Dg',
      title: 'Conflict of Interest policy document',
      status: 'This Sprint',
      statusColor: KANBAN_STATE_COLORS['This Sprint'],
      statusTextColor: KANBAN_TEXT_COLORS['This Sprint'],
      category: 'governance',
      issueNumber: 3,
      url: 'https://github.com/houseofstake/pm/issues/3',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdBL7o',
      title: 'Proposal template',
      status: 'This Sprint',
      statusColor: KANBAN_STATE_COLORS['This Sprint'],
      statusTextColor: KANBAN_TEXT_COLORS['This Sprint'],
      category: 'governance',
      issueNumber: 12,
      url: 'https://github.com/houseofstake/pm/issues/12',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdBMW8',
      title: 'Frontend terms of use',
      status: 'This Sprint',
      statusColor: KANBAN_STATE_COLORS['This Sprint'],
      statusTextColor: KANBAN_TEXT_COLORS['This Sprint'],
      category: 'governance',
      issueNumber: 13,
      url: 'https://github.com/houseofstake/pm/issues/13',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdEEFc',
      title: 'HoS launch stakeholder support',
      status: 'This Sprint',
      statusColor: KANBAN_STATE_COLORS['This Sprint'],
      statusTextColor: KANBAN_TEXT_COLORS['This Sprint'],
      category: 'governance',
      issueNumber: 16,
      url: 'https://github.com/houseofstake/pm/issues/16',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdDjS8',
      title: 'HoS Website',
      status: 'This Sprint',
      statusColor: KANBAN_STATE_COLORS['This Sprint'],
      statusTextColor: KANBAN_TEXT_COLORS['This Sprint'],
      category: 'governance',
      issueNumber: 15,
      url: 'https://github.com/houseofstake/pm/issues/15',
      projectNumber: 1,
    },
    // Paused/Blocked items
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdHHYI',
      title: 'NF HoS team updated budget',
      status: 'Paused/Blocked',
      statusColor: KANBAN_STATE_COLORS['Paused/Blocked'],
      statusTextColor: KANBAN_TEXT_COLORS['Paused/Blocked'],
      category: 'governance',
      issueNumber: 19,
      url: 'https://github.com/houseofstake/pm/issues/19',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdNKtU',
      title: 'Complete setup of Security Council and Screening Committee',
      status: 'Paused/Blocked',
      statusColor: KANBAN_STATE_COLORS['Paused/Blocked'],
      statusTextColor: KANBAN_TEXT_COLORS['Paused/Blocked'],
      category: 'governance',
      issueNumber: 22,
      url: 'https://github.com/houseofstake/pm/issues/22',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdHIX0',
      title: 'Finalize HoS 1.0 params',
      status: 'Paused/Blocked',
      statusColor: KANBAN_STATE_COLORS['Paused/Blocked'],
      statusTextColor: KANBAN_TEXT_COLORS['Paused/Blocked'],
      category: 'governance',
      issueNumber: 20,
      url: 'https://github.com/houseofstake/pm/issues/20',
      projectNumber: 1,
    },
    // Done items
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2H8',
      title: 'Bootstrap basic PM',
      status: 'Done',
      statusColor: KANBAN_STATE_COLORS['Done'],
      statusTextColor: KANBAN_TEXT_COLORS['Done'],
      category: 'governance',
      issueNumber: 6,
      url: 'https://github.com/houseofstake/pm/issues/6',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4Mnzgc_2LU',
      title: 'Launch plan',
      status: 'Done',
      statusColor: KANBAN_STATE_COLORS['Done'],
      statusTextColor: KANBAN_TEXT_COLORS['Done'],
      category: 'governance',
      issueNumber: 7,
      url: 'https://github.com/houseofstake/pm/issues/7',
      projectNumber: 1,
    },
    {
      id: 'PVTI_lADODMMfi84A-4MnzgdNLCI',
      title: 'Draft launch blog post and X thread',
      status: 'Done',
      statusColor: KANBAN_STATE_COLORS['Done'],
      statusTextColor: KANBAN_TEXT_COLORS['Done'],
      category: 'governance',
      issueNumber: 23,
      url: 'https://github.com/houseofstake/pm/issues/23',
      projectNumber: 1,
    },
  ];

  return {
    items,
    statuses,
    columns,
  };
}

// Dynamic fetch function (kept for future use but not used by default)
export async function fetchGitHubProjectData(): Promise<GitHubProjectData> {
  if (!GITHUB_TOKEN) {
    console.warn(
      'GitHub token not found. Please set GITHUB_TOKEN in your environment.'
    );
    return {
      items: [],
      statuses: new Map(),
      columns: [],
      error:
        'GitHub token not configured. See GITHUB_TOKEN_SETUP.md for instructions.',
    };
  }

  try {
    const query = `
      query($org: String!, $projectNumber: Int!) {
        organization(login: $org) {
          projectV2(number: $projectNumber) {
            id
            title
            items(first: 100) {
              nodes {
                id
                content {
                  __typename
                  ... on Issue {
                    title
                    number
                    state
                    url
                    labels(first: 10) {
                      nodes {
                        name
                        color
                      }
                    }
                  }
                  ... on PullRequest {
                    title
                    number
                    state
                    url
                    labels(first: 10) {
                      nodes {
                        name
                        color
                      }
                    }
                  }
                }
                fieldValues(first: 10) {
                  nodes {
                    __typename
                    ... on ProjectV2ItemFieldSingleSelectValue {
                      name
                      field {
                        ... on ProjectV2SingleSelectField {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
            fields(first: 20) {
              nodes {
                __typename
                ... on ProjectV2SingleSelectField {
                  id
                  name
                  options {
                    id
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          org: ORG_NAME,
          projectNumber: PROJECT_NUMBER,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const project = data.data?.organization?.projectV2;
    if (!project) {
      throw new Error('Project not found');
    }

    // Extract status field and its options
    const statusField = project.fields.nodes.find(
      (field: any) =>
        field.__typename === 'ProjectV2SingleSelectField' &&
        field.name === 'Status'
    );

    const statuses = new Map<string, string>();
    const columns: string[] = [];

    if (statusField && statusField.options) {
      statusField.options.forEach((option: any) => {
        // Use hardcoded color for known states, fallback to a default gray
        const color = KANBAN_STATE_COLORS[option.name] || '#94A3B8';
        statuses.set(option.name, color);
        columns.push(option.name);
      });
    }

    // If no columns found, use default kanban states
    if (columns.length === 0) {
      Object.entries(KANBAN_STATE_COLORS).forEach(([state, color]) => {
        statuses.set(state, color);
        columns.push(state);
      });
    }

    // Transform project items to roadmap items
    const items = transformProjectItems(project.items.nodes, statuses);

    return {
      items,
      statuses,
      columns,
    };
  } catch (error) {
    console.error('Error fetching GitHub project data:', error);
    return {
      items: [],
      statuses: new Map(),
      columns: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Transform project items from GraphQL to roadmap format
function transformProjectItems(
  items: GitHubProjectItem[],
  statuses: Map<string, string>
): RoadmapItem[] {
  return items
    .filter(
      (item) =>
        item.content &&
        (item.content.__typename === 'Issue' ||
          item.content.__typename === 'PullRequest')
    )
    .map((item) => {
      const content = item.content;

      // Get status from field values
      let status = 'Todo'; // default
      let statusColor =
        statuses.get(status) || KANBAN_STATE_COLORS['Todo'] || '#E2E8F0';
      let statusTextColor = KANBAN_TEXT_COLORS[status] || '#475569';

      const statusField = item.fieldValues.nodes.find(
        (field) =>
          field.__typename === 'ProjectV2ItemFieldSingleSelectValue' &&
          field.field?.name === 'Status'
      );

      if (statusField && statusField.name) {
        status = statusField.name;
        statusColor =
          statuses.get(status) || KANBAN_STATE_COLORS[status] || '#E2E8F0';
        statusTextColor = KANBAN_TEXT_COLORS[status] || '#475569';
      }

      // Determine category from labels
      const category = content.labels?.nodes.some((label) =>
        ['research', 'ai', 'ml', 'machine learning'].includes(
          label.name.toLowerCase()
        )
      )
        ? 'research'
        : 'governance';

      return {
        id: item.id,
        title: content.title || 'Untitled',
        status,
        statusColor,
        statusTextColor,
        category,
        issueNumber: content.number || 0,
        url: content.url || '#',
      };
    });
}
