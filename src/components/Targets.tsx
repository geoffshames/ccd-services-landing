"use client";
import { useProject } from "@/lib/project-context";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function Targets() {
  const PROJECT = useProject();
  if (!PROJECT.targets || PROJECT.targets.length === 0) return null;
  return (
    <section id="targets" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="05" label="Targets" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">Strategic KPIs</h2>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">Directional targets based on competitive benchmarks and market analysis — not guarantees, but the outcomes we're engineering toward.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {PROJECT.targets.map((target, i) => (
            <ScrollReveal key={i}>
              <motion.div className={`rounded-none p-8 h-full transition-all duration-300 ${i === 0 ? "bg-white/[0.06] border border-white/[0.10]" : "card frame bg-bg-card"}`} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[clamp(2rem,4vw,3rem)] font-bold text-accent leading-none">{target.value}</span>
                  <span className="text-text-primary font-medium text-lg">{target.metric}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{target.context}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-text-muted/50 text-xs font-mono mt-8 text-center">These are directional targets informed by market research and competitive analysis — not contractual guarantees.</p>
      </div>
    </section>
  );
}
