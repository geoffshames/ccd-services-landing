"use client";
import { useProject } from "@/lib/project-context";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

export function Discovery() {
  const PROJECT = useProject();
  if (!PROJECT.discovery) return null;
  const { heading, summary, insights, marketContext } = PROJECT.discovery;
  return (
    <section id="discovery" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="01" label="Research" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">{heading || "What We Found"}</h2>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">{summary}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-16">
          {insights.map((insight, i) => {
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-6"];
            return (
              <ScrollReveal key={i} className={spans[i % spans.length]}>
                <motion.div className={`group relative rounded-2xl p-8 h-full transition-all duration-300 ${i === 0 ? "bg-white/[0.06] border border-white/[0.10]" : "card frame bg-bg-card"}`} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase bg-white/[0.07] px-3 py-1 rounded-full">{insight.label}</span>
                    {insight.source && <span className="text-xs font-mono text-text-muted/60 tracking-wider">{insight.source}</span>}
                  </div>
                  <p className="text-text-primary text-base md:text-lg leading-relaxed">{insight.finding}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
        {marketContext && (
          <ScrollReveal className="mt-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-text-muted/70 text-sm font-mono tracking-wider uppercase mb-3">Why Now</p>
              <p className="text-text-muted text-lg leading-relaxed italic">{marketContext}</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
