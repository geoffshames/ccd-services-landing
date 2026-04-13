"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

const CASE_STUDIES = [
  {
    client: "BBNO$",
    metric: "150K+",
    description: "TIKTOK CREATES",
  },
  {
    client: "PESO PLUMA",
    metric: "700M+",
    description: "SPOTIFY STREAMS GENERATED",
  },
  {
    client: "KSI",
    metric: "350M+",
    description: "SPOTIFY STREAMS GENERATED",
  },
  {
    client: "ILLENIUM",
    metric: "150K+",
    description: "TICKETS SOLD",
  },
];

const SELECT_CLIENTS = [
  "88rising", "AEG Presents", "AESPA", "Amazon", "Apple",
  "Beats By Dre", "BMG", "Capitol Records", "CAA", "Chainsmokers",
  "Dim Mak Records", "Epitaph Records", "Formula 1", "Foot Locker",
  "Golden State Warriors", "Imagine Dragons", "Insomniac Events",
  "Joji", "JPEGMAFIA", "Kappa", "Kid Laroi", "Kiss Of Life",
  "KSI", "Kygo", "Live Nation", "Marshmello", "Monster Energy",
  "NBA", "NFL", "NLE Choppa", "Porsche", "RCA Records",
  "Red Bull Records", "Rich Brian", "RIIZE", "SM Entertainment",
  "Snoop Dogg", "Sony Music", "Travis Scott",
  "Universal Music Group", "Virgin Music Group",
  "Warner Music Group", "Wasserman",
];

export function AboutCCD() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="" label="About Crowd Control" />
        </ScrollReveal>

        {/* Agency intro */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mb-20">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text-primary leading-[1.1] mb-6">
              10 years of breaking through the noise.
            </h2>
            <p className="text-[16px] text-text-muted leading-[1.8]">
              Crowd Control Digital is a full-service marketing agency that works with
              creators and brands of all sizes — from independent artists to Fortune 500
              companies. We craft and execute campaigns across paid media, influencer
              marketing, creative strategy, billboards & OOH, and event production.
            </p>
          </div>
        </ScrollReveal>

        {/* Case study header */}
        <ScrollReveal delay={0.15}>
          <div className="mb-10">
            <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold tracking-[-0.02em] text-text-primary leading-[1.2]">
              Results that speak for themselves.
            </h3>
          </div>
        </ScrollReveal>

        {/* Case study metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {CASE_STUDIES.map((study, i) => (
            <ScrollReveal key={study.client} delay={0.1 + i * 0.08}>
              <div className="card frame bg-bg-card rounded-none p-6 group hover:border-accent/30 transition-colors">
                <div className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase mb-4">
                  {study.client}
                </div>
                <div className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary tracking-[-0.03em] mb-2">
                  {study.metric}
                </div>
                <div className="text-[13px] text-text-muted leading-relaxed uppercase">
                  {study.description}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client marquee */}
        <ScrollReveal delay={0.2}>
          <div className="mb-8">
            <div className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-8">
              Select Clients
            </div>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-x-6 gap-y-3 whitespace-nowrap"
                animate={{ x: [0, -1500] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...SELECT_CLIENTS, ...SELECT_CLIENTS].map((client, i) => (
                  <span
                    key={`${client}-${i}`}
                    className="text-[15px] font-bold text-accent tracking-wide" style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {client}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
