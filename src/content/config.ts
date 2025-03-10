import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    type: z.enum(["Article", "Tutorial"]),
    language: z.enum(["en", "fr"]),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/industries" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/services" }),
  schema: z.object({
    title: z.string(),
    service_id: z.number(),
    titleTop: z.string(),
    titleBottom: z.string(),
    image: z.string(),
    alt: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

const teams = defineCollection({
  loader: glob({ pattern: "[^_]*.md", base: "src/content/team" }),
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
