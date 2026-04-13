"use client";

import { createContext, useContext, type ReactNode } from "react";

export type ProjectData = {
  accentColor: string;
  client: {
    name: string;
    logo: string;
    contactName: string;
    contactRole: string;
    contactEmail: string;
    industry: string;
  };
  studio: {
    name: string;
    role: string;
    email: string;
  };
  project: {
    name: string;
    tagline: string;
    type: string;
    startDate: string;
    endDate: string;
    duration: string;
    status: "Awaiting Approval";
  };
  overview: {
    summary: string;
    objectives: string[];
    heading?: string;
    subtitle?: string;
    imageCaption?: string;
    stats?: { value: number; suffix?: string; label: string; description?: string }[];
  };
  discovery?: {
    heading?: string;
    summary: string;
    insights: {
      label: string;
      finding: string;
      source?: string;
    }[];
    marketContext?: string;
  };
  audience?: {
    heading?: string;
    summary: string;
    demographics: string;
    demographicCards?: {
      label: string;
      value: string;
      detail?: string;
    }[];
    personas?: {
      name: string;
      ageRange: string;
      description: string;
      traits: string[];
    }[];
    psychographics: string[];
    painPoints: string[];
    purchaseTriggers?: string[];
    platforms?: {
      name: string;
      description: string;
    }[];
    quotes?: {
      text: string;
      source: string;
    }[];
  };
  targets?: {
    metric: string;
    value: string;
    context: string;
  }[];
  competitive?: {
    summary: string;
    competitors: {
      name: string;
      gap: string;
      strength?: string;
    }[];
  };
  timelineHeading?: string;
  timelineSubheading?: string;
  timelineImageCaption?: string;
  deliverablesSubheading?: string;
  timeline: {
    phase: string;
    week: string;
    date: string;
    status: "upcoming" | "in-progress" | "completed";
    tasks: string[];
    ongoing?: boolean;
  }[];
  deliverables: {
    category: string;
    icon: string;
    items: {
      name: string;
      quantity: string;
      description: string;
    }[];
  }[];
  scope: {
    included: string[];
    excluded: string[];
    subheading?: string;
  };
  quote: {
    model?: "project" | "retainer";
    currency: string;
    lineItems: {
      name: string;
      description: string;
      price: number;
      recurring?: boolean;
    }[];
    subtotal: number;
    setupFee?: {
      label: string;
      amount: number;
    };
    discount: {
      label: string;
      percentage: number;
      amount: number;
    };
    mediaBudget?: {
      label: string;
      amount: number;
      note: string;
    };
    total: number;
    paymentSchedule: {
      milestone: string;
      percentage: number;
      amount: number;
      due: string;
    }[];
    paymentTerms: string;
    paymentLink: string;
  };
  nextSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  cta: {
    headline: string;
    body: string;
    email: string;
  };
  images: {
    hero1: string;
    hero2: string;
    product: string;
    editorial: string;
    texture: string;
    brutalist: string;
    heroBg?: string;
    ogImage?: string;
    hero1Caption?: string;
    brutalistCaption?: string;
  };
};

const ProjectContext = createContext<ProjectData | null>(null);

export function ProjectProvider({ data, children }: { data: ProjectData; children: ReactNode }) {
  return <ProjectContext.Provider value={data}>{children}</ProjectContext.Provider>;
}

export function useProject(): ProjectData {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProject must be used within ProjectProvider");
  return ctx;
}
