export type NavLink = {
  href: string
  label: string
}

export type NavigationItem = NavLink & {
  children?: NavLink[]
}

export type Stat = {
  label: string
  value: string
}

export type NewsItem = {
  category: string
  date: string
  excerpt: string
  href: string
  title: string
}

export type TimelineEntry = {
  description: string
  title: string
  year: string
}

export type AssetFact = {
  label: string
  value: string
}

export type AssetEntry = {
  category: "onshore" | "offshore"
  facts: AssetFact[]
  href: string
  imageSrc: string
  intro: string
  mapLabel: string
  paragraphs: string[]
  slug: string
  title: string
}

export type CSRSection = {
  body: string
  id: string
  title: string
}

export const company = {
  founded: "1991",
  name: "GEC Petroleum Development Company",
  legal: "GEC Petroleum Development Company",
  heroTagline: "Indigenous Energy. Enduring Impact.",
  overview:
    "GEC Petroleum Development Company is a Nigerian indigenous energy company developing a focused portfolio of offshore and onshore assets while building long-term value through disciplined operations, partnerships, and gas-led growth.",
  office: {
    email: "info@gecpetroleum.com",
    enquiries: "Commercial, technical, partnership and media enquiries",
  },
  footerText: "© GEC Petroleum Development Company 1991-2026",
}

export const navigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about#who-we-are", label: "Who We Are" },
      { href: "/about#mission-vision-values", label: "Mission, Vision & Values" },
      { href: "/about#strategic-focus", label: "Strategic Focus" },
      { href: "/about#our-team", label: "Our Team" },
      { href: "/about#partners", label: "Partners" },
      { href: "/about#timeline", label: "Timeline" },
      { href: "/about#governance", label: "Governance" },
      { href: "/about#careers", label: "Careers" },
    ],
  },
  { href: "/operations", label: "Operations" },
  { href: "/csr", label: "CSR" },
  { href: "/news", label: "GEC in the News" },
  { href: "/contact", label: "Contact" },
]

export const homeStats: Stat[] = [
  { label: "Gas reserve base", value: "6.4 Tcf" },
  { label: "Oil & condensate", value: "1.3B bbl" },
  { label: "Core assets", value: "5" },
  { label: "Operated licences", value: "4" },
]

export const operationsPortfolioStats: Stat[] = [
  { label: "Portfolio footprint", value: "5,200+ km²" },
  { label: "Shallow offshore licences", value: "2" },
  { label: "Onshore licences", value: "3" },
  { label: "Operated by GPDC", value: "4 of 5" },
]

export const homeSections = {
  hero: {
    eyebrow: "Nigerian indigenous energy company",
    title: company.name,
    body:
      "A refreshed corporate platform for GPDC should communicate operational substance, indigenous leadership, and a clear bridge from legacy oil-and-gas language into a more modern gas-and-growth narrative.",
  },
  about:
    "GPDC has evolved from a service-led energy business into an asset-backed operator with a diversified offshore and onshore portfolio. The redesigned site should feel credible in investor, partner, and KYC contexts while remaining clear and accessible to broader audiences.",
  timelineTeaser:
    "The timeline should reinforce continuity and credibility, showing how GPDC has moved from foundation in 1991 through asset acquisition, development milestones, and the 2026 repositioning of the business.",
  newsTeaser:
    "A curated news section gives the website a living surface, showing progress across operations, partnerships, community activity, and company milestones.",
}

export const newsItems: NewsItem[] = [
  {
    category: "Partnerships",
    date: "March 2026",
    excerpt:
      "GPDC is preparing updated corporate materials around its offshore partnership story, with OML 151 positioned as a key public-facing relationship area.",
    href: "/news",
    title: "GPDC refreshes partnership narrative for the next phase of growth",
  },
  {
    category: "Operations",
    date: "February 2026",
    excerpt:
      "The new website operations format is designed to present acreage, reserves, water depth, and operatorship in a clearer fact-sheet structure for each licence.",
    href: "/news",
    title: "Operations content moves to a fact-led portfolio presentation",
  },
  {
    category: "Corporate",
    date: "January 2026",
    excerpt:
      "The redesigned digital experience emphasizes indigenous identity, enduring impact, and stronger storytelling around scale, milestones, and governance.",
    href: "/news",
    title: "GPDC sets a new digital direction anchored in credibility and clarity",
  },
]

