---
name: create-blog-post
description: Create new blog posts for the House of Stake Docusaurus site. Use when the user wants to write a blog post, publish an announcement, or add news content.
---

# Create Blog Post

## Instructions

Follow these steps to create a new blog post:

### 1. Create the markdown file

**Location:** `blog/`

**File naming:** `YYYY-MM-DD-your-slug.md`
- Use today's date in ISO format
- Slug should be kebab-case and descriptive
- Example: `2025-12-25-governance-update-q4.md`

### 2. Add the frontmatter

**Required fields:**
```yaml
---
slug: your-post-slug
title: 'Your Post Title'
authors: [houseofstake]
---
```

The `houseofstake` author is defined in `blog/authors.yml` with:
- Name: House of Stake
- Title: NEAR Governance
- Avatar: `/img/house-of-stake-author.svg`

### 3. Write the content

- Write engaging, informative content
- The first paragraph appears as the preview on the blog listing
- Add `{/* truncate */}` on its own line to mark where the preview ends

### 4. Add images (if needed)

**Store images:** `blog/assets/`

**Reference with require() syntax:**
```jsx
<img src={require('./assets/your-image.jpg').default} alt="Description" style={{width: '100%'}} />
```

Or for simpler cases:
```markdown
![Alt text](./assets/your-image.jpg)
```

## Example

Creating a governance update post:

**File:** `blog/2025-12-25-q4-governance-recap.md`

```markdown
---
slug: q4-governance-recap
title: 'Q4 2025 Governance Recap'
authors: [houseofstake]
---

The fourth quarter of 2025 brought significant developments to NEAR governance. Here's a summary of what happened and what's coming next.

{/* truncate */}

## Key Proposals Passed

This quarter saw 15 proposals reach quorum, with 12 passing successfully:

- **NIP-42**: Treasury diversification strategy
- **NIP-45**: Working group restructuring
- **NIP-47**: Delegate compensation framework

## veNEAR Participation

<img src={require('./assets/q4-participation-chart.png').default} alt="Q4 Participation Chart" style={{width: '100%'}} />

Voting participation increased by 23% compared to Q3, with over 50M veNEAR actively voting.

## Looking Ahead

In Q1 2026, we expect to focus on:

1. Expanded delegate programs
2. Cross-chain governance exploration
3. Enhanced proposal tooling

Stay tuned for more updates!
```

## Frontmatter Reference

| Field | Required | Description |
|-------|----------|-------------|
| `slug` | Yes | URL path for the post (e.g., `my-post` becomes `/blog/my-post`) |
| `title` | Yes | Post title displayed on page and in listings |
| `authors` | Yes | Array of author IDs from `blog/authors.yml` |
| `description` | No | Meta description for SEO |
| `tags` | No | Array of tags (e.g., `[governance, veNEAR]`) |

## Checklist

- [ ] File created as `blog/YYYY-MM-DD-slug.md`
- [ ] Frontmatter includes `slug`, `title`, `authors`
- [ ] First paragraph is a good preview/summary
- [ ] `{/* truncate */}` added after intro paragraph
- [ ] Images stored in `blog/assets/` (if any)
- [ ] Images use `require()` syntax or relative paths
