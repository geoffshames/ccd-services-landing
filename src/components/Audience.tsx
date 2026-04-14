"use client";
import { useProject } from "@/lib/project-context";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

export function Audience() {
  const PROJECT = useProject();
  if (!PROJECT.audience) return null;
  const {
    heading,
    summary,
    demographics,
    demographicCards,
    personas,
    psychographics,
    painPoints,
    purchaseTriggers,
    platforms,
    quotes,
  } = PROJECT.audience as any;

  return (
    <section
      id="audience"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <SectionLabel number="03" label="Audience" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">
            {heading || "Who We're Reaching"}
          </h2>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
            {summary}
          </p>
        </ScrollReveal>

        {/* Demographics Grid */}
        {demographicCards && demographicCards.length > 0 ? (
          <ScrollReveal className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {demographicCards.map((card, i) => (
                <div
                  key={i}
                  className="card frame bg-bg-card rounded-none p-6"
                >
                  <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-2">
                    {card.label}
                  </p>
                  <p className="text-text-primary text-xl font-bold leading-tight">
                    {card.value}
                  </p>
                  {card.detail && (
                    <p className="text-text-muted/60 text-sm mt-1">
                      {card.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal className="mt-16">
            <div className="card frame bg-bg-card rounded-none p-8">
              <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-3">
                Demographics
              </p>
              <p className="text-text-primary text-lg leading-relaxed">
                {demographics}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Audience Personas */}
        {personas && personas.length > 0 && (
          <ScrollReveal className="mt-12">
            <p className="text-xs font-mono text-text-muted/60 tracking-wider uppercase mb-6">
              Audience Personas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {personas.map((persona, i) => (
                <motion.div
                  key={i}
                  className="bg-white/[0.06] border border-white/[0.10] rounded-none p-6 flex flex-col"
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-text-primary text-lg font-bold">
                      {persona.name}
                    </h3>
                    <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1">
                      {persona.ageRange}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                    {persona.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {persona.traits.map((trait, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-mono text-text-muted/70 tracking-wider uppercase bg-white/[0.04] border border-white/[0.08] px-2 py-1"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Psychographics + Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-12">
          <ScrollReveal className="md:col-span-7">
            <div className="bg-white/[0.06] border border-white/[0.10] rounded-none p-8 h-full">
              <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-4">
                What Drives Them
              </p>
              <div className="space-y-3">
                {psychographics.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">◆</span>
                    <p className="text-text-primary text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-5">
            <div className="card frame bg-bg-card rounded-none p-8 h-full">
              <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-4">
                Pain Points
              </p>
              <div className="space-y-3">
                {painPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-text-muted/50 mt-1.5 text-xs">
                      ▸
                    </span>
                    <p className="text-text-muted text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Purchase Triggers */}
        {purchaseTriggers && purchaseTriggers.length > 0 && (
          <ScrollReveal className="mt-12">
            <div className="card frame bg-bg-card rounded-none p-8">
              <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-4">
                What Makes Them Buy
              </p>
              <div className="space-y-3">
                {purchaseTriggers.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">●</span>
                    <p className="text-text-primary text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Where They Spend Time */}
        {platforms && platforms.length > 0 && (
          <ScrollReveal className="mt-12">
            <p className="text-xs font-mono text-text-muted/60 tracking-wider uppercase mb-6">
              Where They Spend Time
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map((platform, i) => (
                <motion.div
                  key={i}
                  className="card frame bg-bg-card rounded-none p-6"
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <p className="text-text-primary text-base font-bold mb-2">
                    {platform.name}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Voice of Customer */}
        {quotes && quotes.length > 0 && (
          <ScrollReveal className="mt-12">
            <p className="text-xs font-mono text-text-muted/60 tracking-wider uppercase mb-6 text-center">
              Voice of Customer
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quotes.map((quote, i) => (
                <motion.div
                  key={i}
                  className="card frame bg-bg-card rounded-none p-6"
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <p className="text-text-primary text-base leading-relaxed italic mb-3">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <p className="text-text-muted/60 text-xs font-mono tracking-wider">
                    — {quote.source}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
