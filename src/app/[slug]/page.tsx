import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getAllSlugs } from "@/lib/projects";
import { ProposalClient } from "./client";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proposal Not Found" };

  const title = `${project.client.name} × ${project.studio.name} — Proposal`;
  const description = project.project.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://proposal.crowdcontroldigital.com/${slug}`,
      siteName: "Crowd Control Digital Proposals",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProposalClient project={project} />;
}
