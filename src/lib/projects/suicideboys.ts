import type { ProjectData } from "../project-context";

export const suicideboys: ProjectData = {
  accentColor: "#CC0000",

  client: {
    name: "$UICIDEBOY$",
    logo: "",
    contactName: "Dana Biondi",
    contactRole: "Management",
    contactEmail: "dana@gr6y.com",
    industry: "Music / Hip-Hop / Touring",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Grey Day Data Engine",
    tagline:
      "You built the most dominant independent tour in hip-hop. We build the data layer that makes every cycle compound — capturing 200K+ fans, unlocking ancillary revenue, and giving your team real-time market intelligence through TOUR CONTROL.",
    type: "Tour Data Capture + Revenue Infrastructure",
    startDate: "June 1, 2026",
    endDate: "November 30, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Crowd Control Digital will deploy the data capture and revenue infrastructure layer around Grey Day Tour 2026. CCD's proprietary TOUR CONTROL platform provides real-time ticket pacing intelligence across all 33 markets, while a purpose-built fan data system — powered by Laylo — captures email, SMS, and behavioral data from every touchpoint: ticket purchases, merch transactions, on-site activations, and digital interactions. Paid media campaigns drive ticket sales and merch revenue in markets that need support. The result is an owned fan database that compounds year over year, turning every Grey Day cycle into a smarter, more profitable operation.",
    objectives: [
      "Deploy TOUR CONTROL across all 33 Grey Day 2026 markets — real-time ticket pacing, sell-through prediction, and dynamic media allocation so budget flows to the markets that need it",
      "Build a first-party fan data system from scratch — capturing email, SMS, and behavioral data from ticket buyers, merch customers, and on-site activations via Laylo",
      "Launch market-specific lifecycle campaigns — pre-show hype, day-of content, post-show exclusive drops — all personalized by city and fan segment",
      "Execute paid media campaigns across Meta, TikTok, and YouTube for ticket sales support and merch promotion, with ad spend billed separately at a 15% management fee",
      "Create data-gated exclusives — tour-only merch, attendee-only colorways, early VIP access — turning every exclusive into both a data capture mechanism and a revenue driver",
    ],
    subtitle:
      "Data capture, real-time tour intelligence, and paid media — built around the most dominant independent tour in hip-hop.",
    imageCaption: "Tour Data Capture + Revenue Infrastructure",
    stats: [
      {
        value: 33,
        label: "Markets Monitored",
        description:
          "Real-time ticket pacing and sell-through intelligence via TOUR CONTROL across every Grey Day 2026 date",
      },
      { value: 200, suffix: "K+", label: "Fan Data Target" },
      { value: 6, label: "Month Campaign" },
      { value: 3, label: "Revenue Streams" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited the full $uicideboy$ digital ecosystem — website, socials, merch infrastructure, fan touchpoints, and competitive landscape. The findings confirm what the numbers already prove: this is one of the most impressive independent operations in music. The opportunity isn't to fix what's broken — it's to add the data layer that multiplies what's already working.",
    insights: [
      {
        label: "Uncaptured Audience",
        finding:
          "600,000+ tickets sold annually across 60 dates with zero first-party data capture. No email forms, no SMS opt-in, no Laylo, no fan CRM of any kind on g59records.com or at point of sale. Every ticket buyer is a one-time transaction today.",
        source: "g59records.com audit / Ticketmaster analysis",
      },
      {
        label: "Merch Pricing Power",
        finding:
          "$30M in merch revenue in 2024 with consistent 2-3x resale on Grailed and StockX. This isn't just demand — it's pricing power that could be amplified through data-gated exclusives and scarcity-driven drops tied to fan opt-in.",
        source: "Grailed / StockX market analysis",
      },
      {
        label: "Tour Economics",
        finding:
          "Grey Day grossed $50.7M in 2024 per Billboard Boxscore — a top-5 hip-hop tour. At this volume, even a 5% lift in per-fan revenue through lifecycle campaigns and ancillary offers represents millions in incremental value.",
        source: "Billboard Boxscore",
      },
      {
        label: "Zero Owned Channel",
        finding:
          "10.6M Spotify listeners, 4M Instagram followers, 2M TikTok — but zero owned communication channel. Every fan relationship is rented from a platform that controls the algorithm. One Laylo implementation changes this overnight.",
        source: "Social media audit / Spotify",
      },
      {
        label: "Compounding Opportunity",
        finding:
          "Grey Day runs annually — this isn't a one-off tour. A fan database built in 2026 becomes the pre-sale engine for 2027, the merch drop list for off-cycle releases, and the retargeting seed for every future campaign.",
        source: "Tour history analysis",
      },
    ],
    marketContext:
      "The industry is moving fast on first-party data. Disturbed captured 102K fans on a single tour cycle. Bad Bunny used SMS validation to prioritize 600K local fans for his Puerto Rico residency. At $uicideboy$'s scale — 600K+ annual ticket buyers — the compounding returns of a data capture system are outsized. Grey Day 2026 is the natural starting point.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "The Grey Day audience is one of the most loyal and highest-spending fan bases in hip-hop — a cross-genre community united by authenticity, independence, and raw emotional connection.",
    demographics:
      "16–28 core, predominantly male (70%+), suburban and secondary-market concentrated across North America. Skews white middle-class — rap music's biggest-spending consumer segment.",
    psychographics: [
      "Connect through shared darkness — mental health, addiction recovery, feeling like outsiders — and the music gives them a community built on authenticity",
      "Anti-corporate, pro-independence — they respect $uicideboy$ because they did it themselves, without labels or radio",
      "Merch-obsessed and brand-loyal — G59 gear is tribal signaling, not fashion. They buy to belong, and they come back every drop",
      "Cross-genre identity — the same fan is at a Knocked Loose show one weekend and Grey Day the next",
    ],
    painPoints: [
      "Access frustration — tickets sell fast, resale prices spike, fans feel locked out of their own community",
      "Merch scarcity at shows — long lines, designs sell out before some fans reach the booth",
      "No recognition for loyalty — fans who've attended 5+ Grey Days get the same experience as first-timers",
      "No direct communication — fans rely on Instagram algorithms to know when something drops",
    ],
    quotes: [
      {
        text: "Grey Day is the one show I go to every year no matter what. It's like church for us.",
        source: "Reddit r/G59",
      },
      {
        text: "I'd kill for early access to merch drops. By the time I get in line, everything good is gone.",
        source: "Reddit r/G59",
      },
      {
        text: "They don't need a label, they don't need radio. They built this themselves and that's why we ride.",
        source: "YouTube comments",
      },
    ],
  },

  competitive: {
    summary:
      "$uicideboy$ don't have peers at their scale in the independent space. The comparison here isn't artistic — it's operational. At 10.6M monthly listeners and $50M+ annual tour gross, the question is: what does adding a data layer unlock at this volume versus what it unlocks for artists operating at a fraction of the scale?",
    competitors: [
      {
        name: "Bones — 5M Monthly Listeners",
        strength: "Prolific output, pioneered the underground aesthetic, deeply committed core audience",
        gap: "No comparable tour infrastructure or merch revenue — operates at a fundamentally different business scale with no data capture",
      },
      {
        name: "Ghostemane — 3.4M Monthly Listeners",
        strength: "Strong metal/industrial crossover appeal, visually distinctive brand, consistent touring presence",
        gap: "Club/theater venues, fraction of the merch operation — the ROI of data infrastructure at his scale doesn't compare to $uicideboy$'s 600K+ annual ticket volume",
      },
      {
        name: "Destroy Lonely — 4.8M Monthly Listeners",
        strength: "Opium-adjacent buzz, rapid growth trajectory, strong younger demo appeal",
        gap: "Early-career touring with no comparable business infrastructure — opening Grey Day 2026 but lacks the independent apparatus that makes $uicideboy$ unique",
      },
    ],
  },

  timelineSubheading:
    "A focused 6-month engagement from infrastructure build through full tour execution and post-tour analysis — every phase designed to maximize data capture and revenue during Grey Day 2026.",
  timelineImageCaption: "6 Months / 4 Phases / 33 Markets",

  timeline: [
    {
      phase: "Infrastructure Build",
      week: "Weeks 1–4",
      date: "June 2026",
      status: "upcoming" as const,
      tasks: [
        "Deploy TOUR CONTROL platform — ingest ticket pacing data across all 33 markets, configure sell-through prediction models and alert thresholds",
        "Build Laylo fan data infrastructure — SMS/email capture flows, segmentation architecture, welcome sequences, and integration with merch and ticketing systems",
        "Set up paid media architecture — Meta, TikTok, and YouTube ad accounts, pixel/CAPI tracking, conversion events, and audience seeds",
        "Design data-gated exclusive strategy — tour-only merch drops, attendee-only colorways, early access tiers tied to opt-in",
      ],
    },
    {
      phase: "Pre-Tour Activation",
      week: "Weeks 5–12",
      date: "July – August 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch pre-sale data capture campaigns — Laylo drop pages for each market, SMS keyword campaigns, and social-to-list conversion funnels",
        "Activate paid media for ticket sales — geo-targeted campaigns across Meta and TikTok driving presale and general on-sale traffic",
        "Begin TOUR CONTROL market monitoring — weekly pacing reports, risk-tier classification, and budget reallocation recommendations",
        "Execute first data-gated merch drop — exclusive pre-tour design available only to SMS/email subscribers",
      ],
    },
    {
      phase: "Tour Execution",
      week: "Weeks 13–22",
      date: "August 29 – October 2026",
      status: "upcoming" as const,
      tasks: [
        "Run TOUR CONTROL in real-time — daily pacing dashboards, dynamic media budget shifts to underperforming markets, sell-through alerts",
        "Execute market-by-market lifecycle campaigns — pre-show hype (3 days out), day-of content push, post-show exclusive drop (24hr window)",
        "On-site data capture activations — QR-to-Laylo, SMS keyword signage, merch booth opt-in incentives at every venue",
        "Paid media support for remaining inventory — surge campaigns for markets below 85% sell-through, retargeting of engaged non-buyers",
      ],
    },
    {
      phase: "Post-Tour & Compounding",
      week: "Weeks 23–26",
      date: "November 2026",
      status: "upcoming" as const,
      tasks: [
        "Full tour data analysis — capture rates by market, fan database composition, revenue attribution across all touchpoints",
        "TOUR CONTROL season report — pacing accuracy audit, media efficiency analysis, and market intelligence brief for 2027 planning",
        "Launch post-tour nurture sequences — keeping the captured database active with off-cycle content, merch drops, and music releases",
        "Deliver 2027 Grey Day readiness plan — database segmentation strategy, pre-sale architecture, and recommended infrastructure upgrades",
      ],
      ongoing: true,
    },
  ],

  deliverables: [
    {
      category: "TOUR CONTROL Platform",
      icon: "●",
      items: [
        {
          name: "TOUR CONTROL Deployment",
          quantity: "33 markets",
          description:
            "CCD's proprietary tour intelligence platform — real-time ticket pacing dashboards, sell-through prediction models, risk-tier market classification, and dynamic media budget recommendations across every Grey Day 2026 date",
        },
        {
          name: "Weekly Pacing Reports",
          quantity: "22 reports",
          description:
            "Market-by-market sell-through analysis with trend lines, velocity indicators, and actionable media allocation recommendations — delivered every Monday during pre-tour and tour phases",
        },
        {
          name: "Season Intelligence Report",
          quantity: "1",
          description:
            "Comprehensive post-tour analysis — pacing model accuracy audit, market performance rankings, media efficiency metrics, and data-driven planning brief for Grey Day 2027",
        },
      ],
    },
    {
      category: "Fan Data Capture",
      icon: "◆",
      items: [
        {
          name: "Laylo Infrastructure",
          quantity: "1 build",
          description:
            "Full Laylo implementation — fan database architecture, SMS/email capture flows, segmentation schema, welcome sequences, and integration with ticketing and merch systems",
        },
        {
          name: "Market Landing Pages",
          quantity: "33 pages",
          description:
            "City-specific Laylo drop pages for every Grey Day market — localized pre-sale access, merch previews, and SMS opt-in tied to each show date",
        },
        {
          name: "On-Site Capture Kit",
          quantity: "33 activations",
          description:
            "QR codes, SMS keyword signage, and merch booth opt-in incentives designed for every venue — capturing attendee data at the point of maximum engagement",
        },
        {
          name: "Lifecycle Campaigns",
          quantity: "99+ sends",
          description:
            "Pre-show hype, day-of push, and post-show exclusive drop sequences for every market — 3+ touchpoints per show, personalized by city and fan segment",
        },
      ],
    },
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Geo-targeted Instagram and Facebook campaigns — ticket sales, merch promotion, and retargeting of engaged fans. Ad spend billed separately at 15% management fee.",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads targeting Grey Day markets — concert hype content, merch drops, and fan capture funnels. Ad spend billed separately at 15% management fee.",
        },
        {
          name: "YouTube Advertising",
          quantity: "6 months",
          description:
            "Pre-roll and discovery campaigns driving ticket urgency and merch awareness. Ad spend billed separately at 15% management fee.",
        },
        {
          name: "Dynamic Budget Allocation",
          quantity: "Ongoing",
          description:
            "TOUR CONTROL-informed media spend — budget shifts dynamically to underperforming markets while scaling back in markets selling organically",
        },
      ],
    },
    {
      category: "Data-Gated Revenue",
      icon: "◇",
      items: [
        {
          name: "Exclusive Merch Drops",
          quantity: "3+ drops",
          description:
            "Tour-exclusive designs available only to SMS/email subscribers — each drop is simultaneously a revenue event and a data capture mechanism",
        },
        {
          name: "Attendee-Only Colorways",
          quantity: "Per show",
          description:
            "Market-specific merch variants unlocked via on-site QR scan and Laylo opt-in — rewarding real fans while building the database",
        },
        {
          name: "Early VIP Access",
          quantity: "Ongoing",
          description:
            "Subscribers get first access to VIP upgrades, meet-and-greet packages, and premium experiences — creating a value exchange that incentivizes opt-in",
        },
      ],
    },
  ],

  deliverablesSubheading:
    "Four workstreams operating in sync — TOUR CONTROL intelligence, fan data capture, paid media, and data-gated revenue — the full infrastructure layer around Grey Day 2026.",

  scope: {
    included: [
      "TOUR CONTROL platform deployment, configuration, and real-time monitoring across all 33 Grey Day 2026 markets",
      "Full Laylo implementation — fan database build, SMS/email capture flows, segmentation, and lifecycle automation",
      "33 market-specific landing pages and on-site data capture kits (QR, SMS keyword, merch booth integration)",
      "Paid media management across Meta, TikTok, and YouTube for ticket sales and merch promotion (ad spend billed separately at 15% management fee)",
      "Data-gated exclusive strategy — tour-only merch drops, attendee-only colorways, and early VIP access architecture",
      "Weekly pacing reports, monthly strategy reviews, and end-of-tour season intelligence report",
      "Post-tour fan database nurture sequences and 2027 Grey Day readiness plan",
    ],
    excluded: [
      "Music production, recording, mixing, or mastering",
      "Tour logistics, booking, routing, or venue coordination",
      "Merch design, manufacturing, or fulfillment (available as add-on — scoped and quoted separately)",
      "PR, press relations, or media outreach",
      "Graphic design, animation, and music video production (available as add-on — scoped and quoted separately)",
      "Legal counsel, contract negotiation, or rights management",
    ],
    subheading:
      "Everything included in this engagement — and where the line sits between CCD's data and marketing mandate and the existing tour and creative operations.",
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "TOUR CONTROL + Data Capture Infrastructure",
        description:
          "Proprietary tour intelligence platform, Laylo fan database build, market landing pages, on-site capture kits, lifecycle campaigns, and segmentation architecture",
        price: 5000,
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Campaign strategy, geo-targeting, creative direction, optimization, and reporting across Meta, TikTok, and YouTube. Ad spend billed separately at 15% management fee.",
        price: 4000,
        recurring: true,
      },
      {
        name: "SMS/Email Lifecycle + Merch Drop Strategy",
        description:
          "Market-by-market lifecycle campaigns, data-gated exclusive drops, post-show sequences, and ongoing fan database nurture and segmentation",
        price: 3500,
        recurring: true,
      },
    ],
    subtotal: 12500,
    setupFee: {
      label: "Setup & Onboarding — WAIVED (Friends & Family)",
      amount: 0,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    total: 75000,
    paymentSchedule: [
      {
        milestone: "Month 1",
        percentage: 16.67,
        amount: 12500,
        due: "Upon approval — June 2026",
      },
      {
        milestone: "Month 2",
        percentage: 16.67,
        amount: 12500,
        due: "July 1, 2026",
      },
      {
        milestone: "Month 3",
        percentage: 16.67,
        amount: 12500,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 4",
        percentage: 16.67,
        amount: 12500,
        due: "September 1, 2026",
      },
      {
        milestone: "Month 5",
        percentage: 16.67,
        amount: 12500,
        due: "October 1, 2026",
      },
      {
        milestone: "Month 6",
        percentage: 16.65,
        amount: 12500,
        due: "November 1, 2026",
      },
    ],
    paymentTerms: "Net 7 from invoice",
    paymentLink: "https://buy.stripe.com/00w5kCdq4dn3bzb2Fja7C07",
  },

  nextSteps: [
    {
      step: 1,
      title: "Review & Reconnect",
      description:
        "Dana and the G59 team review this proposal. Schedule a 30-minute call with Geoff to walk through the TOUR CONTROL platform, data capture strategy, and answer any questions.",
    },
    {
      step: 2,
      title: "Approve & Kick Off",
      description:
        "Sign off on scope and timeline. CCD begins the onboarding sprint — TOUR CONTROL deployment, Laylo setup, and paid media architecture build.",
    },
    {
      step: 3,
      title: "Onboarding Questionnaire",
      description:
        "CCD sends a focused intake covering ticketing platform access, merch system credentials, existing ad accounts, and any historical data — everything needed to wire up the infrastructure.",
    },
    {
      step: 4,
      title: "TOUR CONTROL Goes Live",
      description:
        "Pacing dashboards active across all 33 markets. Laylo capture flows live. Paid media campaigns in market. The data engine is running.",
    },
    {
      step: 5,
      title: "Grey Day 2026 Execution",
      description:
        "Full tour support — real-time market intelligence, lifecycle campaigns firing market by market, on-site data capture at every show, and dynamic media optimization.",
    },
  ],

  cta: {
    headline: "The Machine Is Built — Now Own the Data",
    body: "Grey Day is already the most dominant independent tour in hip-hop. $50M gross. 600K tickets. $30M merch. The only thing missing is the data layer that makes every cycle smarter than the last. CCD builds that layer — and TOUR CONTROL gives your team the real-time intelligence to act on it. Let's talk.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/suicideboys/hero1.png",
    hero2: "/images/suicideboys/hero2.png",
    product: "/images/suicideboys/product.png",
    editorial: "/images/suicideboys/editorial.png",
    texture: "/images/suicideboys/texture.png",
    brutalist: "/images/suicideboys/brutalist.png",
    heroBg: "/images/suicideboys/hero-bg.png",
    hero1Caption: "Tour Data Capture + Revenue Infrastructure",
    ogImage: "/images/suicideboys/og-image.png",
    brutalistCaption: "$UICIDEBOY$ × Crowd Control Digital",
  },
};
