import { z } from 'zod';

export const headerMenuItemSchema = z.object({
  label: z.string(),
  to: z.string().optional(),
  href: z.string().optional(),
  external: z.boolean().optional(),
  type: z.enum(['edit', 'link', 'button']).optional(),
  variant: z.enum(['primary', 'default']).optional(),
});

export const homepageContentSchema = z.object({
  header: z
    .object({
      brandTitle: z.string().optional(),
      menu: z.array(headerMenuItemSchema).optional(),
    })
    .optional(),
  hero: z
    .object({
      visible: z.boolean().optional(),
      backgroundImage: z.string().optional(),
      subtitle: z.string().optional(),
      title: z.string().optional(),
      cta: z.object({ label: z.string(), href: z.string().url() }).optional(),
      stats: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .optional(),
    })
    .optional(),
  what: z
    .object({
      visible: z.boolean().optional(),
      cards: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
            link: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
  how: z
    .object({
      visible: z.boolean().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      features: z.array(z.string()).optional(),
      learnMore: z.object({ label: z.string(), to: z.string() }).optional(),
    })
    .optional(),
  governanceSystem: z
    .object({
      visible: z.boolean().optional(),
      title: z.string().optional(),
      tabs: z
        .array(
          z.object({
            id: z.string(),
            title: z.string(),
            content: z.string(),
            docsLink: z.string().optional(),
          })
        )
        .optional(),
    })
    .optional(),
  structureRoles: z
    .object({
      visible: z.boolean().optional(),
      title: z.string().optional(),
      items: z
        .array(
          z.object({
            id: z.string(),
            title: z.string(),
            content: z.string().optional(),
            link: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
  roadmap: z
    .object({
      visible: z.boolean().optional(),
      title: z.string().optional(),
      quarters: z.array(z.string()).optional(),
      currentQuarter: z.string().optional(),
      items: z
        .array(
          z.object({
            id: z.string(),
            title: z.string(),
            status: z.string(),
            statusColor: z.string(),
            statusTextColor: z.string(),
            category: z.enum(['governance', 'research']),
            issueNumber: z.number(),
            quarter: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
  footer: z
    .object({
      brandTitle: z.string().optional(),
      sections: z
        .array(
          z.object({
            title: z.string(),
            links: z.array(
              z.object({
                label: z.string(),
                href: z.string(),
                isExternal: z.boolean().optional(),
                icon: z.string().optional(),
              })
            ),
          })
        )
        .optional(),
      bottomBarText: z.string().optional(),
    })
    .optional(),
});

export type HomepageContent = z.infer<typeof homepageContentSchema>;
