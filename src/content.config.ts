import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const poemsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/poems" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  })
})

export const collections = {
  'poems': poemsCollection,
}
