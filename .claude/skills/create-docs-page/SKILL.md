---
name: create-docs-page
description: Create new documentation pages for the House of Stake Docusaurus site. Use when the user wants to add a new docs page, create documentation, or add content to the docs section.
---

# Create Documentation Page

## Instructions

Follow these steps to create a new documentation page:

### 1. Choose the appropriate category

Available categories in `docs/`:
- `overview/` - What is House of Stake, governance philosophy, mission/vision
- `structure/` - Working groups, delegates, committees, responsibilities
- `governance-system/` - veNEAR, locking mechanisms, voting, proposals
- `strategic-direction/` - Roadmap, mandate, long-term vision
- `get-involved/` - How to contribute, submit proposals
- `working-groups/` - Specific working group details

### 2. Create the markdown file

**Location:** `docs/<category>/<page-name>.md`

**File naming:** Use `kebab-case` (lowercase with hyphens)

**Frontmatter template:**
```yaml
---
title: Your Page Title
---
```

### 3. Write the content

- Start with a top-level `# Heading` that matches the title
- Use clear, hierarchical headings (`##`, `###`)
- Keep paragraphs short and focused
- One topic per file
- Use bullet points for lists

### 4. Add images (if needed)

- Store images in `docs/<category>/assets/`
- Reference with relative paths: `![Alt text](assets/filename.png)`

### 5. Update the sidebar

Edit `sidebars.ts` to add your new page to the appropriate category:

```typescript
{
  type: 'category',
  label: '...',
  items: [
    'category/existing-page',
    'category/your-new-page',  // Add this line
  ],
}
```

## Example

Creating a new page about delegation:

**File:** `docs/governance-system/delegation-guide.md`

```markdown
---
title: Delegation Guide
---

# Delegation Guide

This guide explains how to delegate your veNEAR voting power.

## Why Delegate?

Delegation allows you to...

## How to Delegate

1. Navigate to the governance portal
2. Select a delegate
3. Confirm your delegation

## Choosing a Delegate

When selecting a delegate, consider:

- Their voting history
- Their stated priorities
- Their expertise areas
```

**Update `sidebars.ts`:**
```typescript
{
  type: 'category',
  label: '📁 Governance System',
  items: [
    'governance-system/what-is-venear',
    'governance-system/venear-locking-mechanisms',
    'governance-system/proposal-and-voting-process',
    'governance-system/versioning-and-evolution',
    'governance-system/delegation-guide',  // New page
  ],
},
```

## Checklist

- [ ] File created in correct `docs/<category>/` folder
- [ ] Frontmatter includes `title`
- [ ] Content starts with `# Heading`
- [ ] Images stored in `assets/` subfolder (if any)
- [ ] `sidebars.ts` updated with new page reference
