import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { LoadContext, Plugin } from '@docusaurus/types';

export default function homepageContentPlugin(
  context: LoadContext
): Plugin<{}> {
  return {
    name: 'homepage-content',

    async loadContent() {
      const contentPath = path.join(
        context.siteDir,
        'src',
        'content',
        'homepage.md'
      );
      try {
        const file = fs.readFileSync(contentPath, 'utf-8');
        const parsed = matter(file);
        // Dynamically require the Zod schema using an absolute path (Node side cannot use @site alias)
        // jiti used by Docusaurus can load TS modules at runtime
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { homepageContentSchema } = require(
          path.join(context.siteDir, 'src', 'shared', 'homepageContentSchema')
        );
        const result = homepageContentSchema.safeParse(parsed.data);
        if (!result.success) {
          console.error(
            '[homepage-content] Frontmatter validation failed:',
            result.error.issues
          );
          throw new Error(
            'Invalid homepage.md frontmatter. See console for details.'
          );
        }
        return result.data || {};
      } catch (err: any) {
        console.warn(
          '[homepage-content] Failed to read content file:',
          contentPath,
          err?.message
        );
        return {} as any;
      }
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content ?? {});
    },
  };
}
