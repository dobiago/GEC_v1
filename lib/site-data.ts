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

export type AssetDetailMediaSlot = {
  alt: string
  fileName: string
  src: string
}

export type AssetEntry = {
  category: "onshore" | "offshore"
  detailMediaSlots: AssetDetailMediaSlot[]
  detailParagraphs: string[]
  facts: AssetFact[]
  href: string
  imageSrc: string
  intro: string
  mapLabel: string
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
      { href: "/about#strategic-focus", label: "Strategic Focus" },
      { href: "/about#our-values", label: "Our Values" },
      { href: "/about#our-team", label: "Our Team" },
      { href: "/about#partners", label: "Partners" },
      { href: "/about#timeline", label: "History" },
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
  { label: "Asset interests", value: "5" },
  { label: "Shallow offshore blocks", value: "2" },
  { label: "Land blocks", value: "3" },
  { label: "Operated licences", value: "4" },
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
    description: "GEC begins building its presence in Nigeria's energy and infrastructure landscape.",
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
  "GPDC directly and indirectly holds interest in two shallow offshore oil blocks, OPLs 2009 and 2010, and three land oil blocks, OML 149, OPL 907 and OPL 917.",
  "GPDC is the operator of four of the licenses on behalf of its JV Partners.",
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
    intro: "OML 149 (formally OPL 135) is located in the northern onshore flank of the Niger-Delta.",
    mapLabel: "Northern onshore flank of the Niger Delta",
    detailMediaSlots: [
      { alt: "OML 149 document image 1", fileName: "oml-149-01.png", src: "/operations/detail/oml-149-01.png" },
      { alt: "OML 149 document image 2", fileName: "oml-149-02.png", src: "/operations/detail/oml-149-02.png" },
    ],
    facts: [
      { label: "Location", value: "Northern onshore flank of the Niger Delta" },
      { label: "P50 in-place volumes", value: "326 Bcf gas and 12.74 MMbbls of condensates" },
      { label: "2P reserves", value: "188 Bcf gas and 8 MMbbls of condensates" },
      { label: "Development timing", value: "First hydrocarbon is achievable within 18-24 Months" },
    ],
    detailParagraphs: [
      "OML 149 (formally OPL 135) is located in the northern onshore flank of the Niger-Delta. Its Adofi River structure consists of stacked sand and shale sequences separated by down to the basin growth faults. The block has been well explored and appraised with the current limits established by the Adofi River 3 well. Current discovered volumes comprise P50 in-place-volumes of 326 Bcf gas and 12.74 MMbls of condensates. The 2P reserves comprise 188 Bcf of gas and 8 MMbls of condensates. Part of the development plan on this field aims at exploiting the E1.0, E5.0 and F1.0/F2.0 reservoirs with the Nsukwa1-ST, and the E1.0, E5.0/E6.0 reservoirs with the Adofi River 3 and Adofi River 4 wells.",
      "The produced gas and condensate is expected to be tied back to the Kwale Okpai Gas Production Facility where it would be separated for further use. Further exploration, appraisal and development of the other prospects in OML 149 will be pursued in order to maximize the production from the entire block. In addition to the Adofi River structure, seven other prospects have been identified for exploration and appraisal. The other prospects are expected to contribute over 3 TCF of gas and 120 Mbbls of condensates. These prospective resources evaluated indicate a GPDC net resource volume of over 267 MMBOE.",
      "A Field Development Plan Study has been concluded. GPDC has recently received the approval of the Nigerian National Petroleum Corporation (NNPC) for the conversion of Oil Prospecting License (OPL) 135 into Oil Mining License (OML) 149. First hydrocarbon is achievable within 18-24 Months.",
    ],
  },
  {
    slug: "opl-917",
    title: "OPL 917",
    category: "onshore",
    href: "/operations/onshore/opl-917",
    imageSrc: "/operations/opl_917.jpg",
    intro: "OPL 917 spans an area of approximately 1,702 km2 and is located onshore in the Anambra Basin in the southern part of Nigeria.",
    mapLabel: "Anambra Basin, southern Nigeria",
    detailMediaSlots: [
      { alt: "OPL 917 document image 1", fileName: "opl-917-01.png", src: "/operations/detail/opl-917-01.png" },
    ],
    facts: [
      { label: "Acreage", value: "1,702 km2" },
      { label: "In-place gas", value: "Up to 300 Bcf" },
      { label: "Oil in place", value: "Up to 80 MMbbls" },
      { label: "Working interest", value: "42%" },
    ],
    detailParagraphs: [
      "OPL 917 spans an area of approximately 1,702 km2 and is located onshore in the Anambra Basin in the southern part of Nigeria. Significant gas reserves exist in the Igbariam axis of the OPL 917 where two exploration wells, namely Igbariam-1 and Ajire-1, have been drilled to date.",
      "Igbariam-1 well was drilled in 1971 by SPDC to a total depth of about 11,000 ft. It has a full suite of logs (Gamma Ray-Resistivity-Neutron-Density Logs) and encountered approximately 194 ft of net gas sand and some 30 ft of possible light oil or condensate. There are no records of any production tests of these reservoirs.",
      "Ajire-1 was drilled in 1972 by SPDC to a total depth of about 8,400 ft and the well was wet and abandoned.",
      "Based on the preliminary evaluation of the available 2D seismic data and well reports, the Igbariam gas and oil discoveries have estimated in-place gas volumes of up to 300 Bcf and oil in place up to 80 MMbbls.",
      "The block is operated by AGER, an associate company of GEC which controls a 42% working interest.",
      "The prospectivity of the block as part of the Anambra Basin suggests huge potential for gas accumulation as well as some oil discovery.",
    ],
  },
  {
    slug: "opl-907",
    title: "OPL 907",
    category: "onshore",
    href: "/operations/onshore/opl-907",
    imageSrc: "/operations/opl_907.jpg",
    intro: "OPL 907 is located onshore Nigeria within the highly prospective Anambra Basin.",
    mapLabel: "Ugwuoba axis, Enugu State",
    detailMediaSlots: [
      { alt: "OPL 907 document image 1", fileName: "opl-907-01.png", src: "/operations/detail/opl-907-01.png" },
    ],
    facts: [
      { label: "Acreage", value: "2,284.50 km2" },
      { label: "Akukwa gas volume", value: "400 Bcf in place" },
      { label: "Basin potential", value: "Estimated regional gas potential of 10 Tcf" },
      { label: "Working interest", value: "41%" },
    ],
    detailParagraphs: [
      "OPL 907 is located onshore Nigeria within the highly prospective Anambra Basin, which holds an estimated gas potential in the region of 10 Tcf. The license covers an area of 2,284.50 km2 and contains the Akukwa gas discovery, which has estimated in-place volumes of 400 Bcf with potential for a significant upside. AGER, an associate company of GEC, operates the asset and controls a 41% working interest.",
      "Six wells have so far been drilled in the block, including four shallow dry wells by Shell in 1938 and 1939, and two successful wells, Akukwa-1 and Akukwa-2, drilled by Shell/BP in 1955 and 1956 respectively. The Akukwa-1 discovered gas and condensate in Cretaceous sandstones, while the Akukwa-2 appraisal well intersected approximately 150 m net gas pay and produced dry gas on test. The two wells make up the Akukwa field located within the Ugwuoba community of Enugu State.",
    ],
  },
  {
    slug: "oml-151",
    title: "OML 151",
    category: "offshore",
    href: "/operations/offshore/oml-151",
    imageSrc: "/operations/opl_2009.png",
    intro: "OML 151 (formerly OPL 2009) is an offshore asset located on the South Eastern flank of the Niger Delta.",
    mapLabel: "South eastern offshore Niger Delta",
    detailMediaSlots: [
      { alt: "OML 151 document image 1", fileName: "oml-151-01.png", src: "/operations/detail/oml-151-01.png" },
      { alt: "OML 151 document image 2", fileName: "oml-151-02.png", src: "/operations/detail/oml-151-02.png" },
    ],
    facts: [
      { label: "Acreage", value: "About 313 sq. km" },
      { label: "Water depth", value: "30-100 metres" },
      { label: "GPDC interest", value: "51%" },
      { label: "2P reserves", value: "47.1 MMbbl oil and 209 Bcf gas" },
    ],
    detailParagraphs: [
      "OML 151 (formerly OPL 2009) is an offshore asset located on the South Eastern flank of Niger Delta, with an acreage size of about 313 sq. km. It is located in water depths ranging from 30-100 metres.",
      "GPDC has 51% working interest, while Eni/Agip has 49% working interest. It consists of one appraised field (Afiando field), with 2P reserves of 47.1 MMbl oil and 209 Bcf gas as well as four identified prospects with P50 resource volumes of 2,792 Mboe.",
      "The Afiando field is located on the Northern flank of a collapsed crestal roll over anticlinal structure and has the Okono discovery in OML 119 to its south. Its structure has been compartmentalized into five fault blocks (I, II, III, IV and V). Its blocks II, III and IV have been explored and appraised by the two wells drilled (Afiando 2 and 3 wells) with the hydrocarbons encountered currently planned for development. Current development concept foresees production of 15,500 bopd, 75-100 mmscf/d and 2,500 bcpd from 3 development wells and 2 NAG wells in Reservoirs A1, A3, D2D3 and E.",
      "Compartments II, III and IV will be developed by re-entry and completing the already drilled Afiando 3 well. Production from this well would add to those from the planned Afiando-4 and 5 development wells.",
      "The remaining block potentials comprises the Afiando I and V blocks along with the neighbouring Idak East and Idak West prospects when completed, is expected to add an additional P50 resource volumes of about 2792.5 MMboe",
      "First oil& Gas from the Afiando field is achievable within 18-24 Months.",
    ],
  },
  {
    slug: "opl-2010",
    title: "OPL 2010",
    category: "offshore",
    href: "/operations/offshore/opl-2010",
    imageSrc: "/operations/opl_2010.png",
    intro: "OPL 2010 is an offshore asset located 55-80 km off the South Eastern Nigerian coast.",
    mapLabel: "South eastern Nigerian offshore corridor",
    detailMediaSlots: [
      { alt: "OPL 2010 document image 1", fileName: "opl-2010-01.png", src: "/operations/detail/opl-2010-01.png" },
      { alt: "OPL 2010 document image 2", fileName: "opl-2010-02.png", src: "/operations/detail/opl-2010-02.png" },
    ],
    facts: [
      { label: "Acreage", value: "368 km2" },
      { label: "Water depth", value: "70-160 meters" },
      { label: "Net 2C resources", value: "136.7 MMboe" },
      { label: "P50 prospective resources", value: "584.0 MMboe" },
    ],
    detailParagraphs: [
      "GPDC was awarded operatorship of this asset after the 2007 bid round. The asset is located 55-80 km off the South Eastern Nigerian coast with an acreage size of 368 km2 and in water depths ranging from 70 to 160 meters. OPL 2010 has four discoveries and over eleven prospects with 136.7 MMboe net 2C resources and 584.0 MMboe P50 prospective resources (Source: CPR by AGR Tracs) estimated. The block is covered by a full 3D seismic and has 5 Wells drilled between 1982 and 1992; 4 of which discovered hydrocarbon.",
      "The current technical evaluation effort is based on the 2008 re-processed 3D-Seismic data, which has identified additional prospects and provided further clarity on the already identified prospective resources on the assets. The horizons on this block have been correlated from the D-series which have been found highly prolific in neighbouring assets. The Uwem Cluster Prospect area is first pass for early production mainly because of the near-by Odudu Platform and Production facilities in Total's OML 100. The Uwem appraisal and the Oyong and Oyong North Prospects are structures planned for drilling and hook-up to the Odudu Production facilities. Technically the area has a proven petroleum system from the discoveries and producing reservoirs within the Odudu-Afia-Ime structural axis from the shallow D1 members (D20, D30, D40, D50, D70 reservoirs). GPDC however plans to acquire a new high density 3D seismic data targeting the deeper prospects in the block, as well as obtain an even better understanding of the different other horizons spread over this asset.",
      "As already mentioned, GPDC's notional development plan, aims to achieve first oil through an aggressive EPS strategy that would see it appraise and exploit the already discovered D-series within the Uwem cluster. The second phase of activities would see us achieve Block-wide development through drilling and exploiting the southern Diabolo, Idara and Udeme structures. These reservoirs are characterized by distinct structurally controlled features that have been correlated to the Nkarika field.",
      "In addition to GPDC's oil strategy, the Company is currently developing a cost effective strategy aimed at exploiting the Block's vast gas reserves, located in close proximity with other franchise gas assets operated by major Multinationals. The plan is to jointly proffer ways to economically produce the discovered gas for both local and LNG use.",
      "The Uwem-West appraisal well preparation is currently underway, and first oil by EPS from the Uwem Discovery is planned for Q4 2016.",
    ],
  },
]

