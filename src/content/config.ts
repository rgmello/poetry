import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const poemsCollection = defineCollection({
  type: 'content',
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
