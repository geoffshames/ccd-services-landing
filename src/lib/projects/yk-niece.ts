import type { ProjectData } from "../project-context";

export const ykNiece: ProjectData = {
  accentColor: "#FF2D78",

  client: {
    name: "YK Niece",
    logo: "",
    contactName: "YK Niece Management",
    contactRole: "Management",
    contactEmail: "",
    industry: "Music / Hip-Hop",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "The Breakout Blueprint",
    tagline:
      "A Billboard Hot 100 hit, Metro Boomin co-signs, and a debut album on deck — the viral moments are here. Now build the machine that makes sure none of them go to waste.",
    type: "Full-Service Digital Marketing",
    startDate: "May 1, 2026",
    endDate: "October 31, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Crowd Control Digital will build and operate the full digital marketing infrastructure for YK Niece's debut album cycle and 2026 tour run. From paid media and creator marketing to email/SMS list building and merch reactivation, CCD creates the system that converts viral moments into measurable growth — streams, ticket sales, merch revenue, and a fanbase you actually own. YK Niece has the cultural momentum. What's missing is the engine that captures it, amplifies it, and compounds it over the most important six months of her career so far.",
    objectives: [
      "Build a paid media machine across Meta, TikTok, and YouTube that amplifies every release, tour date, and cultural moment — targeting the 5M+ Spotify listener threshold by end of engagement",
      "Launch email and SMS infrastructure from zero to 25K+ subscribers, creating an owned audience channel that doesn't depend on algorithms or platform reach",
      "Execute 3+ creator marketing waves seeding music and content across TikTok and Instagram, generating 100+ pieces of UGC and influencer content",
      "Reactivate and optimize the merch/e-commerce ecosystem with a drop strategy timed to album milestones and tour dates",
      "Deliver geo-targeted paid campaigns for every 2026 tour market — driving ticket sales and local awareness in Atlanta, Myrtle Beach, Birmingham, and New Orleans",
    ],
    subtitle:
      "Six months of full-stack digital marketing built around the debut album and 2026 tour — paid media, creator campaigns, owned audience, and merch infrastructure.",
    imageCaption: "Full-Service Digital Marketing",
    stats: [
      {
        value: 100,
        suffix: "+",
        label: "Creator Content Pieces",
        description:
          "UGC and influencer content seeded across TikTok, Instagram, and YouTube over the campaign",
      },
      { value: 5, suffix: "M+", label: "Target Listeners" },
      { value: 25, suffix: "K+", label: "Subscribers Built" },
      { value: 6, label: "Month Campaign" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited YK Niece's digital ecosystem, competitive landscape, and market position. The findings confirm what the numbers already suggest — this is an artist with elite-tier momentum and entry-level infrastructure.",
    insights: [
      {
        label: "Infrastructure Gap",
        finding:
          "Despite Motown Records backing and co-signs from Metro Boomin, Quavo, Lizzo, Latto, and Sexyy Red — YK Niece has zero paid media campaigns running, no email or SMS list, and a dormant merch store. The gap between cultural capital and marketing infrastructure is massive.",
        source: "Digital audit / Meta Ad Library",
      },
      {
        label: "Viral Without a Net",
        finding:
          "WHIM WHAMIEE hit #51 on the Billboard Hot 100 with zero paid amplification. Every stream, every chart position was organic. A paid media layer on that kind of moment could have 3–5× the reach and sustained the chart run weeks longer.",
        source: "Billboard / Meta Ad Library audit",
      },
      {
        label: "Remix Machine",
        finding:
          "Lizzo, Latto, and Sexyy Red all jumped on WHIM WHAMIEE remixes — that's mainstream crossover validation that most artists at this stage would kill for. Each remix was a marketing moment that went uncaptured by paid or email campaigns.",
        source: "Discography analysis / The FADER",
      },
      {
        label: "Tour Without Targeting",
        finding:
          "YK Niece is headlining real venues in 2026 — Buckhead Theatre, House of Blues, Legacy Arena, Smoothie King Center — without geo-targeted paid campaigns in any of those markets. Ticket sales are running on organic reach alone.",
        source: "Ticketmaster / paid media audit",
      },
      {
        label: "The Album Window",
        finding:
          "The debut album dropping in 2026 is a once-in-a-career moment. The 8–12 weeks before and after release are the highest-ROI period for marketing infrastructure investment — and that window is approaching fast.",
        source: "Industry benchmarking / AJC",
      },
    ],
    marketContext:
      "The female rap market is experiencing unprecedented commercial momentum — but it's also more crowded than ever. Artists who broke through in 2024–25 and didn't invest in digital marketing infrastructure are already losing ground to newer acts with better teams. YK Niece's Motown backing and Metro Boomin co-signs put her in a tier that demands professional marketing infrastructure. The album window makes the timing urgent.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "YK Niece's audience is TikTok-native, personality-driven, and fiercely loyal — but currently has no owned channel to deepen the connection beyond algorithm-dependent social feeds.",
    demographics:
      "Core audience is 16–28, predominantly female, concentrated in the South with growing national reach.",
    demographicCards: [
      {
        label: "Age Range",
        value: "16–28 core",
        detail: "18–22 peak engagement",
      },
      {
        label: "Gender",
        value: "78% female",
        detail: "Strong female skew across platforms",
      },
      {
        label: "Geography",
        value: "Southern US",
        detail: "Atlanta, Houston, Charlotte, Memphis",
      },
      {
        label: "Behavior",
        value: "Mobile-first",
        detail: "2–4 hrs daily on TikTok & Instagram",
      },
    ],
    personas: [
      {
        name: "The Day One",
        ageRange: "18–24",
        description:
          "Found YK Niece before WHIM WHAMIEE blew up. Follows every post, comments first, and treats her success like a personal win. Wants merch, early access, and a way to prove they were there from the start.",
        traits: ["Loyal Commenter", "Merch Buyer", "Story Sharer", "Street Team Energy"],
      },
      {
        name: "The TikTok Discoverer",
        ageRange: "16–22",
        description:
          "Heard WHIM WHAMIEE as a TikTok sound and went down the rabbit hole. Engages through duets, dance challenges, and sound reuse. Hasn't explored the full catalog yet — needs a content funnel to convert from casual listener to real fan.",
        traits: ["Sound-First", "Algorithm-Fed", "Short Attention Span", "High Share Rate"],
      },
      {
        name: "The Culture Tap-In",
        ageRange: "22–28",
        description:
          "Plugged into the broader female rap ecosystem — follows Sexyy Red, Latto, GloRilla. Discovered YK Niece through the remix wave and co-sign network. Values authenticity, fashion, and personality over pure lyrics.",
        traits: ["Multi-Artist", "Fashion-Conscious", "Playlist Curator", "Concert-Goer"],
      },
    ],
    psychographics: [
      "Authenticity over polish — they follow artists who feel real, raw, and unfiltered. YK Niece's personality-driven content resonates because it doesn't feel manufactured",
      "TikTok-first discovery — they find music through viral moments, sound trends, and creator content. A song doesn't exist until it's a TikTok sound",
      "Visual identity matters as much as the music — aesthetic, fashion, and brand presentation are table stakes for their loyalty",
      "Community over consumption — they want to feel like they discovered her, championed her, and are part of the come-up story",
    ],
    painPoints: [
      "Fans want more frequent releases and consistent content — the gaps between drops create anxiety about momentum stalling",
      "No merch to buy — the store exists but there's nothing compelling or timed to moments that drive impulse purchases",
      "YouTube is underutilized — fans want music videos, vlogs, behind-the-scenes content, and long-form personality moments",
      "No direct communication channel — fans rely entirely on social algorithms to stay connected, which means they miss announcements and drops",
    ],
    purchaseTriggers: [
      "Viral TikTok moments that create urgency and FOMO — the remix wave proved her music moves when the culture pushes it",
      "Limited drops and exclusivity — merch, early access, or behind-the-scenes content gated by email signup or purchase",
      "Album announcement + pre-save campaigns — the debut album is the single highest-conversion moment of her career so far",
      "Tour ticket bundles with merch — concert-goers are the highest-LTV fans and will buy if given the right package",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "Primary discovery and engagement platform. 721K followers. Content performs best when personality-driven and raw — not overly produced. Sound reuse and duets drive organic reach.",
      },
      {
        name: "Instagram",
        description:
          "537K followers. Identity and lifestyle hub — fits, behind-the-scenes, personal moments. Reels underutilized relative to feed posts. Stories engagement is high but inconsistent.",
      },
      {
        name: "Spotify",
        description:
          "3.1M monthly listeners. Streaming is the core metric for label and industry perception. Playlist placement and algorithmic radio are the primary drivers — paid campaigns can accelerate both.",
      },
      {
        name: "YouTube",
        description:
          "Channel exists (@YKDaTrillest) but underutilized. Fans actively search for music videos and personality content here. Massive discovery opportunity through Shorts and long-form.",
      },
      {
        name: "Twitter / X",
        description:
          "Lower priority but important for real-time cultural conversation, album rollout discourse, and journalist/tastemaker engagement during release windows.",
      },
    ],
    quotes: [
      {
        text: "She's so underrated, her flow is crazy but she needs to drop more consistently",
        source: "Reddit",
      },
      {
        text: "WHIM WHAMIEE was everywhere but then she just went quiet — we need the album",
        source: "TikTok comments",
      },
      {
        text: "Where's the merch? I would buy everything if she actually dropped something",
        source: "Instagram comments",
      },
    ],
  },

  targets: [
    {
      metric: "Spotify Monthly Listeners",
      value: "5M+",
      context:
        "From 3.1M to 5M+ — driven by paid amplification of the album release, playlist pitching support via paid discovery campaigns, and sustained creator marketing that keeps her music in rotation across TikTok and Instagram.",
    },
    {
      metric: "Email & SMS List",
      value: "25K+",
      context:
        "Built from zero through lead magnets (early access, exclusive content), merch purchase capture, paid lead generation campaigns, and tour opt-ins. 25K is the threshold for meaningful direct-to-fan monetization.",
    },
    {
      metric: "Paid Media ROAS",
      value: "4×+",
      context:
        "Industry benchmark for music marketing on Meta and TikTok. Measured across stream-equivalent value, ticket sales attribution, and merch revenue from paid traffic.",
    },
    {
      metric: "Creator Content Pieces",
      value: "100+",
      context:
        "UGC and influencer content seeded across TikTok and Instagram through 3+ creator waves. Each wave targets different audience segments — music, lifestyle, fashion, and dance creators.",
    },
  ],

  competitive: {
    summary:
      "The rising female rap space is increasingly competitive, with artists at YK Niece's streaming tier rapidly professionalizing their digital marketing. The window to build infrastructure around her momentum is narrowing.",
    competitors: [
      {
        name: "Anycia",
        gap: "Anycia has deeper discography and more established marketing infrastructure, but YK Niece has higher streaming velocity and bigger co-signs (Metro Boomin, Lizzo). CCD closes the infrastructure gap while the momentum advantage holds.",
        strength:
          "Consistent release cadence with marketing support behind each drop",
      },
      {
        name: "PLUTO",
        gap: "Similar streaming tier and TikTok presence, but PLUTO has a stronger YouTube strategy and more structured content calendar. YK Niece's cultural moment is bigger — she needs the system to sustain it.",
        strength: "Active YouTube presence with regular music video releases",
      },
      {
        name: "BunnaB",
        gap: "Comparable metrics but BunnaB maintains a more consistent release strategy with marketing support. YK Niece's peak moments are higher, but the valleys between releases are deeper.",
        strength:
          "Steady content output and structured rollout cadence between releases",
      },
      {
        name: "Bankroll Ni",
        gap: "Earlier career stage but building digital infrastructure faster. If YK Niece doesn't invest now, artists like Bankroll Ni will outpace her despite having less cultural capital.",
        strength:
          "Early investment in digital marketing infrastructure and fan community building",
      },
    ],
  },

  timelineHeading: "Campaign Roadmap",
  timelineSubheading:
    "A focused 6-month engagement across three phases — from infrastructure build-out through album launch and tour amplification — designed to capture every high-value moment in YK Niece's breakout year.",
  timelineImageCaption: "6 Months / 3 Phases / 4 Workstreams",

  timeline: [
    {
      phase: "Foundation & Infrastructure",
      week: "Weeks 1–4",
      date: "May 2026",
      status: "upcoming" as const,
      tasks: [
        "Full digital ecosystem audit — social, streaming, merch, YouTube, competitive benchmarking",
        "Paid media architecture — pixel installation, audience building, campaign structure across Meta, TikTok, and YouTube",
        "Email/SMS platform setup (Klaviyo) — list architecture, welcome flows, segmentation strategy",
        "Social strategy development — content pillars, posting cadence, platform-specific optimization plan",
        "Creator marketing shortlist — identify and vet 50+ creators across music, lifestyle, fashion, and dance verticals",
        "Merch store audit and optimization — product strategy, drop calendar, e-commerce UX improvements",
      ],
    },
    {
      phase: "Album Pre-Release Engine",
      week: "Weeks 5–12",
      date: "Jun – Jul 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch paid media campaigns — awareness and engagement across Meta, TikTok, and YouTube at $3–5K/mo spend",
        "Execute first creator wave — seed singles and pre-release content to 30+ creators",
        "Email/SMS list building — paid lead gen campaigns, merch incentive captures, landing page optimization",
        "Content calendar execution — daily social management, platform-specific content, engagement optimization",
        "First merch drop — timed to single release or album announcement, integrated with email/SMS and paid campaigns",
        "YouTube optimization — channel audit, metadata strategy, thumbnail testing, content recommendations",
        "Geo-targeted tour campaigns — early awareness builds in Atlanta, Myrtle Beach, Birmingham, New Orleans",
      ],
    },
    {
      phase: "Album Launch & Tour Amplification",
      week: "Weeks 13–24",
      date: "Aug – Oct 2026",
      status: "upcoming" as const,
      tasks: [
        "Full-throttle album release campaign — surge paid spend, retargeting, lookalike audiences at peak momentum",
        "Second and third creator waves — album tracks seeded to 70+ creators across TikTok and Instagram",
        "Tour market geo-targeting — paid campaigns in each city 4–6 weeks before show dates, ticket sale retargeting",
        "Album merch drop — coordinated release with email/SMS blasts, paid promotion, and creator seeding",
        "Retargeting and retention — email/SMS nurture sequences, Spotify retargeting, abandoned cart recovery on merch",
        "Monthly performance reporting and strategy optimization — pivot budget allocation based on what's converting",
        "End-of-engagement impact report — full performance analysis across all workstreams with forward recommendations",
      ],
      ongoing: true,
    },
  ],

  deliverables: [
    {
      category: "Paid Media",
      icon: "●",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Instagram and Facebook campaigns — awareness, engagement, stream conversion, ticket sales, and merch retargeting across the album and tour cycle",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads campaigns targeting music discovery, sound usage, and creator amplification — the platform where YK Niece's audience lives",
        },
        {
          name: "YouTube Advertising",
          quantity: "6 months",
          description:
            "Pre-roll and discovery campaigns driving music video views, channel growth, and subscriber acquisition",
        },
        {
          name: "Retargeting & Lookalikes",
          quantity: "Ongoing",
          description:
            "Cross-platform retargeting of engaged users, website visitors, and email subscribers — plus lookalike audiences built from highest-value fan segments",
        },
      ],
    },
    {
      category: "Social Strategy & Content",
      icon: "▶",
      items: [
        {
          name: "Social Strategy",
          quantity: "1",
          description:
            "Comprehensive platform strategy — content pillars, posting cadence, engagement tactics, and growth levers for Instagram, TikTok, YouTube, and X",
        },
        {
          name: "Content Calendar",
          quantity: "Monthly",
          description:
            "Strategic content planning aligned to album milestones, tour dates, and cultural moments — with platform-specific formats and copy",
        },
        {
          name: "Platform Optimization",
          quantity: "Ongoing",
          description:
            "Profile optimization, bio/link strategy, highlight/story architecture, and YouTube metadata/thumbnail testing",
        },
        {
          name: "Performance Reporting",
          quantity: "24 reports",
          description:
            "Weekly performance snapshots and monthly deep-dive reports across all platforms with actionable optimization recommendations",
        },
      ],
    },
    {
      category: "Creator Marketing",
      icon: "◆",
      items: [
        {
          name: "Creator Campaign Strategy",
          quantity: "1",
          description:
            "End-to-end influencer strategy — creator identification, vetting, outreach, briefing, and performance tracking across music, lifestyle, fashion, and dance verticals",
        },
        {
          name: "Influencer Seeding Waves",
          quantity: "3+",
          description:
            "Coordinated creator campaigns timed to singles, album release, and tour dates — each wave targeting 30+ creators with tailored briefs",
        },
        {
          name: "UGC Content Library",
          quantity: "100+ pieces",
          description:
            "Curated library of user-generated and influencer content repurposed for paid media, social, and marketing channels",
        },
        {
          name: "Viral Moment Amplification",
          quantity: "Ongoing",
          description:
            "Real-time monitoring and rapid-response creator activations when organic moments spike — turning virality into sustained campaigns",
        },
      ],
    },
    {
      category: "Email/SMS & E-Commerce",
      icon: "△",
      items: [
        {
          name: "Email/SMS Platform Setup",
          quantity: "1",
          description:
            "Full Klaviyo implementation — list architecture, segmentation, welcome flow, abandoned cart flow, and integration with merch store and landing pages",
        },
        {
          name: "Campaign Sends",
          quantity: "8+/mo",
          description:
            "Release announcements, tour updates, merch drops, exclusive content, and re-engagement campaigns — email and SMS coordinated",
        },
        {
          name: "Merch Drop Strategy",
          quantity: "3+ drops",
          description:
            "Timed product releases coordinated with album milestones and tour dates — hype sequences, limited editions, and post-drop retargeting",
        },
        {
          name: "E-Commerce Optimization",
          quantity: "Ongoing",
          description:
            "Store UX improvements, conversion rate optimization, upsell/cross-sell strategy, and integration with email/SMS and paid media funnels",
        },
      ],
    },
  ],

  deliverablesSubheading:
    "Four workstreams operating in sync — paid media, social strategy, creator marketing, and owned audience infrastructure — everything needed to convert a breakout moment into a sustainable career engine.",

  scope: {
    included: [
      "Full-service paid media management across Meta, TikTok, and YouTube for the 6-month engagement",
      "Social media strategy development and content calendar planning across all active platforms",
      "Creator marketing — identification, outreach, campaign management, and performance tracking",
      "Email/SMS platform setup (Klaviyo), list building, automation flows, and campaign sends",
      "Merch store optimization, drop strategy planning, and e-commerce integration",
      "Geo-targeted tour marketing campaigns for all confirmed 2026 dates",
      "Weekly performance snapshots and monthly deep-dive reporting with optimization recommendations",
      "Onboarding audit — full digital ecosystem assessment and competitive benchmarking",
    ],
    excluded: [
      "Music production, recording, mixing, or mastering",
      "PR, press relations, or media outreach",
      "Tour logistics, booking, or venue coordination",
      "Graphic design, animation, and music video production (available as add-on — scoped and quoted separately)",
      "Legal counsel, contract negotiation, or rights management",
    ],
    subheading:
      "Everything included in this engagement — and where the boundaries are between CCD's marketing mandate and the creative and business operations workstreams.",
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Paid Media Management",
        description:
          "Campaign strategy, audience targeting, creative direction, optimization, and reporting across Meta, TikTok, and YouTube. Ad spend billed separately at 15% management fee.",
        price: 3500,
        recurring: true,
      },
      {
        name: "Social Strategy & Content",
        description:
          "Platform strategy, content calendar, optimization, and weekly/monthly performance reporting",
        price: 2500,
        recurring: true,
      },
      {
        name: "Creator Marketing",
        description:
          "Influencer identification, outreach, campaign management, UGC curation, and viral moment amplification. Creator fees billed separately at 15% management fee.",
        price: 2500,
        recurring: true,
      },
      {
        name: "Email/SMS & E-Commerce",
        description:
          "Klaviyo setup, list building, campaign sends, merch drop strategy, and store optimization",
        price: 1500,
        recurring: true,
      },
    ],
    subtotal: 10000,
    setupFee: {
      label: "Onboarding & Discovery Sprint",
      amount: 2500,
    },
    mediaBudget: {
      label: "Recommended Media Budget",
      amount: 4000,
      note: "Recommended ad spend across Meta, TikTok, and YouTube — billed to platforms + 15% management fee. Scales up during album release window.",
    },
    discount: {
      label: "6-Month Commitment",
      percentage: 0,
      amount: 0,
    },
    total: 62500,
    paymentSchedule: [
      {
        milestone: "Month 1 + Setup",
        percentage: 20,
        amount: 12500,
        due: "Upon approval — May 2026",
      },
      {
        milestone: "Month 2",
        percentage: 16,
        amount: 10000,
        due: "June 1, 2026",
      },
      {
        milestone: "Month 3",
        percentage: 16,
        amount: 10000,
        due: "July 1, 2026",
      },
      {
        milestone: "Month 4",
        percentage: 16,
        amount: 10000,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 5",
        percentage: 16,
        amount: 10000,
        due: "September 1, 2026",
      },
      {
        milestone: "Month 6",
        percentage: 16,
        amount: 10000,
        due: "October 1, 2026",
      },
    ],
    paymentTerms: "Net 7 from invoice",
    paymentLink: "https://buy.stripe.com/28EaEWadS82Jbzb6Vza7C05",
  },

  nextSteps: [
    {
      step: 1,
      title: "Review & Align",
      description:
        "Management reviews this proposal and schedules a 30-minute strategy call with the CCD team to discuss scope, timing, and priorities.",
    },
    {
      step: 2,
      title: "Kickoff Call",
      description:
        "Strategy alignment session with CCD — we walk through the audit findings, confirm the album timeline, and lock the campaign calendar.",
    },
    {
      step: 3,
      title: "Onboarding Sprint",
      description:
        "One-week intensive — full digital audit, pixel and tracking setup, Klaviyo implementation, paid media architecture, and creator shortlisting.",
    },
    {
      step: 4,
      title: "Campaigns Go Live",
      description:
        "Paid media, social strategy, and creator marketing campaigns launch in market. Email/SMS flows begin capturing and nurturing the audience.",
    },
    {
      step: 5,
      title: "Monthly Optimization",
      description:
        "Ongoing performance reviews, budget reallocation, and strategy pivots — plus onboarding questionnaire for deeper platform access and creative assets.",
    },
  ],

  cta: {
    headline: "The Moment Is Now — Don't Let It Pass",
    body: "A Billboard Hot 100 hit. Metro Boomin and Quavo on the phone. Lizzo, Latto, and Sexyy Red remixing your record. A debut album and a headline tour on deck. This is the year everything compounds — or the year it slips. CCD builds the digital infrastructure that makes sure every stream, every ticket, and every fan counts. We're ready when you are.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/yk-niece/hero1.png",
    hero2: "/images/yk-niece/hero2.png",
    product: "/images/yk-niece/product.png",
    editorial: "/images/yk-niece/editorial.png",
    texture: "/images/yk-niece/texture.png",
    brutalist: "/images/yk-niece/brutalist.png",
    heroBg: "/images/yk-niece/hero-bg.png",
    ogImage: "/images/yk-niece/og-image.png",
    hero1Caption: "Full-Service Digital Marketing",
    brutalistCaption: "YK Niece × Crowd Control Digital",
  },
};
