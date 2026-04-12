"use client";
import { useProject } from "@/lib/project-context";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function Competitive() {
  const PROJECT = useProject();
  if (!PROJECT.competitive) return null;
  return (
    <section id="competitive" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="06" label="Landscape" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">Competitive Context</h2>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">{PROJECT.competitive.summary}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {PROJECT.competitive.competitors.map((comp, i) => (
            <ScrollReveal key={i}>
              <motion.div className="card frame bg-bg-card rounded-none p-8 h-full transition-all duration-300" whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                <p className="text-text-primary font-bold text-lg mb-2">{comp.name}</p>
                {comp.strength && <p className="text-text-muted/70 text-sm mb-3"><span className="text-accent/70 font-mono text-xs mr-2">STRENGTH</span>{comp.strength}</p>}
                <p className="text-text-muted text-sm"><span className="text-accent font-mono text-xs mr-2">GAP</span>{comp.gap}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
