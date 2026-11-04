import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './_recipes' }),
  schema: z.object({
    title: z.string(),
    contents_entry: z.string().optional().default('mains'),
    index_entry: z.string().optional().default(''),
    categories: z.string().optional(),
    date: z.any().optional(),
    layout: z.string().optional(),
    serves: z.union([z.string(), z.number()]).optional(),
    makes: z.string().optional(),
    yield: z.string().optional(),
    prep: z.string().optional(),
    cook: z.string().optional(),
  }),
});

export const collections = { recipes };
