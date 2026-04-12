"use client";

import { useProject } from "@/lib/project-context";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";
import { ParallaxImage } from "./ParallaxImage";

export function Deliverables() {
  const PROJECT = useProject();

  return (
    <section id="deliverables" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="08" label="Deliverables" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-28">
          <ScrollReveal delay={0.1} variant="slideRight" className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8">
              What You Get
            </h2>
            {PROJECT.deliverablesSubheading && (
              <p className="text-[16px] text-text-secondary leading-[1.8] tracking-[-0.01em]">
                {PROJECT.deliverablesSubheading}
              </p>
            )}
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ParallaxImage
              src={PROJECT.images.product}
              alt="Product visualization example"
              caption="Visual Asset Example"
              className="aspect-[4/3] rounded-none"
            />
          </div>
        </div>

        {PROJECT.deliverables.map((category, catIdx) => (
          <div key={catIdx} className="mb-24 last:mb-20">
            <ScrollReveal delay={0.05}>
              <div className="flex items-baseline gap-4 mb-8">
                <h3 className="text-[22px] font-semibold text-text-primary tracking-[-0.02em]">{category.category}</h3>
                <div className="flex-1 h-px bg-border" />
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-12 gap-5" staggerDelay={0.1}>
              {category.items.map((item, i) => {
                // First item in each category gets the wide treatment
                const isFirst = i === 0;
                // Alternate layout patterns for visual variety
                const isWide = isFirst && category.items.length > 2;
                const colSpan = isWide ? "md:col-span-7" : category.items.length === 1 ? "md:col-span-12" : category.items.length === 2 ? "md:col-span-6" : i === 1 && isFirst ? "md:col-span-5" : "md:col-span-6";

                // Use accent card style for the last item in categories with 3+ items
                const isAccent = i === category.items.length - 1 && category.items.length >= 3;

                return (
                  <StaggerItem key={i} className={colSpan} variant="scaleIn">
                    <TiltCard className="group h-full">
                      <div className={`rounded-none p-10 h-full transition-all duration-500 ${
                        isAccent
                          ? "bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08]"
                          : "card frame bg-bg-card hover:bg-bg-card-hover"
                      }`}>
                        <div className="flex items-start justify-between mb-5">
                          <h4 className={`${isWide ? "text-[22px]" : "text-[18px]"} font-bold text-text-primary tracking-[-0.01em] group-hover:text-accent transition-colors duration-500`}>
                            {item.name}
                          </h4>
                          <span className="text-[11px] font-mono text-accent/70 tracking-[0.1em] whitespace-nowrap ml-4">
                            {item.quantity.toUpperCase()}
                          </span>
                        </div>
                        <p className={`${isWide ? "text-[16px]" : "text-[15px]"} text-text-muted leading-[1.7]`}>
                          {item.description}
                        </p>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        ))}

        <div className="section-divider max-w-6xl mx-auto mt-16" />
      </div>
    </section>
  );
}