export const timelineEntries: TimelineEntry[] = [
  {
    year: "1991",
    title: "Company foundation",
    description: "GEC begins building its presence in Nigeria’s energy and infrastructure landscape.",
  },
  {
    year: "2000s",
    title: "Asset-led expansion",
    description:
      "The business broadens from services into exploration and production opportunities across offshore and onshore basins.",
  },
  {
    year: "2010s",
    title: "Portfolio maturation",
    description:
      "GPDC advances appraisal, development planning, and operatorship across a focused group of licences.",
  },
  {
    year: "2026",
    title: "Brand and website repositioning",
    description:
      "The company refreshes its public narrative around indigenous leadership, operational discipline, partnerships, and gas-led growth.",
  },
]

export const operationsOverview = [
  "GPDC’s portfolio spans shallow offshore and onshore licences across the Niger Delta and Anambra Basin, with a balance of development-stage, appraisal, and gas-led opportunity sets.",
  "The redesigned operations experience should emphasize quick understanding: what each asset is, where it sits, how GPDC participates, and which commercial or technical milestones matter most.",
]

export const operationsSubnav: NavLink[] = [
  { href: "#portfolio-summary", label: "Portfolio Summary" },
  { href: "#onshore-assets", label: "Onshore" },
  { href: "#offshore-assets", label: "Offshore" },
  { href: "#gas-strategy", label: "Gas Strategy" },
]

export const operationsAssets: AssetEntry[] = [
  {
    slug: "oml-149",
    title: "OML 149",
    category: "onshore",
    href: "/operations/onshore/oml-149",
    imageSrc: "/operations/oml_149.jpg",
    intro: "Onshore Niger Delta gas and condensate development asset.",
    mapLabel: "Northern onshore flank of the Niger Delta",
    facts: [
      { label: "Licence name", value: "OML 149" },
      { label: "Location", value: "Onshore, Niger Delta" },
      { label: "Resource profile", value: "Gas and condensate" },
      { label: "Development status", value: "Development planning and phased commercialization" },
      { label: "Operatorship", value: "Future operatorship transition to GPDC" },
    ],
    paragraphs: [
      "OML 149 remains a cornerstone onshore asset in GPDC’s portfolio, anchored around the Adofi River structure and wider prospect inventory.",
      "For the redesigned site, this asset should read as an active development opportunity with clear tie-back logic, resource upside, and a concise explanation of how the field fits into GPDC’s gas-led strategy.",
      "Detailed technical metrics should ultimately be refreshed with the GEC technical team before final publication.",
    ],
  },
  {
    slug: "opl-917",
    title: "OPL 917",
    category: "onshore",
    href: "/operations/onshore/opl-917",
    imageSrc: "/operations/opl_917.jpg",
    intro: "Gas-prone Anambra Basin licence with appraisal and prospectivity upside.",
    mapLabel: "Anambra Basin, southern Nigeria",
    facts: [
      { label: "Licence name", value: "OPL 917" },
      { label: "Location", value: "Onshore, Anambra Basin" },
      { label: "Acreage", value: "1,702 km²" },
      { label: "Resource profile", value: "Gas with condensate and oil potential" },
      { label: "GPDC affiliation", value: "Operated by AGER, an associate company of GEC" },
    ],
    paragraphs: [
      "OPL 917 should be presented as part of GPDC’s broader gas commercialization story in the Anambra Basin, with emphasis on contiguous basin logic and future aggregation potential.",
      "The updated website should keep the discovery narrative short and readable, then elevate the decision-grade facts in a structured panel or table.",
    ],
  },
  {
    slug: "opl-907",
    title: "OPL 907",
    category: "onshore",
    href: "/operations/onshore/opl-907",
    imageSrc: "/operations/opl_907.jpg",
    intro: "Anambra Basin licence centered on the Akukwa gas discovery.",
    mapLabel: "Ugwuoba axis, Enugu State",
    facts: [
      { label: "Licence name", value: "OPL 907" },
      { label: "Location", value: "Onshore, Anambra Basin" },
      { label: "Acreage", value: "2,284.50 km²" },
      { label: "Resource profile", value: "Gas and condensate" },
      { label: "Operatorship", value: "Operated by AGER with GPDC alignment" },
    ],
    paragraphs: [
      "OPL 907 is best framed as a proven gas discovery with basin-scale upside and a defined role in future aggregation infrastructure.",
      "In the redesign, the block’s older exploration history should support credibility, but the primary emphasis should be on present strategic value and concise fact-sheet presentation.",
    ],
  },
  {
    slug: "oml-151",
    title: "OML 151",
    category: "offshore",
    href: "/operations/offshore/oml-151",
    imageSrc: "/operations/opl_2009.png",
    intro: "Shallow offshore development asset formerly referenced as OPL 2009.",
    mapLabel: "South eastern offshore Niger Delta",
    facts: [
      { label: "Licence name", value: "OML 151 (formerly OPL 2009)" },
      { label: "Location", value: "Shallow offshore, Niger Delta" },
      { label: "Water depth", value: "30-100 m" },
      { label: "2P reserves", value: "37.6 MMbbl oil" },
      { label: "GPDC interest", value: "51%" },
    ],
    paragraphs: [
      "OML 151 is a key correction point across the whole website: the older OPL 2009 naming should be retired from the public-facing experience except where historical context is needed.",
      "The redesigned asset page should foreground the Afiando development story, nearby infrastructure access, and partnership structure in a fast-scanning format.",
    ],
  },
  {
    slug: "oml-151-partnership-zone",
    title: "OML 151 Partnership Zone",
    category: "offshore",
    href: "/operations/offshore/oml-151-partnership-zone",
    imageSrc: "/operations/opl_2010.png",
    intro: "Offshore partnership and development narrative replacing legacy OPL 2010 references.",
    mapLabel: "South eastern Nigerian offshore corridor",
    facts: [
      { label: "Licence reference", value: "Use OML 151 naming in updated public materials" },
      { label: "Location", value: "Offshore, south eastern Nigerian coast" },
      { label: "Resource profile", value: "Oil and gas discoveries with appraisal upside" },
      { label: "Content priority", value: "Refresh public-facing partnership language with GEC team" },
      { label: "Status", value: "Requires final technical and commercial validation" },
    ],
    paragraphs: [
      "The redesign brief explicitly states that legacy OPL 2010 references should not appear on the updated site. Until GPDC confirms the final public wording, this asset area should be expressed with current naming and partnership language only.",
      "This section should support both the Operations narrative and the About > Partners section, especially where Matrix-related positioning is required.",
    ],
  },
]

