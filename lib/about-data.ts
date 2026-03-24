export type AboutNavItem = {
  emoji: string
  href: string
  slug: string
  title: string
}

export type AboutContentBlock = {
  bullets?: string[]
  heading?: string
  paragraphs?: string[]
}

export type AboutSection = AboutNavItem & {
  blocks: AboutContentBlock[]
}

export type AboutTeamMember = {
  bio: string[]
  category: "executive" | "non-executive"
  name: string
  slug: string
  title: string
}

export const aboutNavigationItems: AboutNavItem[] = [
  { slug: "who-we-are", title: "Who We Are", href: "/about", emoji: "🧭" },
  { slug: "strategic-focus", title: "Strategic Focus", href: "/about/strategic-focus", emoji: "🎯" },
  { slug: "values", title: "Our Values", href: "/about/values", emoji: "⚖️" },
  { slug: "team", title: "Our Team", href: "/about/team", emoji: "👥" },
  { slug: "governance", title: "Corporate Governance", href: "/about/governance", emoji: "🏛️" },
  { slug: "careers", title: "Careers", href: "/about/careers", emoji: "💼" },
]

export const aboutWhoWeAre = {
  title: "Who We Are",
  paragraphs: [
    "GEC Petroleum Development Company Limited (“GPDC”) is a Nigerian indigenous Independent actively exploring and developing oil and gas resources in the Niger Delta and Anambra basins. It is the wholly owned E & P subsidiary of Global Energy Company Limited (GEC), an Energy Resources and Infrastructure Group focused on Africa for over 23 years.",
    "GPDC holds a prime portfolio of five (5) oil and gas assets with an acreage footprint in excess of 5,200 km² and an estimated reserves/resources base of +6.4Tcf gas, and +1.3b barrels of oil and condensates. Our assets comprise of OML 149, OPL 2009, OPL 2010, OPL 907 and OPL 917. GPDC is the Operator of four (4) of these licenses.",
    "GPDC’s asset portfolio is well diversified, consisting of 3 onshore & 2 offshore blocks. GPDC successful drilling campaigns have proved up significant reserves and brought two (2) of its assets to development stages. First oil and gas from two (2) fields, (Adofi River and Afiando) is planned for Q1 2017 and Q3 2017 respectively.",
  ],
}

