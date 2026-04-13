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

  const title = `${project.client.name} — ${project.project.name}`;
  const description = project.project.tagline;

  const ogImage = project.images.ogImage
    ? `https://proposal.crowdcontroldigital.com${project.images.ogImage}`
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://proposal.crowdcontroldigital.com/${slug}`,
      siteName: "Crowd Control Digital Proposals",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
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
