# Contributing to House of Stake

Thanks for helping improve House of Stake! Most content updates do not require a local setup — you can edit files on GitHub and open a pull request (PR). A preview build will be posted on your PR after CI finishes.

## Quick start (no local setup)

1) Find the file
- On the live site, click the "Edit this page" button in the header to jump to the exact file in GitHub.
- Or browse files directly in the repository.

2) Edit
- Click the pencil icon to edit in your browser.
- For new content:
  - Docs: Add a Markdown file in the correct folder under `docs/`.
  - Blog: Add a file in `blog/` named `YYYY-MM-DD-your-slug.md`.

3) Open a pull request
- Add a short description of what changed and click "Propose changes".
- CI builds a preview and comments the link on your PR (previews from forks may need maintainer approval).

4) Review and merge
- Maintainers review, suggest fixes if needed, and merge when ready.

## Where things live

- Homepage content: `src/content/homepage.md`
  - One YAML frontmatter document controls homepage sections; toggle with `visible: true|false`.
  - Validated at build time by `src/shared/homepageContentSchema.ts` via the custom plugin in `plugins/homepage-content/`.

- Docs: `docs/`
  - One topic per Markdown file (`.md`). Use a top-level `# Title` and short sections.
  - Sidebar items are configured in `sidebars.ts` (add your new doc to the appropriate category `items`).
  - Images: keep near the doc in `docs/<section>/assets/`, or use `static/img/` and link as `/img/<file>`.

- Blog: `blog/`
  - File name: `YYYY-MM-DD-your-slug.md`
  - Frontmatter example:
    ```yaml
    ---
    title: Your Post Title
    description: One-line summary
    authors: [houseofstake]
    tags: [update]
    ---
    ```
  - Authors live in `blog/authors.yml`.

- Legal: `legal/*.mdx`
  - MDX content rendered by wrappers in `src/pages/*.tsx`.
  - Optional frontmatter: `title`, `lastUpdated`.

## Content tips
- Prefer clear headings, short paragraphs, and bullet points.
- Link to deeper references rather than duplicating large sections.
- Clearly label examples.

## Local development (optional)
- Node.js 18+
- Install: `npm ci` (or `yarn install`)
- Dev server: `npm run start`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Serve build: `npm run serve`

Notes
- Edit links are mapped in `src/components/homepage/Header.tsx` (plus `editUrl` in `docusaurus.config.ts`). Keep these in sync if branch/org changes.

## CI and previews
- PRs are built by GitHub Actions; a preview URL is commented on the PR.
- Production deploy runs on `main` and publishes to `gh-pages`. A `CNAME` on `gh-pages` is respected if present.

## Questions or ideas?
- Open an issue: https://github.com/houseofstake/houseofstake.org/issues/new

Thank you for contributing!
