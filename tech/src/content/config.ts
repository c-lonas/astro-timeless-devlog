import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      thumbnail: z.object({
        url: z.string(),
        alt: z.string()
      }),
      endResultGif: z.object({
        url: z.string(),
        alt: z.string()
      }),
      category: z.array(z.string()),
      tags: z.array(z.string()),
      featured: z.boolean(),
      entryIndex: z.number()
    })
});

export const collections = {
  posts: postsCollection,
};