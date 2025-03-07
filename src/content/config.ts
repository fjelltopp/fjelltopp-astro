import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/blog" }),
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

const industriesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/industries" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/projects" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

const servicesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/services" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

const teamsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/teams" }),
  schema: z.object({
    author: z.string(),
    image: z.string(),
    summary: z.string(),
    language: z.enum(["en", "fr"]),
  }),
});

export const collections = {
  blog: blogCollection,
  industries: industriesCollection,
  projects: projectsCollection,
  services: servicesCollection,
  teams: teamsCollection,
};
