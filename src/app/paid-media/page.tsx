import { Metadata } from "next";
import { PaidMediaClient } from "./client";

export const metadata: Metadata = {
  title: "Paid Media Management — Crowd Control Digital",
  description:
    "Full-funnel paid media buying for brands, artists, and live events. Meta, TikTok, Google, CTV, programmatic, audio, and OOH. $500M+ in client revenue generated.",
  openGraph: {
    title: "Paid Media Management — Crowd Control Digital",
    description:
      "Full-funnel paid media buying for brands, artists, and live events. Meta, TikTok, Google, CTV, programmatic, audio, and OOH. $500M+ in client revenue generated.",
    images: [
      {
        url: "/images/paid-media/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paid Media Management — Crowd Control Digital",
      },
    ],
  },
};

export default function PaidMediaPage() {
  return <PaidMediaClient />;
}