export const aboutSections: AboutSection[] = [
  {
    slug: "strategic-focus",
    title: "Strategic Focus",
    href: "/about/strategic-focus",
    emoji: "🎯",
    blocks: [
      {
        paragraphs: [
          "GPDC is currently focused on coming to first oil and is pursuing a two prong strategy of bringing the Adofi River field to first gas and condensate and the Afiando field to first oil. Both have first oil dates of Q2 2017 and Q4 2017 respectively with a target of approximately 100Mscfpd and 17Mbls of liquids both employing an Early Production Scheme (EPS). Full Field Development (FFD) will be pursued on both fields to reach their full field potential of 200Mscf per day/5000 bcpd and 45,000 bopd respectively.",
          "In sequence, first oil and gas will be pursued in the shallower fields and prospects in OPL 2010 and proving of deep sitting potentials. Given the availability of existing infrastructure both onshore and offshore, all projects are deemed to be of low to medium risk and fairly modest CAPEX to actualize.",
          "Over the next five years, GPDC plans to build a minimum of 250mmbl reserves base with a guaranteed production of at least 50,000 barrels per day. Similarly, we plan to build a net gas reserve base of 3tcf and a 250Mscfpd production over the same period.",
          "We will achieve this by:",
        ],
        bullets: [
          "Drilling more exploration, appraisal and development wells within our assets and adapting into producers.",
          "Increasing reserves base through aggressive drilling of the deeper Biafra leads and straddle prospects in OPL 2010.",
          "Continued participation in planned and on-going acquisition opportunities (IOCs divestments, future licensing rounds, etc).",
        ],
      },
      {
        paragraphs: [
          "In the medium to long term, GPDC will expand its operations into high prospectivity assets in West Africa, whilst pursuing major gas utilization projects in partnership with strategic gas technology companies, focused on LNG, GTL, fertilizers, etc.",
          "We also have a strong interest in developing major gas-fired power plants (IPP), utilizing our significant gas resources in the contract areas.",
        ],
      },
    ],
  },
  {
    slug: "values",
    title: "Our Values",
    href: "/about/values",
    emoji: "⚖️",
    blocks: [
      {
        paragraphs: [
          "Our values express our shared understanding of what we believe, how we aim to behave and what we aspire to be as an organization. We believe in and place a high premium on:",
        ],
        bullets: ["Integrity", "Teamwork", "Innovation", "Excellence", "Freedom of Action"],
      },
    ],
  },
  {
    slug: "governance",
    title: "Corporate Governance",
    href: "/about/governance",
    emoji: "🏛️",
    blocks: [
      {
        paragraphs: [
          "As a responsible Corporate Entity, the company has strict Corporate Governance procedures. We understand that high standards of ethics and corporate governance are critical to our business survival and performances, and are thus committed to pursuing these values.",
          "The Board of Directors is charged with providing overall strategic leadership and direction for the company. Its members have the relevant experience to lead the company into its next phase of growth and development.",
          "The Board has three active committees as follows:",
        ],
        bullets: ["Remuneration Committee", "Nomination Committee", "Audit Committee"],
      },
      {
        paragraphs: ["Please visit at a later date for the composition and more information."],
      },
    ],
  },
  {
    slug: "careers",
    title: "Careers",
    href: "/about/careers",
    emoji: "💼",
    blocks: [
      {
        heading: "Work with Us",
        paragraphs: [
          "GPDC maintains a highly motivated, experienced, and effectively managed workforce. We recognize the importance of quality employee programs for recruiting, development, motivation and retention. We are committed to creating a challenging and rewarding work environment whereby employees are goal-focused and appreciated.",
          "GPDC offers not only the opportunity for personal and career development, but a chance to make a vital contribution in the Nigerian Energy Sector. A career with us will propel you to your fullest potential. Members of our leadership team are encouraged to act on initiative and to inspire confidence in their human resources. Our policy of staff rotation along with career progression encourages our personnel to work in a way that leaves positive footprints along their career path.",
        ],
      },
      {
        heading: "Application Process",
        paragraphs: ["Please forward your updated CV and documents to us at hr@gecpetroleum.com."],
      },
    ],
  },
]

