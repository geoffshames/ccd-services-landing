"use client";

import { ProjectProvider, type ProjectData } from "@/lib/project-context";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Discovery } from "@/components/Discovery";
import { Overview } from "@/components/Overview";
import { Audience } from "@/components/Audience";
import { Targets } from "@/components/Targets";
import { Competitive } from "@/components/Competitive";
import { Timeline } from "@/components/Timeline";
import { Deliverables } from "@/components/Deliverables";
import { Scope } from "@/components/Scope";
import { Investment } from "@/components/Investment";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";
import { AboutCCD } from "@/components/AboutCCD";
import { ImageBreak } from "@/components/ImageBreak";
import { CursorGlow } from "@/components/CursorGlow";

export function ProposalClient({ project }: { project: ProjectData }) {
  return (
    <ProjectProvider data={project}>
      <main>
        <CursorGlow />
        <Navigation />
        <Hero />
        <Discovery />
        <Overview />
        <Audience />
        <Targets />
        <Competitive />
        <ImageBreak
          src={project.images.hero1}
          alt={`${project.client.name} brand direction`}
          caption={project.images.hero1Caption || project.project.type}
        />
        <Timeline />
        <Deliverables />
        <ImageBreak
          src={project.images.brutalist}
          alt="Visual reference"
          caption={
            project.images.brutalistCaption ||
            `${project.client.name} × ${project.studio.name}`
          }
        />
        <Scope />
        <Investment />
        <NextSteps />
        <AboutCCD />
        <Footer />
      </main>
    </ProjectProvider>
  );
}
