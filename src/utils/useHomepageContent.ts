import useGlobalData, { usePluginData } from '@docusaurus/useGlobalData';
import type { HomepageContent } from '@site/src/shared/homepageContentSchema';

export interface HeaderMenuItem {
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
  type?: 'edit' | 'link' | 'button';
  variant?: 'primary' | 'default';
}

export function useHomepageContent(): HomepageContent {
  // Prefer the dedicated hook when available
  try {
    const data = usePluginData('homepage-content') as
      | HomepageContent
      | undefined;
    return (data ?? {}) as HomepageContent;
  } catch {
    // Fallback to raw global data lookup
    const global = useGlobalData() as any;
    const pluginData =
      (global &&
        (global['homepage-content'] ||
          global?.plugins?.['homepage-content'])) ||
      {};
    return (pluginData?.default ?? pluginData ?? {}) as HomepageContent;
  }
}

export default useHomepageContent;
