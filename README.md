## House of Stake Website – How to Contribute

This repository powers the House of Stake website (Docusaurus). Most content is plain Markdown — no coding required.

### Contribute without cloning (recommended for most people)

Use the GitHub web editor to fix typos, add docs, or write blog posts.

1) Find the page or file
- From the website: click the Edit button in the header ("Edit this page"). It opens the exact file on GitHub.
- From GitHub: browse to the file you want to change (see “Where things live” below).

2) Make your change
- Click the pencil icon to edit the file in your browser.
- For a brand‑new page:
  - Docs: use GitHub’s “Add file → Create new file” inside the right folder under `docs/`.
  - Blog: create a file under `blog/` named `YYYY-MM-DD-your-slug.md`.

3) Propose your change (pull request)
- At the bottom of the editor, write a short summary of what you changed and click “Propose changes”.
- GitHub will open a pull request (PR) for review.

4) Preview your change
- A preview link will be posted on your PR after the build finishes. For first‑time contributors or forks, a maintainer may need to approve the preview build before it appears.

5) Get merged
- Maintainers will review, help if needed, and merge. Your change will go live shortly after.

### Where things live

- Homepage content: `src/content/homepage.md`
  - One YAML frontmatter document controls the homepage sections. You can toggle sections with `visible: true|false`.
  - The structure is validated at build time by a schema, so keep the keys as they are. If something’s off, maintainers will help fix it.

- Docs: `docs/`
  - One topic per `.md` file. Use a top‑level `# Title` and short sections.
  - To list it in the sidebar, add the new doc path to the correct category in `sidebars.ts` (under `items`).
  - Images: keep them close to the doc in `docs/<section>/assets/` or, for shared images, use `static/img/` and link as `/img/<file>`.

- Blog: `blog/`
  - File name: `YYYY-MM-DD-your-slug.md`
  - Frontmatter:
    ```yaml
    ---
    title: Your Post Title
    description: One-line summary
    authors: [houseofstake]
    tags: [update]
    ---
    ```
  - Authors are defined in `blog/authors.yml`.

- Legal pages: `legal/*.mdx`
  - These are MDX files displayed by wrappers in `src/pages/*.tsx`.
  - You can edit the text directly in the MDX file. Optional frontmatter supports `title` and `lastUpdated`.

### Content tips
- Prefer clear headings, short paragraphs, and bullet points.
- Link to longer references instead of duplicating large blocks of text.
- Keep examples clearly labeled as examples.

### Feedback and questions (GitHub Issues)
- If you found a problem, want to request a new page, or have a question, open an issue: [Create a new issue](../../issues/new)
- Helpful info to include:
  - Page URL or file path
  - What you expected vs. what you saw
  - Screenshot or small snippet (if relevant)

---

## Maintainers

### Prerequisites
- Node.js 18+
- npm 10+ (CI uses npm). Yarn Classic is also supported.

### Install and run
- Install deps: `npm ci` (or `yarn install`)
- Dev server: `npm run start` (or `yarn start`)
- Typecheck: `npm run typecheck` (or `yarn typecheck`)
- Build: `npm run build` (or `yarn build`)
- Serve build locally: `npm run serve` (or `yarn serve`)
- Format: `npm run format` / `npm run format:check`

Notes
- Homepage frontmatter is validated by `src/shared/homepageContentSchema.ts` via the `plugins/homepage-content` plugin. Build will error if the shape is invalid.

### Edit links
- The custom header maps routes to GitHub edit URLs in `src/components/homepage/Header.tsx` (`ROUTE_TO_GITHUB_MAP`).
- Docs/blog also have Docusaurus “Edit this page” links, controlled by `editUrl` in `docusaurus.config.ts`.
- Keep these in sync so all edit buttons point to the right files/branches.

### CI, previews, and deploys
- GitHub Actions builds on PRs and pushes to `main` (see `.github/workflows/deploy.yml`).
- PR preview: a comment with a preview URL is posted after a successful build. For forks, a protected environment (`pr-preview-approval`) may require maintainer approval.
- Production deploy: push to `main` builds and publishes to the `gh-pages` branch. If a `CNAME` exists there, the workflow uses it automatically.


### File layout quick reference
- `docs/` — documentation (Markdown)
- `blog/` — posts (Markdown)
- `legal/` — policies (MDX), rendered by wrappers in `src/pages/`
- `src/content/homepage.md` — homepage content
- `static/img/` — shared images

### Branch and PR guidance
- Create feature branches; open small, focused PRs.
- Before merging: `npm run typecheck && npm run build`.

---

License: see `LICENSE`.
