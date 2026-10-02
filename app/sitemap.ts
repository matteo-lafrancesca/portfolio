import type { MetadataRoute } from "next";
import { content } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = content.identity.siteUrl;
  return [base, ...content.projects.map((p) => `${base}/projects/${p.slug}`)].map((url, i) => ({ url, priority: i ? 0.7 : 1 }));
}
