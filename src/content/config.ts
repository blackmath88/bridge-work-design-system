import { defineCollection, z } from 'astro:content';

/* Conceptual docs — brand identity, registers, joint principle, etc.
   Markdown files in src/content/concepts/ become pages automatically. */
const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    summary: z.string().optional(),
    status: z.string().default('canon · v1.3'),
  }),
});

/* The webcraft intel / process playbook. */
const intel = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    summary: z.string().optional(),
  }),
});

export const collections = { concepts, intel };
