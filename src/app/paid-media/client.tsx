"use client";

import { motion } from "framer-motion";
import { PaidMediaNav } from "./nav";
import { PaidMediaFooter } from "./footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TiltCard } from "@/components/TiltCard";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Radio,
  Tv,
  Music,
  MapPin,
  ShoppingCart,
  Users2,
  Mail,
  MessageSquare,
} from "lucide-react";

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

        {/* Corner brackets */}
        <div className="absolute top-20 left-12 w-12 h-12 border-l-2 border-t-2 border-accent pointer-events-none" />
        <div className="absolute top-20 right-12 w-12 h-12 border-r-2 border-t-2 border-accent pointer-events-none" />
        <div className="absolute bottom-20 left-12 w-12 h-12 border-l-2 border-b-2 border-accent pointer-events-none" />
        <div className="absolute bottom-20 right-12 w-12 h-12 border-r-2 border-b-2 border-accent pointer-events-none" />

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
                  icon: Users2,
                  title: "Meta",
                  description: "Facebook, Instagram, Threads & Reels. Full-funnel conversion tracking and dynamic creative optimization.",
                },
                {
                  icon: Music,
                  title: "TikTok",
                  description: "FYP, Discovery, and In-Feed. Native creative strategy for maximum organic amplification.",
                },
                {
                  icon: BarChart3,
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
                  <TiltCard className="h-full p-6 bg-white/[0.06] border border-white/10 rounded-none hover:border-white/20 transition-colors group cursor-pointer">
                    <channel.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
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
                  <TiltCard className="p-6 bg-white/[0.06] border border-white/10 rounded-none hover:border-accent/50 transition-colors group">
                    <div className="text-accent text-3xl font-bold mb-2 group-hover:scale-105 transition-transform origin-left">
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

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <SectionLabel label="LET'S TALK" number="05" />
              <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-tight mb-4">
                Ready to Drive Revenue?
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
