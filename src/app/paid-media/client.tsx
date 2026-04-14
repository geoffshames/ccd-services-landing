"use client";

import { motion } from "framer-motion";
import { PaidMediaNav } from "./nav";
import { PaidMediaFooter } from "./footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TiltCard } from "@/components/TiltCard";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Target,
  Radio,
  Tv,
  MapPin,
  ShoppingCart,
  Mail,
  MessageSquare,
} from "lucide-react";

// Brand logos — simple-icons path data, monochrome, takes currentColor
function MetaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true" {...props}>
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.498 2.47 3.427 1.256 1.446 2.567 2.114 4.31 2.114 1.72 0 2.793-.756 3.474-1.926.486-.836.4-.836.4-.836.064-.113.128-.224.185-.34a7.35 7.35 0 0 0 .208-.475c.031-.081.061-.167.091-.252.03-.085.059-.178.086-.27.027-.092.053-.178.077-.266.024-.087.046-.171.066-.259.02-.088.038-.175.056-.266l.05-.265c.015-.087.028-.175.04-.266.012-.09.023-.18.03-.272.008-.092.016-.183.02-.278.005-.094.008-.188.008-.288 0-2.545-.69-5.225-1.896-7.207-1.188-1.946-2.868-3.217-4.91-3.217-1.04 0-1.89.445-2.6 1.015-1.086.825-2.065 2.122-3.212 4.059l-1.5 2.527v.001c-1.146-1.933-2.124-3.228-3.21-4.053-.708-.57-1.56-1.014-2.598-1.014-2.046 0-3.718 1.267-4.91 3.207l-.007.014ZM10.14 10.77c-.88 1.47-1.52 2.569-1.52 2.569-1.47 2.578-1.97 3.158-2.78 3.158-.81 0-1.287-.717-1.287-2.006 0-2.747 1.373-5.55 3.007-5.55.909 0 1.67.517 2.835 2.155l-.255-.326Zm6.534-1.219c-.435-.83-.842-1.274-1.412-1.274-.574 0-.994.436-1.726 1.593.566.932 1.08 1.896 1.716 2.985l.968 1.617c1.6 2.53 2.266 3.093 3.125 3.093.818 0 1.277-.739 1.277-2.087 0-2.13-.98-4.823-3.948-5.927Z"/>
    </svg>
  );
}
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}
function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
    </svg>
  );
}

