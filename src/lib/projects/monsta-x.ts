import type { ProjectData } from "../project-context";

export const monstaX: ProjectData = {
  accentColor: "#FF3737",

  client: {
    name: "MONSTA X",
    logo: "",
    contactName: "Eshy Gazit",
    contactRole: "Management",
    contactEmail: "eg@eshygazit.com",
    industry: "Music / K-Pop / Touring",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "THE X : DATA ENGINE",
    tagline:
      "10 arenas. 6 months. One system that turns every ticket scan, merch swipe, and fan interaction into an owned audience you can activate forever — powered by TOUR CONTROL, built by the team that does this for K-Pop's biggest tours.",
    type: "Tour Data Capture + Revenue Intelligence",
    startDate: "July 1, 2026",
    endDate: "December 31, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Crowd Control Digital will deploy a full data capture and revenue intelligence layer around THE X : NEXUS North America tour. CCD's proprietary TOUR CONTROL platform delivers real-time ticket pacing intelligence across all 10 markets, while a purpose-built fan data system captures email, SMS, and behavioral data from every touchpoint — ticket purchases, Berriz community interactions, merch transactions, and on-site activations. Paid media campaigns drive ticket velocity and streaming growth in markets that need support. The result: an owned Monbebe database that compounds across every future tour cycle and release, turning THE X : NEXUS into the foundation for a permanent direct-to-fan revenue engine.",
    objectives: [
      "Deploy TOUR CONTROL across all 10 North America markets — real-time ticket pacing dashboards, sell-through prediction, and dynamic media allocation so budget flows to the dates that need it most",
      "Build a first-party fan data system — capturing email, SMS, and behavioral data from ticket buyers, merch customers, VIP attendees, and Berriz-to-Laylo bridge funnels",
      "Launch market-specific lifecycle campaigns — pre-show hype, day-of pushes, post-show exclusive drops — all personalized by city, language, and fan segment",
      "Execute paid media campaigns across Meta, TikTok, and YouTube for ticket sales support, Unfold album streaming growth, and merch promotion",
      "Create data-gated exclusives — tour-only merch, attendee-only photocard drops, early VIP access — turning every exclusive into both a data capture moment and a revenue driver",
    ],
    subtitle:
      "Data capture, real-time tour intelligence, and paid media — built by the agency with more K-Pop tour campaigns than anyone in the game.",
    imageCaption: "Tour Data Capture + Revenue Intelligence",
    stats: [
      {
        value: 10,
        label: "Markets Monitored",
        description:
          "Real-time ticket pacing and sell-through intelligence via TOUR CONTROL across every THE X : NEXUS North America date",
      },
      { value: 50, suffix: "K+", label: "Fan Data Target" },
      { value: 6, label: "Month Campaign" },
      { value: 3, label: "Revenue Streams" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited MONSTA X's full digital ecosystem — website, socials, Berriz community, merch infrastructure, and the competitive K-Pop touring landscape. The findings confirm what the reunion momentum already proves: Monbebe is one of the most loyal fandoms in K-Pop. The opportunity isn't engagement — it's infrastructure. The data layer that captures, segments, and monetizes that loyalty doesn't exist yet.",
    insights: [
      {
        label: "Uncaptured Audience",
        finding:
          "10 arena dates, VIP packages, and a merch store generating transactions — but zero first-party data capture. No email forms, no SMS opt-in, no Laylo integration. Every ticket buyer and merch customer is a ghost after checkout.",
        source: "shop.monstax-us.com audit / VIP Nation analysis",
      },
      {
        label: "Berriz Gap",
        finding:
          "Berriz handles fan community brilliantly — but it's Kakao's platform, not MONSTA X's data. The team can't export lists, run retargeting, or build automated marketing flows from Berriz data. There's no bridge between community engagement and owned fan marketing.",
        source: "Berriz platform analysis",
      },
      {
        label: "Streaming Deficit",
        finding:
          "1.5M Spotify monthly listeners vs. 4.3M for ATEEZ and 8M+ for SEVENTEEN. The streaming story doesn't match MONSTA X's touring power or fandom loyalty — targeted paid media around the Unfold album + tour window can close this gap.",
        source: "Spotify / Chartmetric comparison",
      },
      {
        label: "Reunion Momentum",
        finding:
          "First full-group tour in 4 years since the No Limit Tour in 2022. Seoul KSPO Dome sold 3 nights. Asia dates added cities due to demand. This is peak capture timing — the fandom is re-activated and spending.",
        source: "Tour history / Billboard reporting",
      },
      {
        label: "K-Pop Revenue Benchmark",
        finding:
          "K-Pop concert merch averages $50/head with 50% profit margins. VIP packages account for 30% of total concert revenue. At 10 arena dates, even modest optimization of these touchpoints — plus data capture — represents significant incremental value.",
        source: "atVenu / K-Pop Events Market Report",
      },
    ],
    marketContext:
      "The K-Pop North America touring market has 59+ shows across 37 cities in Fall 2026 — ATEEZ, Stray Kids, SEVENTEEN all competing for the same audience window. MONSTA X's English-language credibility (the only K-Pop act with 3 full English albums) and decade of fandom loyalty are genuine differentiators — but only if the marketing infrastructure exists to activate them. Berriz handles community. TOUR CONTROL + Laylo handles everything else.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Monbebe is a decade-deep, globally distributed fandom that has stayed loyal through military enlistments, label transitions, and industry shifts — and is now fully re-activated for the first complete group tour in four years.",
    demographics:
      "18–28 core, 89.6% female, US is the largest international market. 39.4% college students, 11.1% graduate students. Strong secondary concentration in Southeast Asia (Indonesia, Malaysia, Philippines).",
    psychographics: [
      "Loyalty-driven, not trend-driven — Monbebe ride through enlistments, hiatuses, and industry noise. They don't chase the next group; they invest in this one.",
      "Organized and empowered — fan projects, streaming parties, charitable campaigns, concert chants coordinated across timezones. This fandom wants to be activated, not just entertained.",
      "Value authenticity and emotional vulnerability — MONSTA X's direct fan interaction at concerts and transparent social presence is core to the bond.",
      "Bilingual engagement — the English-language catalog means Western Monbebe engage differently than fans of Korean-only groups. They share lyrics, quote interviews, and recruit casual listeners.",
    ],
    painPoints: [
      "4-year tour gap created pent-up demand with no priority access mechanism for loyal fans — everyone starts at the same Ticketmaster queue",
      "Merch drops sell out with no pre-registration, waitlist, or restock alerts — frustration instead of anticipation",
      "No centralized direct communication channel — fans rely on Berriz (community, not marketing), X/Twitter algorithms, and checking Ticketmaster manually",
      "No recognition gradient for loyalty — a fan who attended 5 tours gets the same experience as a first-timer",
    ],
    quotes: [
      {
        text: "MONSTA X concerts feel like a conversation, not a performance. They actually talk to us.",
        source: "Fan review / Concert recap",
      },
      {
        text: "The energy is insane. They don't hold back and neither does the crowd.",
        source: "Concert review",
      },
      {
        text: "Monbebe is known for organized fan projects, charitable donations in the group's name, and creating a welcoming atmosphere for new fans.",
        source: "Fandom analysis",
      },
    ],
  },

  targets: [
    {
      metric: "Fan Database Size",
      value: "50K+",
      context:
        "Capture email/SMS data from 50,000+ fans across all tour touchpoints — ticket buyers, merch customers, VIP attendees, and digital opt-ins. This becomes the owned audience for every future cycle.",
    },
    {
      metric: "Data Capture Rate",
      value: "35%+",
      context:
        "Target 35% opt-in rate from ticket holders across all 10 markets — industry benchmark for data-gated exclusive incentives at live events.",
    },
    {
      metric: "Incremental Merch Revenue",
      value: "+20%",
      context:
        "Lift per-head merch revenue through pre-registration drops, city-exclusive designs, post-show digital bundles, and VIP upsell funnels vs. baseline tour merch performance.",
    },
    {
      metric: "Spotify Monthly Listeners",
      value: "2.5M+",
      context:
        "Grow from 1.5M to 2.5M+ monthly listeners during the Unfold album + tour window through paid media, playlist strategy, and fan-driven streaming campaigns.",
    },
  ],

  competitive: {
    summary:
      "MONSTA X competes for the same North American K-Pop touring audience as ATEEZ, Stray Kids, and SEVENTEEN — all touring Fall 2026. The difference isn't talent or fandom loyalty. It's marketing infrastructure. Competitors backed by HYBE and JYPE have platform advantages (Weverse, institutional data systems). MONSTA X, operating through Starship/Kakao, needs owned data infrastructure even more — because they can't rely on someone else's ecosystem.",
    competitors: [
      {
        name: "ATEEZ — 4.3M Monthly Listeners",
        strength:
          "Explosive TikTok virality, theatrical stage production, dominant 4th-gen touring act with rapid streaming growth",
        gap: "ATEEZ skews younger and newer. MONSTA X has 10 years of fandom trust, 3 English albums, and a reunion narrative that creates urgency ATEEZ doesn't have.",
      },
      {
        name: "Stray Kids — 10M+ Monthly Listeners",
        strength:
          "JYPE marketing machine, stadium-level production, massive merch operation with tiered VIP membership system",
        gap: "Stray Kids is institutional. MONSTA X can position as intimate, personal, and accessible — but needs the data infrastructure to match JYPE's marketing sophistication.",
      },
      {
        name: "SEVENTEEN — 8M+ Monthly Listeners",
        strength:
          "Self-produced brand credibility, massive Carat fandom, deep Weverse community integration backed by HYBE",
        gap: "SEVENTEEN's HYBE backing gives them Weverse's full data stack. MONSTA X on Berriz (Kakao) doesn't get the same owned data — making a Laylo + TOUR CONTROL build even more critical.",
      },
    ],
  },

  timelineSubheading:
    "A focused 6-month engagement from infrastructure build through full tour execution and post-tour monetization — every phase designed to maximize data capture and incremental revenue during THE X : NEXUS.",
  timelineImageCaption: "6 Months / 6 Phases / 10 Markets",

  timeline: [
    {
      phase: "Infrastructure Build",
      week: "Weeks 1–4",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Deploy TOUR CONTROL platform — ingest ticket pacing data across all 10 North America markets, configure sell-through prediction models and alert thresholds",
        "Build Laylo fan data infrastructure — SMS/email capture flows, segmentation architecture (by market, language, purchase behavior), welcome sequences, and Berriz bridge strategy",
        "Set up paid media architecture — Meta, TikTok, and YouTube ad accounts, pixel/CAPI tracking, conversion events, and seed audiences from Berriz engagement data",
        "Design data-gated exclusive strategy — tour-only merch drops, attendee-only photocard sets, early VIP access tiers tied to email/SMS opt-in",
      ],
    },
    {
      phase: "Pre-Tour Campaigns",
      week: "Weeks 5–8",
      date: "August 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch pre-sale data capture campaigns — Laylo drop pages for each market, SMS keyword campaigns, social-to-list conversion funnels across Instagram and TikTok",
        "Activate paid media for ticket sales — geo-targeted campaigns across Meta and TikTok driving presale and general on-sale traffic to all 10 markets",
        "Begin TOUR CONTROL market monitoring — weekly pacing reports, risk-tier classification, and budget reallocation recommendations for underperforming dates",
        "Execute first data-gated merch drop — exclusive pre-tour photocard set or apparel design available only to SMS/email subscribers",
      ],
    },
    {
      phase: "Tour Ramp-Up",
      week: "Weeks 9–12",
      date: "September 2026",
      status: "upcoming" as const,
      tasks: [
        "Intensify paid media around Unfold album + tour — Spotify listener growth campaigns, playlist pitching support, and streaming-to-ticket conversion funnels",
        "TOUR CONTROL dynamic allocation — shift media budget in real-time based on pacing data. Surge support to markets below 80% sell-through",
        "Launch VIP upsell funnels — targeted campaigns to ticket holders promoting Ultimate VIP Package upgrades and tier conversions",
        "Finalize on-site capture kits for all 10 venues — QR codes, SMS keyword signage, merch booth opt-in incentives, and venue-specific Laylo landing pages",
      ],
    },
    {
      phase: "Tour Execution",
      week: "Weeks 13–16",
      date: "October 2026",
      status: "upcoming" as const,
      tasks: [
        "Run TOUR CONTROL in real-time — daily pacing dashboards, dynamic media shifts to remaining-inventory markets, sell-through velocity alerts",
        "Execute market-by-market lifecycle campaigns — pre-show hype (3 days out), day-of push, post-show exclusive drop (24hr window) for each of the 10 dates",
        "On-site data capture at every venue — QR-to-Laylo, SMS keyword signage, merch booth opt-in, VIP registration data sync",
        "Paid media surge for final ticket push — retargeting engaged non-buyers, lookalike expansion in underperforming markets",
      ],
    },
    {
      phase: "Post-Tour Monetization",
      week: "Weeks 17–20",
      date: "November 2026",
      status: "upcoming" as const,
      tasks: [
        "Full tour data analysis — capture rates by market, fan database composition, revenue attribution across all touchpoints",
        "Launch post-tour merch drops to captured database — tour recap exclusives, city-edition restocks, holiday gift bundles",
        "TOUR CONTROL season report — pacing accuracy audit, media efficiency analysis, market intelligence brief for 2027 tour planning",
        "Activate cross-sell campaigns — tour attendees → album purchasers → Berriz community members → merch subscribers",
      ],
    },
    {
      phase: "Data Activation & Holiday",
      week: "Weeks 21–24",
      date: "December 2026",
      status: "upcoming" as const,
      tasks: [
        "Holiday merch campaign — gift-oriented drops, bundle pricing, and fan-to-fan gifting promotions driven entirely from the captured database",
        "Year-end fan database health report — list size, engagement rates, revenue per subscriber, segment performance analysis",
        "Deliver 2027 readiness plan — pre-sale architecture using the owned database, TOUR CONTROL calibration recommendations, and lifecycle campaign blueprints",
        "Handoff documentation — full platform access, process documentation, and recommended next steps for ongoing fan data activation",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading: "Every deliverable is designed to capture fan data, drive incremental revenue, or provide real-time market intelligence across the THE X : NEXUS tour cycle.",

  deliverables: [
    {
      category: "TOUR CONTROL Platform",
      icon: "●",
      items: [
        {
          name: "TOUR CONTROL Deployment",
          quantity: "10 markets",
          description:
            "CCD's proprietary tour intelligence platform — real-time ticket pacing dashboards, sell-through prediction models, risk-tier market classification, and dynamic media budget recommendations across every THE X : NEXUS North America date",
        },
        {
          name: "Weekly Pacing Reports",
          quantity: "16 reports",
          description:
            "Market-by-market sell-through analysis with trend lines, velocity indicators, and actionable media allocation recommendations — delivered weekly during pre-tour and tour phases",
        },
        {
          name: "Season Intelligence Report",
          quantity: "1",
          description:
            "Comprehensive post-tour analysis — pacing model accuracy audit, market performance rankings, media efficiency metrics, and data-driven planning brief for 2027 touring",
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
            "Full Laylo implementation — fan database architecture, SMS/email capture flows, segmentation schema (market, language, purchase behavior, VIP tier), welcome sequences, and Berriz-to-Laylo bridge strategy",
        },
        {
          name: "Market Landing Pages",
          quantity: "10 pages",
          description:
            "City-specific Laylo drop pages for every North America date — localized pre-sale access, merch previews, and SMS/email opt-in tied to each show",
        },
        {
          name: "On-Site Capture Kit",
          quantity: "10 activations",
          description:
            "QR codes, SMS keyword signage, and merch booth opt-in incentives designed for every venue — capturing attendee data at the point of maximum engagement",
        },
        {
          name: "Lifecycle Campaigns",
          quantity: "30+ sends",
          description:
            "Pre-show hype, day-of push, and post-show exclusive drop sequences for every market — 3+ touchpoints per show, personalized by city and fan segment via Laylo",
        },
      ],
    },
    {
      category: "Paid Media & Growth",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Geo-targeted Instagram and Facebook campaigns — ticket sales, merch promotion, Unfold album streaming, and retargeting of engaged fans across all 10 markets",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads targeting THE X : NEXUS markets — concert hype content, merch drops, and fan capture funnels leveraging MONSTA X's English-language content advantage",
        },
        {
          name: "YouTube Campaigns",
          quantity: "6 months",
          description:
            "Pre-roll and discovery ads targeting K-Pop audiences in tour markets — Unfold album promotion, tour trailer distribution, and subscriber growth campaigns",
        },
        {
          name: "Spotify Growth Strategy",
          quantity: "6 months",
          description:
            "Paid listener acquisition campaigns, playlist pitching coordination, and market-by-market streaming pushes to close the gap from 1.5M to 2.5M+ monthly listeners during the tour window",
        },
      ],
    },
    {
      category: "Revenue Optimization",
      icon: "■",
      items: [
        {
          name: "VIP Upsell Funnels",
          quantity: "10 markets",
          description:
            "Targeted campaigns to standard ticket holders promoting Ultimate VIP Package upgrades — soundcheck access, group photos, and exclusive gifts as conversion incentives",
        },
        {
          name: "Data-Gated Merch Drops",
          quantity: "4 drops",
          description:
            "Exclusive merch releases available only to email/SMS subscribers — pre-tour, mid-tour, post-tour, and holiday campaign drops with city-edition variants",
        },
        {
          name: "Post-Show Digital Bundles",
          quantity: "10 bundles",
          description:
            "City-specific digital content packages (exclusive photos, behind-the-scenes footage, setlist playlists) delivered to attendees post-show via Laylo — each gated behind data opt-in",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in this engagement — and where the boundaries are. This is a focused data capture and revenue intelligence scope built around THE X : NEXUS tour cycle.",
    included: [
      "TOUR CONTROL platform deployment, configuration, and ongoing monitoring across all 10 North America markets",
      "Laylo fan data infrastructure build — SMS/email capture, segmentation, automation flows, and Berriz bridge strategy",
      "Paid media strategy, creative direction, and campaign management across Meta, TikTok, and YouTube",
      "Market-by-market lifecycle campaigns — pre-show, day-of, and post-show sequences for all 10 dates",
      "On-site data capture kit design and production for all 10 venues (QR codes, signage, opt-in incentives)",
      "VIP upsell funnel strategy and execution — Ultimate VIP Package upgrade campaigns",
      "Post-tour data analysis, season intelligence report, and 2027 readiness plan",
      "Weekly strategy calls and monthly performance reporting throughout the 6-month engagement",
    ],
    excluded: [
      "Graphic design, animation, and music video production (available as add-on — scoped and quoted separately)",
      "Social media management and day-to-day content posting (available as add-on)",
      "Berriz community management — CCD builds the bridge between Berriz and Laylo, but ongoing Berriz content and engagement remains with the existing team",
      "Physical merch production and fulfillment — CCD provides the drop strategy, data capture integration, and marketing. Manufacturing and shipping is handled by existing merch partners",
      "Ad spend — media budgets are billed directly to platforms. CCD manages campaigns and optimization included in the retainer",
      "Website redesign or e-commerce platform migration (available as add-on — scoped and quoted separately)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Tour Marketing Strategy & Execution",
        description:
          "End-to-end campaign strategy, market-by-market lifecycle campaigns, VIP upsell funnels, and data-gated merch drop planning across all 10 THE X : NEXUS dates",
        price: 4000,
        recurring: true,
      },
      {
        name: "TOUR CONTROL Platform",
        description:
          "CCD's proprietary tour intelligence system — real-time ticket pacing, sell-through prediction, risk-tier classification, and dynamic media allocation across all markets",
        price: 3000,
        recurring: true,
      },
      {
        name: "Fan Data Infrastructure (Laylo)",
        description:
          "Full Laylo implementation, SMS/email capture flows, segmentation architecture, automation sequences, Berriz bridge strategy, and on-site capture kit design",
        price: 2500,
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Campaign management and optimization across Meta, TikTok, YouTube, and Spotify growth — ad spend billed separately to platforms",
        price: 2500,
        recurring: true,
      },
    ],
    subtotal: 12000,
    setupFee: {
      label: "Onboarding & Platform Build",
      amount: 5000,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    total: 77000,
    paymentSchedule: [
      {
        milestone: "Month 1 (July — includes setup fee)",
        percentage: 22,
        amount: 17000,
        due: "Upon approval",
      },
      {
        milestone: "Month 2 (August)",
        percentage: 15.6,
        amount: 12000,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 3 (September)",
        percentage: 15.6,
        amount: 12000,
        due: "September 1, 2026",
      },
      {
        milestone: "Month 4 (October)",
        percentage: 15.6,
        amount: 12000,
        due: "October 1, 2026",
      },
      {
        milestone: "Month 5 (November)",
        percentage: 15.6,
        amount: 12000,
        due: "November 1, 2026",
      },
      {
        milestone: "Month 6 (December)",
        percentage: 15.6,
        amount: 12000,
        due: "December 1, 2026",
      },
    ],
    paymentTerms: "7 days from invoice",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve & Sign",
      description:
        "Review the proposal, ask any questions, and sign off. We'll send a formal agreement and invoice for the first month + setup fee.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake covering current ad accounts, merch platform access, Berriz admin credentials, ticketing data feeds, and team contact info.",
    },
    {
      step: 3,
      title: "TOUR CONTROL Activation",
      description:
        "We ingest ticket pacing data from the promoter and configure TOUR CONTROL for all 10 North America markets within the first week.",
    },
    {
      step: 4,
      title: "Laylo Build & Data Architecture",
      description:
        "Full Laylo setup, segmentation schema, capture flows, and Berriz bridge strategy — live and capturing fans within 2 weeks of kickoff.",
    },
    {
      step: 5,
      title: "Campaigns Go Live",
      description:
        "Pre-tour paid media and data capture campaigns launch by Week 5. From here, TOUR CONTROL runs real-time and every touchpoint captures data.",
    },
  ],

  cta: {
    headline: "The boys are back. Let's make sure every Monbebe counts.",
    body: "THE X : NEXUS is the biggest MONSTA X tour moment in four years. Crowd Control Digital has the K-Pop expertise, the proprietary tour intelligence platform, and the data capture infrastructure to turn 10 arena shows into a permanent fan engine. Let's build it.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/monsta-x/hero1.png",
    hero2: "/images/monsta-x/hero2.png",
    product: "/images/monsta-x/product.png",
    editorial: "/images/monsta-x/editorial.png",
    texture: "/images/monsta-x/texture.png",
    brutalist: "/images/monsta-x/brutalist.png",
    hero1Caption: "Tour Data Capture + Revenue Intelligence",
    brutalistCaption: "MONSTA X × Crowd Control Digital",
    ogImage: "/images/monsta-x/og-image.png",
  },
};
