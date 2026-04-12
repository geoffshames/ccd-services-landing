"use client";
import { useProject } from "@/lib/project-context";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

export function Audience() {
  const PROJECT = useProject();
  if (!PROJECT.audience) return null;
  const { heading, summary, demographics, psychographics, painPoints, quotes } = PROJECT.audience;
  return (
    <section id="audience" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="03" label="Audience" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">{heading || "Who We're Reaching"}</h2>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">{summary}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-16">
          <ScrollReveal className="md:col-span-12">
            <div className="card frame bg-bg-card rounded-2xl p-8">
              <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-3">Demographics</p>
              <p className="text-text-primary text-lg leading-relaxed">{demographics}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-7">
            <div className="bg-white/[0.06] border border-white/[0.10] rounded-2xl p-8 h-full">
              <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-4">What Drives Them</p>
              <div className="space-y-3">
                {psychographics.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">◆</span>
                    <p className="text-text-primary text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-5">
            <div className="card frame bg-bg-card rounded-2xl p-8 h-full">
              <p className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase mb-4">Pain Points</p>
              <div className="space-y-3">
                {painPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-text-muted/50 mt-1.5 text-xs">▸</span>
                    <p className="text-text-muted text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          {quotes && quotes.length > 0 && (
            <ScrollReveal className="md:col-span-12">
              <div className="mt-4">
                <p className="text-xs font-mono text-text-muted/60 tracking-wider uppercase mb-6 text-center">Voice of Customer</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {quotes.map((quote, i) => (
                    <motion.div key={i} className="card frame bg-bg-card rounded-2xl p-6" whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                      <p className="text-text-primary text-base leading-relaxed italic mb-3">&ldquo;{quote.text}&rdquo;</p>
                      <p className="text-text-muted/60 text-xs font-mono tracking-wider">— {quote.source}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
