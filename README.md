# Contributing Guide

This repository powers the House of Stake website built with Docusaurus. Content lives in plain Markdown. Follow this guide to update the homepage, docs, blog or legal pages.

### Prerequisites

- Node 18+ and Yarn 1.x
- Install deps once: `yarn install`

### Run locally

- Dev server: `yarn start`
- Typecheck: `yarn typecheck`
- Build: `yarn build`

If build fails, check the error — homepage content is validated at build time.

## Homepage content (Markdown, not code)

- File: `src/content/homepage.md`
- Structure: one frontmatter document with sections. A Zod schema validates it at build time.
- Toggle sections with `visible: true|false`.

Key sections (fields are self-explanatory):

- `header.brandTitle`, `header.menu[]`
- `hero.visible`, `hero.backgroundImage`, `hero.subtitle`, `hero.title`, `hero.cta{}`, `hero.stats[]`
- `what.visible`, `what.cards[]`
- `how.visible`, `how.title`, `how.description`, `how.features[]`, `how.learnMore{}`
- `governanceSystem.visible`, `governanceSystem.title`, `governanceSystem.tabs[]`
- `structureRoles.visible`, `structureRoles.title`, `structureRoles.items[]`
- `roadmap.visible`, `roadmap.title`, `roadmap.quarters[]`, `roadmap.currentQuarter`, `roadmap.items[]`
- `footer.brandTitle`, `footer.sections[]`, `footer.bottomBarText`

Quick examples:

```yaml
hero:
  visible: true
  subtitle: 'Example Subtitle'
  title: 'Example Title'
  cta: { label: 'Example CTA', href: 'https://example.org' }

what:
  visible: true
  cards:
    - { title: 'Example Card A', description: 'Short text', link: '/docs#' }

governanceSystem:
  visible: true
  title: 'Example: Governance System'
  tabs:
    - {
        id: 'example',
        title: 'Example Tab',
        content: 'Example text',
        docsLink: '/docs#',
      }
```

Notes

- The header “Edit this page” button on the homepage points to `src/content/homepage.md`.
- Hidden sections can keep short placeholder examples for layout.
- Schema location (for reference): `src/shared/homepageContentSchema.ts`

## Docs (Documentation)

- Location: `docs/`
- Format: plain `.md` files; one topic per file.
- Sidebar: managed in `sidebars.ts` (uses generated categories). Add new files to the relevant folder; the sidebar config already references those folders.
- Images: store under `docs/<section>/assets/` and link with relative paths, or use `static/img/` for shared assets.
- Math/table support is enabled. Keep docs concise and link to longer references when needed.

### Create a new doc

1. Pick the folder that matches the section (e.g., `docs/overview/`).
2. Create `my-topic.md` with a top-level `# Title`.
3. If needed, add it to the `items` list for that section in `sidebars.ts`.

## Blog

- Location: `blog/`
- Create posts as `YYYY-MM-DD-your-slug.md`.
- Frontmatter example:

```yaml
---
title: Example Post Title
description: One-line summary of the post.
authors: [house-of-stake]
tags: [update, example]
---
Your content here (Markdown).
```

- Authors: define once in `blog/authors.yml` (reuse identifiers in `authors:`).
- Images: prefer `static/img/` and reference with `/img/your-image.png`.

## Legal pages

- Location: content lives in MDX files under `legal/` (e.g., `legal/privacy.mdx`, `legal/terms.mdx`, `legal/cookies.mdx`, `legal/privacy-california.mdx`, `legal/privacy-eu-uk.mdx`).
- Renderers: each legal page is rendered by a wrapper component in `src/pages/` (e.g., `src/pages/privacy.tsx`, `src/pages/terms.tsx`, ...). These import the MDX and provide layout via the shared `Header`, `Footer`, and `legal.module.css`.
- Edit text: update the MDX file in `legal/`.
- Title/date from MDX: set these in the MDX frontmatter and they will appear automatically on the page.
  - Example frontmatter:
    ```yaml
    ---
    title: Privacy Policy
    lastUpdated: 7 August 2025
    ---
    ```
- Preview: `yarn start` then visit `/privacy`, `/terms`, `/cookies`, `/privacy-california`, or `/privacy-eu-uk`.
- Edit link button: the header "Edit page" button for legal routes opens the MDX file on GitHub, via the route map in `src/components/homepage/Header.tsx`. If you add a new legal route, also add it to `ROUTE_TO_GITHUB_MAP` pointing to the new `legal/<file>.mdx`.

## Content style tips

- Prefer short paragraphs and lists over walls of text.
- Use descriptive headings; link to deeper references when needed.
- Keep examples clearly marked as examples.

## Pull requests

- Create a feature branch, commit, and open a PR.
- Before pushing: `yarn typecheck && yarn build`.
- CI/build errors about homepage content usually mean invalid `homepage.md` — keep keys and types aligned with the schema.

## Deployment (maintainers)

- GitHub Pages is configured. Typical publish steps:
  - SSH: `USE_SSH=true yarn deploy`
  - HTTPS: `GIT_USER=<your_github_username> yarn deploy`

License: see `LICENSE`.
