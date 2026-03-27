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

export type AboutValue = {
  description: string
  title: string
}

export type AboutTeamMember = {
  bio: string[]
  category: "executive" | "non-executive"
  name: string
  slug: string
  title: string
}

export const aboutNavigationItems: AboutNavItem[] = [
  { id: "who-we-are", title: "Who We Are", href: "#who-we-are" },
  { id: "mission-vision-values", title: "Mission, Vision & Values", href: "#mission-vision-values" },
  { id: "strategic-focus", title: "Strategic Focus", href: "#strategic-focus" },
  { id: "our-team", title: "Our Team", href: "#our-team" },
  { id: "partners", title: "Partners", href: "#partners" },
  { id: "timeline", title: "Timeline", href: "#timeline" },
  { id: "governance", title: "Governance", href: "#governance" },
  { id: "careers", title: "Careers", href: "#careers" },
]

export const aboutSections: AboutSection[] = [
  {
    id: "who-we-are",
    kicker: "About GPDC",
    title: "Who We Are",
    body: [
      "GEC Petroleum Development Company Limited is the upstream arm of the wider GEC group and is positioned as a Nigerian indigenous operator with a focused offshore and onshore portfolio.",
      "The redesigned website should present GPDC as a serious operating and partnership platform: technically grounded, commercially credible, and easier to understand at a glance than the current paragraph-heavy experience.",
    ],
  },
  {
    id: "mission-vision-values",
    kicker: "Identity",
    title: "Mission, Vision & Values",
    body: [
      "The current values set remains a strong base for the website refresh, but the brief indicates the final wording should be confirmed with the GEC team before publication.",
      "This section should connect GPDC’s indigenous identity with how it operates: responsibly, collaboratively, and with a long-term view of value creation.",
    ],
  },
  {
    id: "strategic-focus",
    kicker: "2026 Direction",
    title: "Strategic Focus",
    body: [
      "The old strategic focus copy is no longer usable because it references 2017 targets. The new page should instead position GPDC around selective development, gas-led growth, disciplined partnerships, and clearer public-market readiness.",
      "Until final text is approved, the website should avoid publishing dated production promises and instead use measured, current language tied to portfolio development and commercialization intent.",
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

export const aboutValues: AboutValue[] = [
  {
    title: "Integrity",
    description: "We act responsibly, communicate clearly, and hold ourselves accountable to partners, regulators, and communities.",
  },
  {
    title: "Teamwork",
    description: "We build long-term value through collaboration across technical, commercial, and stakeholder environments.",
  },
  {
    title: "Innovation",
    description: "We pursue practical innovation that improves decisions, efficiency, and development outcomes.",
  },
  {
    title: "Excellence",
    description: "We value rigor, quality, and disciplined execution across every stage of the portfolio.",
  },
  {
    title: "Freedom of Action",
    description: "We maintain the agility to act decisively where local knowledge and operating focus create advantage.",
  },
]

export const aboutMissionVision = {
  mission:
    "To responsibly develop energy opportunities that create durable value for partners, communities, and Nigeria’s long-term growth.",
  vision:
    "To be recognized as a modern indigenous energy company defined by disciplined execution, resilient partnerships, and enduring impact.",
}

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
  "A visual timeline from 1991 to 2026 should anchor the About page, reinforcing continuity, growth, and readiness for the company’s next chapter."

export const aboutTeamMembers: AboutTeamMember[] = [
  {
    slug: "joe-obiago",
    name: "Joe Obiago",
    title: "Chairman and CEO",
    category: "executive",
    bio: [
      "Joe Obiago is presented as a foundational leader in the current corporate story and remains central to GPDC’s public-facing identity.",
      "In the redesigned site, executive biographies should be shorter, easier to scan, and paired with approved headshots once the updated roster is confirmed.",
    ],
  },
  {
    slug: "festus-oluwaseun",
    name: "Festus Oluwaseun",
    title: "Executive Director, Finance & Accounts",
    category: "executive",
    bio: [
      "Festus Oluwaseun’s profile should support the company’s financial credibility and governance narrative.",
      "The final wording should be reviewed against the current team structure before launch.",
    ],
  },
  {
    slug: "patrick-obot",
    name: "Patrick Obot",
    title: "Group Executive Director",
    category: "executive",
    bio: [
      "Patrick Obot’s background supports the technical and strategic depth of the group.",
      "The redesigned team section should make the executive versus non-executive distinction more legible than the current implementation.",
    ],
  },
  {
    slug: "margaret-a-koshoni",
    name: "Margaret A. Koshoni",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Margaret A. Koshoni’s profile contributes to the governance and board narrative.",
      "The final board composition should be confirmed with the GEC team before launch.",
    ],
  },
  {
    slug: "nnamdi-a-obiago",
    name: "Nnamdi A. Obiago",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Nnamdi A. Obiago’s profile supports the company’s broader entrepreneurial and board credentials.",
      "This entry should remain editable once the final approved team list is provided.",
    ],
  },
  {
    slug: "suleiman-a-onabiyi",
    name: "Suleiman A. Onabiyi",
    title: "Non-Executive Director",
    category: "non-executive",
    bio: [
      "Suleiman A. Onabiyi appears as part of the present board representation in the current materials.",
      "As with the other board entries, final publication should follow confirmation of current service status and approved wording.",
    ],
  },
]

export const aboutTeamLookup = Object.fromEntries(aboutTeamMembers.map((member) => [member.slug, member]))
