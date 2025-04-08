import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "[^_]*.{md,mdx}", base: "src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      author: z.string(),
      authImage: z.string(),
      coverImage: image(),
      tags: z.array(z.string()),
      summary: z.string(),
      type: z.enum(["Article", "Tutorial"]),
      language: z.enum(["en", "fr"]),
    }),
});

const industries = defineCollection({
  loader: glob({ pattern: "[^_]*.{md,mdx}", base: "src/content/industries" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      image: image(),
      summary: z.string(),
      language: z.enum(["en", "fr"]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "[^_]*.{md,mdx}", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "[^_]*.{md,mdx}", base: "src/content/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      image: image(),
      alt: z.string(),
      summary: z.string(),
      language: z.enum(["en", "fr"]),
    }),
});

const teams = defineCollection({
  loader: glob({ pattern: "[^_]*.{md,mdx}", base: "src/content/team" }),
  schema: z.object({
    author: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

export const collections = {
  blog: blog,
  industries: industries,
  projects: projects,
  services: services,
  teams: teams,
};
