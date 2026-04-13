import { littleTokyoReborn } from "./little-tokyo-reborn";
import { ykNiece } from "./yk-niece";
import { suicideboys } from "./suicideboys";
import type { ProjectData } from "../project-context";

export const PROJECTS: Record<string, ProjectData> = {
  "little-tokyo-reborn": littleTokyoReborn,
  "yk-niece": ykNiece,
  "suicideboys": suicideboys,
};

export function getProject(slug: string): ProjectData | undefined {
  return PROJECTS[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(PROJECTS);
}
