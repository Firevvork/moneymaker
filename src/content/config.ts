import { defineCollection, z } from "astro:content";
const industryCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    intro: z.string(),
    businessModel: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      }),
    ),
    industryInsights: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      }),
    ),
    famousProducts: z.array(
      z.object({
        area: z.string(),
        products: z.array(
          z.object({ name: z.string(), description: z.string() }),
        ),
      }),
    ),
  }),
});

export const collections = {
  industry: industryCollection,
};
