declare module '*.mdx' {
  import type { ComponentType } from 'react';

  // Docusaurus MDX modules expose frontMatter as a named export at build-time
  export const frontMatter: Record<string, any>;
  export const toc: any;

  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
}
