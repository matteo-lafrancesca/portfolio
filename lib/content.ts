import raw from "@/content/content.json";

export type Project = (typeof raw.projects)[number];
export const content = raw;
