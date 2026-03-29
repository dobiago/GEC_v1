export type AboutNavItem = {
  href: string
  id: string
  title: string
}

export type AboutSection = {
  body: string[]
  id: string
  kicker: string
  title: string
}

export type AboutTeamMember = {
  bio: string[]
  category: "executive" | "non-executive"
  imageSrc?: string
  name: string
  slug: string
  title: string
}

export const aboutNavigationItems: AboutNavItem[] = [
  { id: "our-values", title: "Our Values", href: "#our-values" },
  { id: "strategic-focus", title: "Strategic Focus", href: "#strategic-focus" },
  { id: "our-team", title: "Our Team", href: "#our-team" },
  { id: "timeline", title: "History", href: "#timeline" },
  { id: "careers", title: "Careers", href: "#careers" },
]

export const aboutSections: AboutSection[] = [
  {
    id: "strategic-focus",
    kicker: "2026 Direction",
    title: "Strategic Focus",
    body: [
      "GPDC is currently focused on coming to first oil and is pursuing a two prong strategy of bringing the Adofi River field to first gas and condensate and the Afiando field to first oil. Both have first oil dates of Q2 2017 and Q4 2017 respectively with a target of approximately 100Mscfpd and 17Mbls of liquids both employing an Early Production Scheme (EPS). Full Field Development (FFD) will be pursued on both fields to reach their full field potential of 200Mscf per day/5000 bcpd and 45,000 bopd respectively. sequence, first oil and gas will be pursued in the shallower fields and prospects in OPL 2010 and proving of deep sitting potentials. Given the availability of existing infrastructure both onshore and offshore, all projects are deemed to be of low to medium risk and fairly modest CAPEX to actualize. Over the next five years, GPDC plans to build a minimum of 250mmbl reserves base with a guaranteed production of at least 50,000 barrels per day. Similarly, we plan to build a net gas reserve base of 3tcfÂ and a 250Mscfpd production over the same period. We will achieve this by:",
      "● Drilling more exploration, appraisal and development wells within our assets and adapting into producers.",
      "● Increasing reserves base through aggressive drilling of the deeper Biafra leads and straddle prospects in OPL 2010.",
      "● Continued participation in planned and on-going acquisition opportunities (IOCs divestments, future licensing rounds, etc). ",
      "In the medium to long term, GPDC will expand its operations into high prospectivity assets in West Africa, whilst pursuing major gas utilization projects in partnership with strategic gas technology companies, focused on LNG, GTL, fertilizers, etc. We also have a strong interest in developing major gas-fired power plants (IPP), utilizing our significant gas resources in the contract areas",
    ],
  },
  {
    id: "governance",
    kicker: "Corporate Information",
    title: "Corporate Governance",
    body: [
      "Governance content should assure counterparties, regulators, and partners that GPDC takes board oversight, ethics, and organizational discipline seriously.",
      "The existing governance section is structurally useful, but it should be updated and rewritten in a more polished tone consistent with the broader site refresh.",
    ],
  },
  {
    id: "careers",
    kicker: "People",
    title: "Careers",
    body: [
      "Careers should remain concise and credible, showing GPDC as a place for purposeful work and professional growth without overstating current hiring activity.",
      "The page should route interested candidates to hr@gecpetroleum.com and make it easy to understand what kind of talent the company values.",
    ],
  },
]

export const aboutPartners = {
  title: "Partners",
  body: [
    "The redesign brief calls for a dedicated partner narrative, with particular attention to OML 151 and the relationship with Matrix. This is both a credibility and business-development need.",
    "The website should treat partnerships as a strategic strength rather than an afterthought, summarizing where GPDC leads, where it collaborates, and how shared delivery capability supports asset development.",
  ],
  highlights: [
    "Dedicated public-facing summary of the OML 151 / Matrix relationship",
    "Clear explanation of roles, scope, and strategic rationale",
    "Positioning suitable for counterparties, lenders, and KYC review",
  ],
}

export const aboutTimelineIntro =
  "A visual history from 1991 to 2026 should anchor the About page, reinforcing continuity, growth, and readiness for the company’s next chapter."

