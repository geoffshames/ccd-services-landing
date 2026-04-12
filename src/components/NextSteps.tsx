"use client";

import { motion } from "framer-motion";
import { useProject } from "@/lib/project-context";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";

// Grid layout pattern for next steps — cycles for any number of steps
const GRID_PATTERN = [
  { span: "md:col-span-7", variant: "slideRight" as const },
  { span: "md:col-span-5", variant: "slideLeft" as const },
  { span: "md:col-span-5", variant: "scaleIn" as const },
  { span: "md:col-span-7", variant: "scaleIn" as const },
  { span: "md:col-span-12", variant: "scaleIn" as const },
];

export function NextSteps() {
  const PROJECT = useProject();
  const steps = PROJECT.nextSteps;

  return (
    <section id="next-steps" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="11" label="Next Steps" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-16">
            {PROJECT.cta.headline}
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-12 gap-4" staggerDelay={0.1}>
          {steps.map((step, i) => {
            const layout = GRID_PATTERN[i % GRID_PATTERN.length];
            return (
              <StaggerItem key={i} className={layout.span} variant={layout.variant}>
                <TiltCard className="group h-full">
                  <div className="card frame bg-bg-card rounded-none p-7 hover:bg-bg-card-hover transition-all duration-500 h-full">
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-500">
                        <span className="text-[15px] font-mono text-accent group-hover:text-bg transition-colors duration-500 font-bold">
                          {String(step.step).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[17px] font-semibold text-text-primary mb-2 tracking-[-0.01em]">{step.title}</h3>
                        <p className="text-[14px] text-text-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Contact CTA */}
        <ScrollReveal delay={0.3} variant="scaleIn" className="mt-16">
          <TiltCard className="group max-w-xl mx-auto">
            <div className="card frame bg-bg-card rounded-none p-8 text-center hover:bg-bg-card-hover transition-all duration-500">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {PROJECT.cta.body}
              </h3>
              <p className="text-[14px] text-text-muted mb-6">
                We&apos;re here to clarify anything about the project.
              </p>
              <motion.a
                href={`mailto:${PROJECT.studio.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-accent text-white font-semibold text-[15px] px-10 py-4 rounded-none hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </motion.a>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