export const gasStrategySections = [
  {
    title: "Gas Focus",
    body:
      "GPDC’s gas strategy should be positioned as a transition-era growth platform: indigenous control of feedstock, disciplined commercialization, and selective participation across infrastructure, power, and industrial offtake opportunities.",
  },
  {
    title: "Offshore Gas Gathering",
    body:
      "The offshore narrative should explain how nearby franchise infrastructure, existing discoveries, and phased appraisal can underpin a commercially credible gas development pathway.",
  },
  {
    title: "Onshore Commercialization Network",
    body:
      "The onshore story should connect OPL 907, OPL 917, and OML 149 through aggregation logic, transport corridors, and future domestic utilization opportunities.",
  },
]

export const onshoreOperations = operationsAssets.filter((asset) => asset.category === "onshore")
export const offshoreOperations = operationsAssets.filter((asset) => asset.category === "offshore")

export const csrSections: CSRSection[] = [
  {
    id: "overview",
    title: "Overview",
    body:
      "GPDC’s CSR platform should communicate responsible operations, host-community alignment, and measurable long-term value creation. This section is a placeholder framework pending final approved content from the GEC team.",
  },
  {
    id: "communities",
    title: "Communities & Sustainable Development",
    body:
      "This section should describe how GPDC invests in local relationships, livelihoods, and development initiatives around its operating footprint, supported by project imagery and specific examples once approved.",
  },
  {
    id: "health-safety",
    title: "Health & Safety",
    body:
      "Health and safety content should outline GPDC’s commitment to workforce wellbeing, operating discipline, and any applicable systems, standards, or certifications confirmed for public release.",
  },
  {
    id: "security",
    title: "Security",
    body:
      "Security messaging should balance operational protection with community sensitivity, emphasizing responsible, compliant, and risk-aware practices.",
  },
  {
    id: "environment",
    title: "Environmental Management",
    body:
      "Environmental Management should address stewardship, mitigation, compliance, and monitoring, supported by a more modern visual language than the current site offers.",
  },
  {
    id: "climate",
    title: "Climate Change",
    body:
      "The climate pillar is the clearest opportunity to frame GPDC’s gas portfolio as part of a lower-emissions transition pathway, while avoiding overclaiming until language is reviewed by the GEC team.",
  },
]

export const contactHighlights = [
  {
    label: "General enquiries",
    value: "info@gecpetroleum.com",
  },
  {
    label: "Media & partnership requests",
    value: "Handled through the corporate team on request",
  },
  {
    label: "Careers submissions",
    value: "hr@gecpetroleum.com",
  },
]

export const services = [
  {
    title: "Exploration",
    description:
      "Prospect screening, basin evaluation, and opportunity framing for disciplined portfolio development.",
  },
  {
    title: "Development Planning",
    description:
      "Field concept maturation, commercialization pathways, and partnership-aligned execution planning.",
  },
  {
    title: "Production Strategy",
    description:
      "Structured thinking around tie-backs, operating readiness, and long-term asset value creation.",
  },
  {
    title: "Technical Advisory",
    description:
      "Targeted support for reserves framing, development storytelling, and transaction-grade information presentation.",
  },
]