export const aboutTeamMembers: AboutTeamMember[] = [
  {
    slug: "joe-obiago",
    imageSrc: "/team/joe-obiago.jpg",
    name: "Joe Obiago",
    title: "Chairman and CEO",
    category: "executive",
    bio: [
      "Mr. Obiago has over 30 years of professional experience in Oil &Gas, Energy, Infrastructure and Finance sectors. Prior to establishing Global Energy Company (GEC) in 1992, Mr. Obiago had worked at Citibank for several years across many areas of expertise IN Operations, Treasury, Commercial, Corporate and Wealth/Asset Management. He left Citibank to establish GEC, then as a multi-disciplinary energy resources company delivering services to the oil and gas sector in Nigeria and Sub-Saharan Africa. |g2n||g2n|He led GEC through its evolution into a major EPC Contractor and infrastructure provider through a series of strategic acquisitions. He was Chairman of Nigerdock Plc the largest ship repairs, ship building and offshore construction facility in West Africa, between 2002 and 2004 and is currently the Vice Chairman of GEC Powerlines Limited, a power transmission and distribution company, acquired from the ABB Group.",
      "Prior to establishing Global Energy Company (GEC) in 1991, Mr. Obiago worked at Citibank for several years in banking operations, treasury, corporate finance and consumer banking.Between 1982-1983, He worked as a Research Economist in the US Department of Commerce Department of Transportation. He was Chairman of Nigerdock Plc the largest ship repairs, ship building and offshore construction facility in West Africa, 2002-2004.",
      "Mr. Obiago is a graduate of Economics and Business Administration from Dillard University, New Orleans, USA. He has attended several Senior Executive Programs at the Lagos Business School ,IESE, Barcelona and Southern Methodist University, Dallas. He is a member of the Advisory Committee of the Offshore West Africa Conference (OWA), West African Enterprise Network (WAEN), as well as Consultant to several national &amp; major oil companies and financial institutions",
      "Mr. Obiago holds a BSc. in Economics and Business Administration from Dillard University, New Orleans, USA. He has attended several senior executive programs at the Lagos Business School, IESE, Barcelona and Southern Methodist University, Dallas amongst others. He is a member of the Institute of Directors, founding Chairman, Advisory Board of the Offshore West Africa Conference (OWA), West African Enterprise Network (WAEN), as well as Adviser to several national & major oil companies and  financial institutions. ",
    ],
  },
  {
    slug: "festus-oluwaseun",
    imageSrc: "/team/festus-oluwaseun.jpg",
    name: "Festus Oluwaseun",
    title: "Executive Director, Finance & Accounts",
    category: "executive",
    bio: [
      "Mr. Festus Oluwaseun has over 22 years corporate work experience in Accounting, Corporate Finance, Investment Banking, Audit, Tax and Treasury functions, with the last 13 years in the oil and gas sector.",
      "Prior to joining GEC in 2002, he had worked in several companies in the manufacturing, trading and services sectors including Nigerian Bottling Company where he served as a Manager in the Foreign Operations Department. ",
      "Mr. Oluwaseun holds an HND in Accountancy from Auchi Polytechnic. He is a qualified Accountant, and holds the FCA designation. He is also a member of the Nigerian Institute of Taxation and the Nigerian Institute of Management. He has attended several executive courses and trainings in Nigeria and abroad, including the prestigious Wharton School, Philadelphia, USA. He is also an Alumni of the Advanced Management Programme (AMP) Diploma from the Lagos Business School, Lagos.  ",
      "He currently oversees the financial accounting & investments functions as the GM, Finance & Accounts.",
    ],
  },
  {
    slug: "patrick-obot",
    imageSrc: "/team/patrick-obot.jpg",
    name: "Patrick Obot",
    title: "Group Executive Director",
    category: "executive",
    bio: [
      "Mr. Patrick Obot has over 22 years oil and gas experience. He is well experienced in prospects evaluation, basin analysis and stratigraphic studies. Prior to joining GEC in 1992, he worked as a Consultant Geologist to E&P companies in Nigeria including Shell, Exxon, Chevron and Total.",
      " Mr. Obot oversaw GEC’s Asset and Resource Management Services business and its West Africa Business expansion strategy until 2005. He also served as the Managing Director of Nigerdock Plc between 2002 to 2004, and currently serve as the Managing Director of GEC Powerlines Limited, a Power transmission and distribution subsidiary company of GEC.",
      " Mr. Obot holds a Bachelors and Master’s degree in Geology from the University of Calabar and an Advanced Management Programme (AMP) Diploma from the Lagos Business School, Lagos.He has attended several courses and management programs in Nigeria and internationally. ",
      " Mr. Obot is a Group Executive Director of GEC Group.",
    ],
  },
  {
    slug: "margaret-a-koshoni",
    imageSrc: "/team/margaret-a-koshoni.jpg",
    name: "Margaret A. Koshoni",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Mrs. Margaret Koshoni is an experienced Administrator and Philanthropist. Before her retirement from active service, she had put in over 30 years service in the oil and gas sector and the diplomatic and foreign missions section of the federal republic of Nigeria. Her previous experience work include Shell, UK and LASACO Assurance Plc where she was the Board Chairperson. She presently seats on the board of many companies including Bottle & Basket Ltd, Halliday Farms Limited. Mrs. Koshoni serves on the GEC Group Board as a Non-Executive Director.",
    ],
  },
  {
    slug: "nnamdi-a-obiago",
    name: "Nnamdi A. Obiago",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Mr. Nnamdi Obiago is a successful Miner and experienced Consultant of over 25 years. He provides management consultancy services to a range of companies within the mining and solid mineral sectors. He currently runs a number of companies, and is the Chairman/CEO of Proper Technologies Ltd, and Partner of Trinity Consultants Ltd. Mr. Obiago holds a Bachelor of Science degree in Accounting from Dillard University, New Orleans, and has attended several executive and management courses both in Nigeria and internationally. He serves on the Group Board as a Non-Executive Director.",
    ],
  },
  {
    slug: "suleiman-a-onabiyi",
    imageSrc: "/team/suleiman-a-onabiyi.jpg",
    name: "Suleiman A. Onabiyi",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Chief Suleiman Onabiyi is a former chairman of Nigerian Inland Waterways (NIWA) and an accomplished and very successful entrepreneur. Prior to his retirement into private business, he had put in over 40 years of service both in the private and public sectors. He presently owns and manages a number of businesses, including Matef Limited, the premier marble and granite supplier where he serves as the Chairman. Chief Onabiyi is a Graduate of Milano Technical Institute, Milan, Italy. He serves on the Group board as a Non-Executive Director.",
    ],
  },
]

export const aboutTeamLookup = Object.fromEntries(aboutTeamMembers.map((member) => [member.slug, member]))
