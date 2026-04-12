import type { ProjectData } from "../project-context";

export const littleTokyoReborn: ProjectData = {
  accentColor: "#E63946",

  client: {
    name: "Little Tokyo",
    logo: "",
    contactName: "TBD",
    contactRole: "TBD",
    contactEmail: "TBD",
    industry: "Cultural District / Municipal / Public Art",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Little Tokyo Reborn",
    tagline: "The first artist-designed cultural district identity in the United States — VERDY reimagines the streetscape of America's most iconic Japantown.",
    type: "Full-Service Marketing + Creative Campaign",
    startDate: "June 1, 2026",
    endDate: "May 31, 2027",
    duration: "12 Months",
    status: "Awaiting Approval" as const,
  },
  overview: {
    heading: "The Vision",
    summary: "Crowd Control Digital will lead the full-service marketing campaign for Little Tokyo Reborn — the landmark collaboration between the Little Tokyo Community Council and globally celebrated Japanese artist VERDY to redesign the neighborhood's entire municipal infrastructure. From light poles and crosswalks to street signs and wayfinding, VERDY's bold graphic language will transform Little Tokyo into a living canvas that bridges 130 years of Japanese American heritage with the energy of contemporary street culture. CCD will orchestrate the strategy, creative production, social media, PR, paid media, event marketing, and community engagement to make this the most talked-about cultural initiative in Los Angeles.",
    objectives: [
      "Position Little Tokyo Reborn as a landmark cultural moment — the first artist-designed district identity in the US — generating national and international press coverage",
      "Drive a measurable increase in foot traffic to Little Tokyo's 400+ small businesses through sustained digital marketing, paid media, and event programming",
      "Build a world-class social media and content engine that captures VERDY's 815K+ audience and the streetwear/design community's attention",
      "Create an earned media flywheel — PR strategy targeting Hypebeast, Complex, Highsnobiety, LA Times, and national outlets to sustain coverage across the 12-month rollout",
      "Launch an unveiling event that becomes a cultural tentpole alongside Nisei Week and positions Little Tokyo as a must-visit destination year-round"
    ],
    subtitle: "A 12-month full-service campaign to launch, amplify, and sustain the cultural transformation of America's most iconic Japantown.",
    imageCaption: "Full-Service Marketing + Creative Campaign",
    stats: [
      { value: 12, label: "Month Campaign", description: "Full-service marketing from pre-launch through sustained growth" },
      { value: 400, suffix: "+", label: "Businesses Supported" },
      { value: 50, suffix: "M+", label: "Target Impressions" }
    ],
  },

  discovery: {
    heading: "What We Uncovered",
    summary: "Before proposing a single deliverable, we conducted deep research into Little Tokyo's digital presence, competitive landscape, audience behavior, and the cultural moment this project sits within. Here's what we found.",
    insights: [
      {
        label: "Cultural Emergency",
        finding: "Little Tokyo was named one of America's 11 Most Endangered Places in 2024. Over 50 legacy businesses have closed in 15 years due to gentrification — this project isn't just art, it's a cultural defense strategy.",
        source: "National Trust for Historic Preservation"
      },
      {
        label: "Audience Gap",
        finding: "LTCC's Instagram (@la_littletokyo) has only 6,636 followers and 157 posts. Meanwhile, VERDY commands 815K followers and the attention of the global streetwear press. This collaboration bridges a massive reach gap.",
        source: "Social media audit"
      },
      {
        label: "No Precedent",
        finding: "No cultural district in the US has ever commissioned a globally recognized streetwear artist to redesign its entire municipal infrastructure. Comparable projects (Long Beach crosswalks, St. Louis banners) used local artists — this is a league above.",
        source: "Competitive landscape analysis"
      },
      {
        label: "Built-In Press Machine",
        finding: "VERDY's recent partnerships (GUESS JEANS, HUMAN MADE, ComplexCon, Coachella) consistently generate coverage in Hypebeast, Complex, WWD, and Highsnobiety. This project will trigger the same press ecosystem — organically.",
        source: "VERDY media coverage audit"
      },
      {
        label: "Community-Owned Momentum",
        finding: "Little Tokyo's Community Impact Fund raised $1M+ and purchased its first building in 2025. The CORE coalition has secured $5.5M to buy five commercial buildings. This project arrives at a moment of unprecedented community agency.",
        source: "Brookings Institute / LA Public Press"
      }
    ],
    marketContext: "With Little Tokyo's endangered designation, VERDY's rising global profile (Creative Partner of GUESS JEANS as of March 2025), and Los Angeles hosting the 2028 Olympics, the window to position this neighborhood as a world-class cultural destination has never been more open — or more urgent."
  },

  audience: {
    heading: "Three Audiences, One District",
    summary: "This campaign speaks to three overlapping audiences who will each amplify the project in different ways — the community, the culture, and the curious.",
    demographics: "Japanese American community (110K+ in greater LA), streetwear and design culture enthusiasts (18-35, urban, global), and LA visitors and food/culture seekers drawn to Little Tokyo's 400+ businesses and annual festivals.",
    psychographics: [
      "Cultural authenticity over corporate polish — this audience values what's real, heritage-rooted, and community-driven",
      "Design literacy — they notice details, appreciate craft, and share things that are visually exceptional",
      "Participation over consumption — they want to be part of the story, not just observe it",
      "Heritage as future — they see preservation and innovation as the same impulse, not opposing forces"
    ],
    painPoints: [
      "Little Tokyo feels under threat — longtime community members fear losing their neighborhood to gentrification and outside development",
      "The neighborhood's digital presence doesn't reflect its cultural significance — it reads as a small community org, not a world-class cultural district",
      "Younger Japanese American community members feel disconnected from a neighborhood that doesn't reflect contemporary Japanese culture",
      "Visitors describe it as a 'hidden gem' that deserves more attention and foot traffic"
    ],
    quotes: [
      { text: "Little Tokyo is a hidden gem but it needs more love and attention — it's such an important part of LA's identity.", source: "Travel forums / Reddit" },
      { text: "If you don't own the property, then you can't control what happens there. We need to fight for this neighborhood.", source: "Community Impact Fund board member" },
      { text: "Over the last 15 years, 50 businesses that had been around for over 10 years have closed. That's not just gentrification — that's erasure.", source: "KCRW coverage" }
    ]
  },

  targets: [
    { metric: "Earned Media Impressions", value: "500M+", context: "VERDY's brand collaborations consistently generate coverage in Hypebeast, Complex, Highsnobiety, WWD, and LA Times — we're projecting comparable reach for this unprecedented cultural project." },
    { metric: "Foot Traffic Increase", value: "+40%", context: "Measured via foot traffic analytics and small business POS data during the first 6 months post-unveiling, benchmarked against comparable neighborhood art installations." },
    { metric: "Social Media Growth", value: "10×", context: "Growing @la_littletokyo from 6.6K to 65K+ followers through the VERDY collaboration content, paid amplification, and press-driven organic growth." },
    { metric: "Small Business Revenue Impact", value: "+25%", context: "Average revenue increase for Little Tokyo small businesses within the first year, driven by sustained foot traffic, tourism, and cultural programming." }
  ],

  competitive: {
    summary: "Artist-designed municipal infrastructure is a growing trend, but no project has approached the scale, cultural significance, or commercial potential of Little Tokyo Reborn. Here's how the landscape looks.",
    competitors: [
      { name: "Long Beach Creative Crosswalks", gap: "Used local artists — no global recognition or press ecosystem. VERDY brings 100× the cultural cachet and media reach.", strength: "Strong city partnership model and community engagement process" },
      { name: "St. Louis Choice Neighborhoods", gap: "Government-funded placemaking with neighborhood banners and crosswalks — functional but not iconic. No viral or streetwear-culture crossover.", strength: "Integrated public art into a comprehensive neighborhood revitalization plan" },
      { name: "Burn & Broad NYC Street Signs", gap: "Unsanctioned art with no institutional backing or permanence. Generated viral attention but no lasting infrastructure change.", strength: "Proved that artist-designed street elements generate massive organic social sharing" },
      { name: "Wynwood Walls (Miami)", gap: "Gallery-focused — transformed a warehouse district into an art destination, but didn't redesign municipal infrastructure. Different model entirely.", strength: "Created a globally recognized art district that drives year-round tourism and elevated property values" }
    ]
  },

  timelineHeading: "Campaign Roadmap",
  timelineSubheading: "A 12-month engagement across four phases — from strategic discovery through sustained growth — designed to build anticipation, deliver a landmark unveiling, and maintain momentum for years to come.",
  timelineImageCaption: "12 Months / 4 Phases / 1 Cultural Moment",

  timeline: [
    {
      phase: "Discovery & Strategy",
      week: "Months 1–2",
      date: "Jun – Jul 2026",
      status: "upcoming" as const,
      tasks: [
        "Brand audit and digital ecosystem assessment for LTCC",
        "VERDY creative alignment sessions — visual language, character integration, infrastructure mapping",
        "Audience segmentation and media planning across all three target demographics",
        "PR strategy development — target outlet mapping, story angle development, embargo planning",
        "Social media strategy and content calendar architecture",
        "Paid media strategy — platform selection, budget allocation, audience targeting",
        "Event concept development for the unveiling"
      ]
    },
    {
      phase: "Pre-Launch & Buzz Building",
      week: "Months 3–5",
      date: "Aug – Oct 2026",
      status: "upcoming" as const,
      tasks: [
        "Teaser content campaign — behind-the-scenes of VERDY's design process",
        "Influencer and creator seeding — streetwear, design, and LA culture creators",
        "Press embargo strategy — exclusive first-look stories with key outlets",
        "Social media launch — new visual identity, content series, community engagement",
        "Paid media ramp-up — awareness campaigns across Meta, TikTok, Google, programmatic",
        "Email/SMS list building and nurture sequence development",
        "Partnership activations — brand collabs, local business co-marketing",
        "Event production planning and logistics for unveiling"
      ]
    },
    {
      phase: "Unveiling & Launch",
      week: "Months 6–8",
      date: "Nov 2026 – Jan 2027",
      status: "upcoming" as const,
      tasks: [
        "Grand unveiling event — VERDY appearance, press event, community celebration",
        "Real-time social content capture and same-day distribution",
        "Press blitz — interviews, features, broadcast coverage coordination",
        "Paid media surge — conversion campaigns driving foot traffic post-unveiling",
        "Limited-edition VERDY × Little Tokyo merchandise drop (if applicable)",
        "UGC campaign activation — encourage visitors to share their experience",
        "Tourism partnership activation — Visit California, LA Tourism, hotel partners"
      ]
    },
    {
      phase: "Sustained Growth & Community",
      week: "Months 9–12",
      date: "Feb – May 2027",
      status: "upcoming" as const,
      tasks: [
        "Ongoing social media management and content production",
        "Sustained paid media — retargeting, lookalike audiences, seasonal campaigns",
        "Quarterly performance reporting and strategy optimization",
        "Cultural programming support — events, activations, seasonal campaigns",
        "Small business co-marketing and local partnership development",
        "2028 Olympics pre-positioning — LA cultural destination strategy",
        "Year-end impact report — foot traffic, revenue, media impressions, community metrics"
      ],
      ongoing: true
    }
  ],

  deliverables: [
    {
      category: "Strategy & Creative Direction",
      icon: "◆",
      items: [
        { name: "Brand & Campaign Strategy", quantity: "1", description: "Comprehensive strategic plan including audience segmentation, channel strategy, messaging architecture, and 12-month roadmap" },
        { name: "VERDY Creative Alignment", quantity: "Ongoing", description: "Creative direction sessions with VERDY's team to ensure marketing materials reflect the design vision authentically" },
        { name: "Media Planning & Buying Strategy", quantity: "1", description: "Full-funnel media plan across Meta, TikTok, Google, and programmatic with quarterly optimization cycles" },
        { name: "Monthly Strategy Reviews", quantity: "12", description: "Performance analysis, optimization recommendations, and forward-looking strategic adjustments" }
      ]
    },
    {
      category: "Social Media & Content",
      icon: "▶",
      items: [
        { name: "Social Media Management", quantity: "365 days", description: "Daily management across Instagram, TikTok, X, and Facebook — content publishing, community engagement, and growth" },
        { name: "Original Content Production", quantity: "40+/mo", description: "Photo, video, and graphic content including behind-the-scenes, process documentation, and campaign assets" },
        { name: "Short-Form Video", quantity: "12+/mo", description: "TikTok and Reels content — street-level documentation, VERDY design reveals, community stories" },
        { name: "Content Calendar & Copywriting", quantity: "Monthly", description: "Strategic content planning, caption writing, and hashtag strategy aligned to campaign phases" }
      ]
    },
    {
      category: "PR & Media Relations",
      icon: "◇",
      items: [
        { name: "Press Strategy & Outreach", quantity: "Ongoing", description: "Proactive media relations targeting Hypebeast, Complex, Highsnobiety, LA Times, NYT, and broadcast outlets" },
        { name: "Press Materials", quantity: "4 sets", description: "Press kits, media alerts, and embargoed assets for each campaign phase" },
        { name: "Exclusive Story Placement", quantity: "6+", description: "Secured exclusive features and first-look stories with tier-1 outlets" },
        { name: "Press Event Production", quantity: "2", description: "Media preview event and grand unveiling press event coordination" }
      ]
    },
    {
      category: "Paid Media",
      icon: "●",
      items: [
        { name: "Meta Advertising", quantity: "12 months", description: "Instagram and Facebook campaigns — awareness, engagement, and foot traffic conversion" },
        { name: "TikTok Advertising", quantity: "12 months", description: "In-feed and TopView campaigns targeting streetwear, design, and LA culture audiences" },
        { name: "Google & YouTube", quantity: "12 months", description: "Search, display, and video campaigns capturing intent-based and discovery traffic" },
        { name: "Programmatic & OOH", quantity: "12 months", description: "Programmatic display and out-of-home placements across Los Angeles" }
      ]
    },
    {
      category: "Event Marketing",
      icon: "■",
      items: [
        { name: "Grand Unveiling Event", quantity: "1", description: "Flagship unveiling event with VERDY appearance, press activation, community celebration, and live content capture" },
        { name: "Cultural Programming", quantity: "4+", description: "Quarterly activations and seasonal events tied to Little Tokyo's cultural calendar (Nisei Week, Oshogatsu, etc.)" },
        { name: "Creator & Influencer Events", quantity: "2", description: "Invite-only experiences for streetwear, design, and culture creators to generate organic coverage" }
      ]
    },
    {
      category: "Email, SMS & Community",
      icon: "▲",
      items: [
        { name: "Email/SMS Infrastructure", quantity: "1", description: "Platform setup, list building, segmentation, and automation architecture" },
        { name: "Campaign Sends", quantity: "8+/mo", description: "Event announcements, community updates, business spotlights, and campaign content" },
        { name: "Community Management", quantity: "Daily", description: "Social media community engagement, DM management, and sentiment monitoring across all platforms" }
      ]
    }
  ],

  deliverablesSubheading: "A full-stack marketing operation across strategy, creative, social, PR, paid media, events, and community — everything needed to launch and sustain a cultural moment of this magnitude.",

  scope: {
    included: [
      "Full-service campaign strategy and creative direction for the 12-month engagement",
      "Daily social media management across Instagram, TikTok, X, and Facebook",
      "Original content production — 40+ assets per month including photo, video, and graphic",
      "PR and media relations — proactive outreach to tier-1 outlets with exclusive story placement",
      "Paid media management across Meta, TikTok, Google, YouTube, and programmatic channels",
      "Grand unveiling event concept, production support, and press activation",
      "Email/SMS platform setup, campaign sends, and list growth strategy",
      "Monthly performance reporting with actionable optimization recommendations",
      "Quarterly strategy reviews and campaign phase planning sessions"
    ],
    excluded: [
      "Physical infrastructure design and fabrication (handled by VERDY's design team)",
      "Municipal permitting and city government liaison (handled by LTCC)",
      "Construction, installation, and engineering of physical elements",
      "VERDY's design fees and creative team compensation",
      "Merchandise design and production (available as add-on if needed)",
      "Legal counsel and contract negotiation with city entities"
    ],
    subheading: "Everything included in this engagement — and where the boundaries are between CCD's marketing mandate and the physical design/installation workstreams."
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      { name: "Strategy & Creative Direction", description: "Brand strategy, VERDY creative alignment, media planning, monthly reviews", price: 35000, recurring: true },
      { name: "Social Media & Content Production", description: "Daily management, 40+ assets/mo, short-form video, content calendar", price: 45000, recurring: true },
      { name: "PR & Media Relations", description: "Proactive outreach, press materials, exclusive placements, event press", price: 30000, recurring: true },
      { name: "Paid Media Management", description: "Campaign management across Meta, TikTok, Google, YouTube, programmatic", price: 35000, recurring: true },
      { name: "Event Marketing", description: "Grand unveiling, quarterly activations, creator events", price: 30000, recurring: true },
      { name: "Email, SMS & Community", description: "Platform setup, campaigns, community management, list growth", price: 25000, recurring: true }
    ],
    subtotal: 200000,
    setupFee: {
      label: "Onboarding & Discovery Sprint",
      amount: 50000
    },
    discount: {
      label: "12-Month Commitment",
      percentage: 0,
      amount: 0
    },
    total: 2450000,
    paymentSchedule: [
      { milestone: "Engagement Deposit (Q1)", percentage: 25, amount: 650000, due: "Upon approval — covers onboarding fee + first quarter retainer" },
      { milestone: "Q2 Payment", percentage: 25, amount: 600000, due: "September 1, 2026" },
      { milestone: "Q3 Payment", percentage: 25, amount: 600000, due: "December 1, 2026" },
      { milestone: "Q4 Payment", percentage: 25, amount: 600000, due: "March 1, 2027" }
    ],
    paymentTerms: "Net 7 from invoice",
    paymentLink: "https://buy.stripe.com/9B6fZg5XC0Ah7iV6Vza7C04"
  },

  nextSteps: [
    { step: 1, title: "Approve & Fund", description: "Sign the engagement letter and fund the Q1 deposit ($650,000) to secure the start date and team allocation." },
    { step: 2, title: "Kickoff with LTCC + VERDY", description: "Joint onboarding session with the Little Tokyo Community Council leadership and VERDY's creative team to align on vision, timeline, and access." },
    { step: 3, title: "Strategic Discovery", description: "Two-week intensive brand audit, audience research deep-dive, and media landscape mapping to build the campaign foundation." },
    { step: 4, title: "Creative Direction Alignment", description: "Collaborative sessions with VERDY's team to establish the marketing visual language, content style guide, and brand voice for all campaign materials." },
    { step: 5, title: "Campaign Buildout Begins", description: "Social channels activated, content production underway, PR strategy deployed, and paid media campaigns in market — the engine starts." }
  ],

  cta: {
    headline: "Let's Make History in Little Tokyo",
    body: "This isn't just a marketing campaign — it's a cultural defense strategy wrapped in world-class design. Let's build something that protects, celebrates, and transforms America's most iconic Japantown. We're ready when you are.",
    email: "geoff@crowdcontroldigital.com"
  },

  images: {
    hero1: "/images/little-tokyo-reborn/hero1.png",
    hero2: "/images/little-tokyo-reborn/hero2.png",
    product: "/images/little-tokyo-reborn/product.png",
    editorial: "/images/little-tokyo-reborn/editorial.png",
    texture: "/images/little-tokyo-reborn/texture.png",
    brutalist: "/images/little-tokyo-reborn/brutalist.png",
    hero1Caption: "Full-Service Marketing + Creative Campaign",
    brutalistCaption: "Little Tokyo × Crowd Control Digital"
  }
};
