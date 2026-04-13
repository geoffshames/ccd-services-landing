import { littleTokyoReborn } from "./little-tokyo-reborn";
import { ykNiece } from "./yk-niece";
import { suicideboys } from "./suicideboys";
import { monstaX } from "./monsta-x";
import type { ProjectData } from "../project-context";

export const PROJECTS: Record<string, ProjectData> = {
  "little-tokyo-reborn": littleTokyoReborn,
  "yk-niece": ykNiece,
  "suicideboys": suicideboys,
  "monsta-x": monstaX,
};

export function getProject(slug: string): ProjectData | undefined {
  return PROJECTS[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(PROJECTS);
}
