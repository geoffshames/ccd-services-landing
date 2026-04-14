"use client";

import { createContext, useContext } from "react";

export const ProjectContext = createContext<any>({
  audience: null,
  scope: { included: [], excluded: [] },
  investment: null,
  methodology: null,
  timeline: null,
  qualifications: null,
  contact: null,
});

export function useProject(): any {
  return useContext(ProjectContext);
}

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProjectContext.Provider value={{ audience: null, scope: { included: [], excluded: [] }, investment: null, methodology: null, timeline: null, qualifications: null, contact: null }}>
      {children}
    </ProjectContext.Provider>
  );
}