export function PaidMediaClient() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <PaidMediaNav />

      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/paid-media/hero-bg.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/[0.75]" />
        </div>

        {/* Corner brackets — scale + inset down on mobile so they clear the nav and viewport edges */}
        <div className="absolute top-24 left-4 w-6 h-6 sm:top-20 sm:left-12 sm:w-12 sm:h-12 border-l-2 border-t-2 border-accent pointer-events-none" />
        <div className="absolute top-24 right-4 w-6 h-6 sm:top-20 sm:right-12 sm:w-12 sm:h-12 border-r-2 border-t-2 border-accent pointer-events-none" />
        <div className="absolute bottom-8 left-4 w-6 h-6 sm:bottom-20 sm:left-12 sm:w-12 sm:h-12 border-l-2 border-b-2 border-accent pointer-events-none" />
        <div className="absolute bottom-8 right-4 w-6 h-6 sm:bottom-20 sm:right-12 sm:w-12 sm:h-12 border-r-2 border-b-2 border-accent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.05em] mb-6">
              <span className="block text-white">WE'LL DRIVE</span>
              <span className="block">
                YOUR AUDIENCE TO <span className="text-accent">YOUR BRAND</span>
              </span>
            </h1>

            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-white/70 max-w-3xl mb-8 font-light leading-relaxed">
              Full-funnel paid media buying across Meta, TikTok, Google, CTV, programmatic, audio, OOH and more.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-accent text-black font-bold rounded-none hover:bg-accent/90 transition-colors w-fit text-center uppercase tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get a Proposal
              </a>
              <a
                href="https://crowdcontroldigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-none hover:border-white/40 transition-colors w-fit text-center uppercase tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="bg-black/50 border-t border-b border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <div className="text-[clamp(2rem,5vw,4rem)] font-bold text-accent mb-2">$500M+</div>
                <div className="text-sm text-white/60 font-light">Client Revenue Generated</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <div className="text-[clamp(2rem,5vw,4rem)] font-bold text-accent mb-2">12+</div>
                <div className="text-sm text-white/60 font-light">Years in Media Buying</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <div className="text-[clamp(2rem,5vw,4rem)] font-bold text-accent mb-2">250+</div>
                <div className="text-sm text-white/60 font-light">Brands Served</div>
              </motion.div>


            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CHANNELS SECTION */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <SectionLabel label="OUR CHANNELS" number="01" />
              <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-tight">
                Reach Your Audience Everywhere
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: MetaIcon,
                  title: "Meta",
                  description: "Facebook, Instagram, Threads & Reels. Full-funnel conversion tracking and dynamic creative optimization.",
                },
                {
                  icon: TikTokIcon,
                  title: "TikTok",
                  description: "FYP, Discovery, and In-Feed. Native creative strategy for maximum organic amplification.",
                },
                {
                  icon: GoogleIcon,
                  title: "Google",
                  description: "Search, YouTube, and Performance Max. Intent-based buying with real-time optimization.",
                },
                {
                  icon: Tv,
                  title: "CTV",
                  description: "Connected TV & streaming. Premium placements on Hulu, Roku, and programmatic networks.",
                },
                {
                  icon: Radio,
                  title: "Audio",
                  description: "Spotify, Pandora, and audio ads. Targeting by mood, genre, and listening behavior.",
                },
                {
                  icon: MapPin,
                  title: "OOH",
                  description: "Billboards, transit, and digital displays. Geo-targeted campaigns in key markets.",
                },
                {
                  icon: ShoppingCart,
                  title: "Retail Media",
                  description: "Amazon, Walmart, Target shelves. DTC optimization across retail media networks.",
                },
                {
                  icon: Target,
                  title: "Programmatic",
                  description: "Real-time bidding across premium exchanges. Contextual and behavioral targeting at scale.",
                },
                {
                  icon: MessageSquare,
                  title: "Native",
                  description: "Taboola, Outbrain, and branded content. High-intent placements across publisher networks.",
                },
              ].map((channel, idx) => (
                <StaggerItem key={idx}>
                  <TiltCard className="h-full p-6 bg-white/[0.06] border border-accent rounded-none">
                    <channel.icon className="w-8 h-8 text-accent mb-4" strokeWidth={2.5} />
                    <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                    <p className="text-sm text-white/60 font-light">{channel.description}</p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <SectionLabel label="OUR APPROACH" number="02" />
              <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-tight">
                Full-Funnel Strategy, Real Results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Strategy",
                  description: "We analyze your current media spend, competitive landscape, and audience. Then we build a channel-specific strategy designed to maximize ROAS.",
                },
                {
                  step: "02",
                  title: "Creative & Testing",
                  description: "Our creative team develops platform-native content. We test messaging, formats, and audiences across all channels simultaneously.",
                },
                {
                  step: "03",
                  title: "Launch & Optimize",
                  description: "We launch campaigns with comprehensive tracking and implement real-time optimizations. Daily monitoring ensures peak performance.",
                },
                {
                  step: "04",
                  title: "Reporting & Scale",
                  description: "Monthly reports with full channel breakdowns, attribution, and insights. We scale winners and reallocate budget to high-performing segments.",
                },
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-8 rounded-none bg-white/[0.03] border border-white/10"
                  >
                    <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <SectionLabel label="CASE STUDIES" number="03" />
              <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-tight">
                Results That Drive Revenue
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  client: "Vibra Urbana",
                  metric: "16x ROAS",
                  description: "Paid media strategy overhaul across festival ticketing campaigns.",
                },
                {
                  client: "Kappa",
                  metric: "$3.1M Sales",
                  description: "Paid media management across new collection launches.",
                },
                {
                  client: "Malbon Golf",
                  metric: "$4.5M Sales",
                  description: "Paid media management across new collection launches.",
                },
                {
                  client: "Illenium",
                  metric: "150K Tickets",
                  description: "Tour marketing strategy and paid media for The Ascend Tour.",
                },
              ].map((result, idx) => (
                <StaggerItem key={idx}>
                  <TiltCard className="p-6 bg-white/[0.06] border border-accent rounded-none">
                    <div className="text-accent text-3xl font-bold mb-2">
                      {result.metric}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{result.client}</h3>
                    <p className="text-sm text-white/60 font-light">{result.description}</p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRUSTED BY MARQUEE */}
      <section className="py-20 border-b border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-10 px-6">
          <SectionLabel label="TRUSTED BY" number="04" />
        </div>
        <div className="relative">
          {/* gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, -1800] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {(() => {
              const clients = [
                "Universal Music Group",
                "Warner Music Group",
                "Live Nation",
                "Golden State Warriors",
                "88rising",
                "Insomniac",
                "Kappa",
                "Atlantic Records",
                "NFL",
                "Malbon Golf",
                "UTA",
                "Foot Locker",
              ];
              // Duplicate the list so the loop is seamless
              return [...clients, ...clients, ...clients].map((name, i) => (
                <span
                  key={i}
                  className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-accent uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </span>
              ));
            })()}
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <SectionLabel label="LET'S TALK" number="05" />
              <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-tight mb-4">
                Ready To Take Control?
              </h2>
              <p className="text-white/60 font-light">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              action="https://formsubmit.co/proposals@crowdcontroldigital.com"
              method="POST"
              className="space-y-6 bg-white/[0.03] border border-white/10 p-8 rounded-none"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://services.crowdcontroldigital.com/paid-media?success=true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder-white/40 outline-none focus:border-accent/50 transition-colors rounded-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder-white/40 outline-none focus:border-accent/50 transition-colors rounded-none"
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company / Artist Name"
                required
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder-white/40 outline-none focus:border-accent/50 transition-colors rounded-none"
              />

              <select
                name="budget"
                required
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder-white/40 outline-none focus:border-accent/50 transition-colors rounded-none"
              >
                <option value="" disabled selected>
                  Monthly Budget Range
                </option>
                <option value="Under $10K">Under $10K</option>
                <option value="$10K - $25K">$10K - $25K</option>
                <option value="$25K - $50K">$25K - $50K</option>
                <option value="$50K - $100K">$50K - $100K</option>
                <option value="$100K+">$100K+</option>
              </select>

              <div>
                <label className="block text-sm font-light text-white/60 mb-3">
                  Channels of Interest
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Meta", "TikTok", "Google", "CTV", "Audio", "Programmatic", "OOH", "Retail Media"].map((channel) => (
                    <label key={channel} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="channels"
                        value={channel}
                        className="w-4 h-4 accent-accent rounded-none"
                      />
                      <span className="text-sm text-white/70">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your goals..."
                rows={5}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder-white/40 outline-none focus:border-accent/50 transition-colors resize-none rounded-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-accent text-black font-bold rounded-none hover:bg-accent/90 transition-colors uppercase tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get Your Proposal
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <PaidMediaFooter />
    </div>
  );
}