export const gasStrategySections = [
  {
    title: "Onshore Network",
    body:
      "OML 149 and OPL 917 fall within the Central Franchise Area while OPL 907 falls within the Central/Eastern Franchise Area.",
  },
  {
    title: "Aggregation Concept",
    body:
      "The concept is to aggregate all gas produced from OPL 907 and OPL 917 and pipe to OML 149's Adofi River location, located in the South West axis of the block.",
  },
  {
    title: "Commercialisation Pathway",
    body:
      "Gas aggregation is to be achieved via an 84 km pipeline network from Akukwa-2 to Adofi River in OML 149 with a 12 km connecting gas pipeline from Igbariam-1. The Adofi River will serve as the coagulation hub before transport to the Okpai gas facility and finally to the planned Central Franchise Area (CPF), where gas is sold, swapped and utilised for priority projects such as power generation, methanol, petrochemicals and LNG.",
  },
]

export const onshoreOperations = operationsAssets.filter((asset) => asset.category === "onshore")
export const offshoreOperations = operationsAssets.filter((asset) => asset.category === "offshore")

export const csrSections: CSRSection[] = [
  {
    id: "overview",
    title: "Overview",
    body:
      "GPDC's CSR platform should communicate responsible operations, host-community alignment, and measurable long-term value creation. This section is a placeholder framework pending final approved content from the GEC team.",
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
      "Health and safety content should outline GPDC's commitment to workforce wellbeing, operating discipline, and any applicable systems, standards, or certifications confirmed for public release.",
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
      "The climate pillar is the clearest opportunity to frame GPDC's gas portfolio as part of a lower-emissions transition pathway, while avoiding overclaiming until language is reviewed by the GEC team.",
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
