interface RPCResponse<T = any> {
  jsonrpc: string;
  result?: T;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
  id: string;
}

interface ViewResult {
  result: number[];
  logs: string[];
  block_height: number;
  block_hash: string;
}

// Multiple RPC endpoints for failover and load balancing
// Ordered by reliability based on testing
const NEAR_RPC_ENDPOINTS = [
  'https://near.drpc.org',
  'https://free.rpc.fastnear.com',
  'https://1rpc.io/near',
  'https://near.blockpi.network/v1/rpc/public',
  'https://rpc.mainnet.near.org', // Official endpoint - often rate limited but kept as fallback
];

// Track which endpoint to use next (round-robin)
let currentEndpointIndex = 0;

// Helper function to convert string to base64 in browser
function toBase64(str: string): string {
  if (typeof window !== 'undefined' && window.btoa) {
    // Browser environment
    return window.btoa(str);
  } else if (typeof Buffer !== 'undefined') {
    // Node.js environment
    return Buffer.from(str).toString('base64');
  }
  throw new Error('Unable to encode to base64');
}

// Helper function to delay execution
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Get the next RPC endpoint in round-robin fashion
function getNextEndpoint(): string {
  const endpoint = NEAR_RPC_ENDPOINTS[currentEndpointIndex];
  currentEndpointIndex = (currentEndpointIndex + 1) % NEAR_RPC_ENDPOINTS.length;
  return endpoint;
}

async function callViewMethod(
  contractId: string,
  methodName: string,
  args: any = {},
  retryCount: number = 0,
  maxRetries: number = 3
): Promise<any> {
  const argsBase64 = toBase64(JSON.stringify(args));

  // Try multiple endpoints if needed
  let lastError: Error | null = null;
  const endpointsToTry = Math.min(maxRetries + 1, NEAR_RPC_ENDPOINTS.length);

  for (let attempt = 0; attempt < endpointsToTry; attempt++) {
    const endpoint = getNextEndpoint();

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 'dontcare',
          method: 'query',
          params: {
            request_type: 'call_function',
            finality: 'final',
            account_id: contractId,
            method_name: methodName,
            args_base64: argsBase64,
          },
        }),
      });

      // Check for rate limiting
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        const delayMs = retryAfter
          ? parseInt(retryAfter) * 1000
          : Math.min(1000 * Math.pow(2, attempt), 8000);

        console.warn(
          `Rate limited on ${endpoint}, retrying after ${delayMs}ms...`
        );
        await delay(delayMs);
        continue; // Try next endpoint
      }

      const data: RPCResponse<ViewResult> = await response.json();

      // Check for RPC errors
      if (data.error) {
        console.warn(`RPC error from ${endpoint}:`, data.error);
        lastError = new Error(data.error.message);

        // If it's a rate limit error, wait before retrying
        if (
          data.error.message.includes('rate') ||
          data.error.message.includes('429')
        ) {
          await delay(Math.min(1000 * Math.pow(2, attempt), 8000));
        }
        continue; // Try next endpoint
      }

      if (data.result && data.result.result) {
        // Decode the result from bytes to string, then parse as JSON
        const resultString = String.fromCharCode(...data.result.result);
        try {
          return JSON.parse(resultString);
        } catch {
          return resultString;
        }
      }

      // If we get here, the response was successful but had unexpected format
      throw new Error(`Unexpected response format from ${endpoint}`);
    } catch (error) {
      console.warn(`Failed to fetch from ${endpoint}:`, error);
      lastError = error as Error;

      // Add exponential backoff delay before trying next endpoint
      if (attempt < endpointsToTry - 1) {
        await delay(Math.min(500 * Math.pow(2, attempt), 4000));
      }
    }
  }

  // All endpoints failed
  throw (
    lastError || new Error('Failed to fetch data from all NEAR RPC endpoints')
  );
}

export interface HouseOfStakeStats {
  participants: number;
  proposals: number;
  veNearStaked: string;
}

export async function fetchHouseOfStakeStats(): Promise<HouseOfStakeStats> {
  try {
    // Fetch data in parallel for better performance
    const [numAccounts, proposals, totalSupply] = await Promise.all([
      // Get number of participants from venear.dao
      callViewMethod('venear.dao', 'get_num_accounts'),
      // Get all proposals from vote.dao (to filter out drafts)
      callViewMethod('vote.dao', 'get_proposals', { from_index: 0, limit: 100 }),
      // Get total veNEAR supply from venear.dao
      callViewMethod('venear.dao', 'ft_total_supply'),
    ]);

    // Ensure we have valid numbers
    const participantCount =
      typeof numAccounts === 'number'
        ? numAccounts
        : parseInt(numAccounts) || 0;

    // Count only non-draft proposals (exclude "Created" status)
    // "Created" status means the proposal is still a draft
    const nonDraftProposals = Array.isArray(proposals)
      ? proposals.filter(
          (p: { status?: string }) => p.status && p.status !== 'Created'
        )
      : [];
    const proposalCount = nonDraftProposals.length;
    const supplyString =
      typeof totalSupply === 'string' ? totalSupply : String(totalSupply);

    // Convert veNEAR from yoctoNEAR to NEAR (24 decimal places)
    // Using proper conversion to handle large numbers
    const veNearBigInt = BigInt(supplyString);
    const divisor = BigInt(10 ** 24);
    const veNearInNear = Number(veNearBigInt / divisor);

    // Also calculate decimal portion for more accurate display
    const remainder = veNearBigInt % divisor;
    const decimalPortion = Number(remainder / BigInt(10 ** 18)) / 1000000; // Get 6 decimal places
    const totalVeNear = veNearInNear + decimalPortion;

    // Format veNEAR amount
    let formattedVeNear: string;
    if (totalVeNear >= 1000000) {
      formattedVeNear = `${(totalVeNear / 1000000).toFixed(2)}M`;
    } else if (totalVeNear >= 1000) {
      formattedVeNear = `${(totalVeNear / 1000).toFixed(1)}K`;
    } else {
      formattedVeNear = totalVeNear.toFixed(2);
    }

    return {
      participants: participantCount,
      proposals: proposalCount,
      veNearStaked: formattedVeNear,
    };
  } catch (error) {
    console.error('Error fetching House of Stake stats:', error);
    // Return fallback values if fetching fails
    return {
      participants: 0,
      proposals: 0,
      veNearStaked: '0',
    };
  }
}

// Optional: Add caching to reduce RPC calls
let cachedStats: HouseOfStakeStats | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 300000; // 5 minutes cache to reduce RPC calls

export async function fetchHouseOfStakeStatsWithCache(): Promise<HouseOfStakeStats> {
  const now = Date.now();

  if (cachedStats && now - cacheTimestamp < CACHE_DURATION) {
    return cachedStats;
  }

  const stats = await fetchHouseOfStakeStats();
  cachedStats = stats;
  cacheTimestamp = now;

  return stats;
}
