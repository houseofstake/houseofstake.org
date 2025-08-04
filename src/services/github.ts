// WARNING: This token is exposed in the browser - NOT SECURE FOR PRODUCTION
// TODO: Move this to a serverless function or backend API

// Import Docusaurus config to access custom fields
import docusaurusConfig from '@generated/docusaurus.config';

// Get GitHub token from Docusaurus custom fields (set at build time)
const GITHUB_TOKEN = docusaurusConfig.customFields?.githubToken as string || '';

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