export const aboutTeamMembers: AboutTeamMember[] = [
  {
    slug: "joe-obiago",
    name: "Joe Obiago",
    title: "Chairman and CEO",
    category: "executive",
    bio: [
      "Mr. Obiago has over 30 years of professional experience in Oil & Gas, Energy, Infrastructure and Finance sectors. Prior to establishing Global Energy Company (GEC) in 1992, Mr. Obiago had worked at Citibank for several years across many areas of expertise — Operations, Treasury, Commercial, Corporate and Wealth/Asset Management. He left Citibank to establish GEC, then as a multi-disciplinary energy resources company delivering services to the oil and gas sector in Nigeria and Sub-Saharan Africa.",
      "He led GEC through its evolution into a major EPC Contractor and infrastructure provider through a series of strategic acquisitions. He was Chairman of Nigerdock Plc the largest ship repairs, ship building and offshore construction facility in West Africa, between 2002 and 2004 and is currently the Vice Chairman of GEC Powerlines Limited, a power transmission and distribution company, acquired from the ABB Group.",
      "Mr. Obiago holds a BSc. in Economics and Business Administration from Dillard University, New Orleans, USA. He has attended several senior executive programs at the Lagos Business School, IESE, Barcelona and Southern Methodist University, Dallas amongst others. He is a member of the Institute of Directors, founding Chairman, Advisory Board of the Offshore West Africa Conference (OWA), West African Enterprise Network (WAEN), as well as Adviser to several national & major oil companies and financial institutions. Mr. Obiago presently serves as the Chairman/Group CEO of GEC Group.",
    ],
  },
  {
    slug: "festus-oluwaseun",
    name: "Festus Oluwaseun",
    title: "Executive Director, Finance & Accounts",
    category: "executive",
    bio: [
      "Mr. Festus Oluwaseun has over 22 years corporate work experience in Accounting, Corporate Finance, Investment Banking, Audit, Tax and Treasury functions, with the last 13 years in the oil and gas sector.",
      "Prior to joining GEC in 2002, he had worked in several companies in the manufacturing, trading and services sectors including Nigerian Bottling Company where he served as a Manager in the Foreign Operations Department.",
      "Mr. Oluwaseun holds an HND in Accountancy from Auchi Polytechnic. He is a qualified Accountant, and holds the FCA designation. He is also a member of the Nigerian Institute of Taxation and the Nigerian Institute of Management. He has attended several executive courses and trainings in Nigeria and abroad, including the prestigious Wharton School, Philadelphia, USA. He is also an Alumni of the Advanced Management Programme (AMP) Diploma from the Lagos Business School, Lagos. He currently oversees the financial accounting & investments functions as the GM, Finance & Accounts.",
    ],
  },
  {
    slug: "patrick-obot",
    name: "Patrick Obot",
    title: "Group Executive Director",
    category: "executive",
    bio: [
      "Mr. Patrick Obot has over 22 years oil and gas experience. He is well experienced in prospects evaluation, basin analysis and stratigraphic studies. Prior to joining GEC in 1992, he worked as a Consultant Geologist to E&P companies in Nigeria including Shell, Exxon, Chevron and Total.",
      "Mr. Obot oversaw GEC’s Asset and Resource Management Services business and its West Africa Business expansion strategy until 2005. He also served as the Managing Director of Nigerdock Plc between 2002 to 2004, and currently serves as the Managing Director of GEC Powerlines Limited, a Power transmission and distribution subsidiary company of GEC.",
      "Mr. Obot holds a Bachelors and Master’s degree in Geology from the University of Calabar and an Advanced Management Programme (AMP) Diploma from the Lagos Business School, Lagos. He has attended several courses and management programs in Nigeria and internationally. Mr. Obot is a Group Executive Director of GEC Group.",
    ],
  },
  {
    slug: "margaret-a-koshoni",
    name: "Mrs. Margaret A. Koshoni",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Mrs. Margaret Koshoni is an experienced Administrator and Philanthropist. Before her retirement from active service, she had put in over 30 years service in the oil and gas sector and the diplomatic and foreign missions section of the federal republic of Nigeria. Her previous experience includes Shell, UK and LASACO Assurance Plc where she was the Board Chairperson. She presently seats on the board of many companies including Bottle & Basket Ltd, Halliday Farms Limited. Mrs. Koshoni serves on the GEC Group Board as a Non-Executive Director.",
    ],
  },
  {
    slug: "nnamdi-a-obiago",
    name: "Mr. Nnamdi A. Obiago",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Mr. Nnamdi Obiago is a successful Miner and experienced Consultant of over 25 years. He provides management consultancy services to a range of companies within the mining and solid mineral sectors.",
      "He currently runs a number of companies, and is the Chairman/CEO of Proper Technologies Ltd, and Partner of Trinity Consultants Ltd. Mr. Obiago holds a Bachelor of Science degree in Accounting from Dillard University, New Orleans, and has attended several executive and management courses both in Nigeria and internationally. He serves on the Group Board as a Non-Executive Director.",
    ],
  },
  {
    slug: "suleiman-a-onabiyi",
    name: "Chief Suleiman A. Onabiyi",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Chief Suleiman Onabiyi is a former chairman of Nigerian Inland Waterways (NIWA) and an accomplished and very successful entrepreneur. Prior to his retirement into private business, he had put in over 40 years of service both in the private and public sectors. He presently owns and manages a number of businesses, including Matef Limited, the premier marble and granite supplier where he serves as the Chairman. Chief Onabiyi is a Graduate of Milano Technical Institute, Milan, Italy. He serves on the Group board as a Non-Executive Director.",
    ],
  },
]

export const aboutSectionLookup = Object.fromEntries(aboutSections.map((section) => [section.slug, section]))
export const aboutTeamLookup = Object.fromEntries(aboutTeamMembers.map((member) => [member.slug, member]))
