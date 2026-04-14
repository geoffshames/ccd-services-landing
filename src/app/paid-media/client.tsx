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

// Brand logos — monochrome, take currentColor
function MetaIcon(props: React.SVGProps<SVGSVGElement>) {
  // Official Meta infinity mark, 3-path composition from Wikimedia
  return (
    <svg viewBox="0 0 290 175" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m31.06,125.96c0,10.98 2.41,19.41 5.56,24.51 4.13,6.68 10.29,9.51 16.57,9.51 8.1,0 15.51-2.01 29.79-21.76 11.44-15.83 24.92-38.05 33.99-51.98l15.36-23.6c10.67-16.39 23.02-34.61 37.18-46.96 11.56-10.08 24.03-15.68 36.58-15.68 21.07,0 41.14,12.21 56.5,35.11 16.81,25.08 24.97,56.67 24.97,89.27 0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75l0-31.02c17.63,0 22.03-16.2 22.03-34.74 0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16.05c-18.2,32.27-22.81,39.62-31.91,51.75-15.95,21.24-29.57,29.29-47.5,29.29-21.27,0-34.72-9.21-43.05-23.09-6.8-11.31-10.14-26.15-10.14-43.06z"/>
      <path d="m24.49,37.3c14.24-21.95 34.79-37.3 58.36-37.3 13.65,0 27.22,4.04 41.39,15.61 15.5,12.65 32.02,33.48 52.63,67.81l7.39,12.32c17.84,29.72 27.99,45.01 33.93,52.22 7.64,9.26 12.99,12.02 19.94,12.02 17.63,0 22.03-16.2 22.03-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71l-25.79-43.08c-12.94-21.62-24.81-37.74-31.68-45.04-7.39-7.85-16.89-17.33-32.05-17.33-12.27,0-22.69,8.61-31.41,21.78z"/>
      <path d="m82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78-12.33,18.61-19.88,46.33-19.88,72.95 0,10.98 2.41,19.41 5.56,24.51l-26.48,17.44c-6.8-11.31-10.14-26.15-10.14-43.06 0-30.75 8.44-62.8 24.49-87.55 14.24-21.95 34.79-37.3 58.36-37.3z"/>
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
                "Foot Locker",
                "Capcom",
                "Porsche",
                "Apple",
                "Formula 1",
                "Polymarket",
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
