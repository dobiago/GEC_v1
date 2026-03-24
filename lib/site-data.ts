export const company = {
  name: "GEC Petroleum Development Company",
  legal: "GEC Petroleum Development Company",
  tagline:
    "Independent upstream oil and gas operator focused on selective basin entry and disciplined field execution.",
  overview:
    "GEC Petroleum Development Company is an independent upstream company operating across offshore and onshore basins with a focus on subsurface evaluation, drilling execution, and production optimization. The business is built around technically screened acreage, compact project teams, and direct operating control where it matters.",
  whoWeAre:
    "We are a technically led upstream operator with assets in offshore, shelf, and unconventional plays. Our work covers basin entry, appraisal, development planning, drilling support, and production operations across a concentrated portfolio.",
  office: {
    headquarters: "182B, Kofo Abayomi, Victoria Island – Lagos, Nigeria",
    technical: "182B, Kofo Abayomi, Victoria Island – Lagos, Nigeria",
    email: "",
    phone: "info@gecpetroleum.com",
  },
}

export const navigation = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Who We Are" },
      { href: "/about/strategic-focus", label: "Strategic Focus" },
      { href: "/about/values", label: "Our Values" },
      { href: "/about/team", label: "Our Team" },
      { href: "/about/governance", label: "Corporate Governance" },
      { href: "/about/careers", label: "Careers" },
    ],
  },
  {
    href: "/operations",
    label: "Operations",
    children: [
      { href: "/operations/onshore", label: "Onshore Assets" },
      { href: "/operations/offshore", label: "Offshore Assets" },
      { href: "/operations/gas", label: "Gas Strategy" },
    ],
  },
  { href: "/contact", label: "Contact" },
]

export const leadership = [
  { name: "Elias Mercer", title: "Chief Executive Officer" },
  { name: "Nadia Rahal", title: "Chief Operating Officer" },
  { name: "Jonas Velde", title: "Vice President, Subsurface" },
  { name: "Caroline Wren", title: "Vice President, Drilling and Wells" },
]

export const services = [
  {
    title: "Exploration",
    description:
      "Prospect screening, basin entry analysis, seismic interpretation, volumetric evaluation, and commercial framing for frontier and mature acreage.",
  },
  {
    title: "Drilling",
    description:
      "Well planning, rig interface, execution oversight, cost control, and post-well analysis across appraisal, development, and workover campaigns.",
  },
  {
    title: "Production",
    description:
      "Field startup support, operating surveillance, debottlenecking, artificial lift review, and reservoir-to-facility performance management.",
  },
  {
    title: "Consulting",
    description:
      "Targeted subsurface and development advisory for partners requiring screening, technical assurance, or field maturation support.",
  },
]

export const operationsIntro = [
  "GPDC directly and indirectly holds interest in two shallow offshore oil blocks, OPLs 2009 and 2010, and three land oil blocks, OML 149, OPLs 907 and 917. GPDC is the Operator of four (4) of the licenses on behalf of its JV Partners.",
  "The fifth asset OML 149 (formally OPL 135), is operated by Eni/Agip for the first 8 years from commencement of production. Thereafter, GPDC will become the operator till end of life of field. Two of these assets (OML 149 & OPL2009) are presently at the field development stages.",
  "OPLs 917 and 907 are two contiguous blocks with some similar features based on geological characteristics and are within the assumed gas prone Anambra Basin. Both blocks are extensively covered by existing 2D Seismic lines of vintage 1971-1972 acquired by both Shell and Total and other data such as Logs and well reports. The prospectivity of both blocks as part of the Anambra Basin suggest huge potential for gas accumulation as well as some oil discovery.",
]

export const operationsPreviewSections = [
  {
    slug: "onshore",
    title: "Onshore Assets",
    href: "/operations/onshore",
    imageSrc: "/operations/onshore-assets-card.png",
  },
  {
    slug: "offshore",
    title: "Offshore Assets",
    href: "/operations/offshore",
    imageSrc: "/operations/offshore-assets-card.png",
  },
  {
    slug: "gas",
    title: "Gas Strategy",
    href: "/operations/gas",
    imageSrc: "/operations/gas-assets-card.png",
  },
]

export const onshoreOperations = [
  {
    slug: "oml-149",
    title: "OML 149",
    imageSrc: "/operations/oml_149.jpg",
    paragraphs: [
      "OML 149 (formally OPL 135) is located in the northern onshore flank of the Niger-Delta. Its Adofi River structure consists of stacked sand and shale sequences separated by down to the basin growth faults. The block has been well explored and appraised with the current limits established by the Adofi River 3 well. Part of the development plan on this field aims at exploiting the E1.0, E5.0 & F1.0/F2.0 reservoirs with the Nsukwa1-ST, and the E1.0, E5.0/E6.0 reservoirs with the Adofi River 3 & Adofi River 4 wells.",
      "The produced gas and condensate is expected to be tied back to the Kwale Okpai Gas Production Facility where it would be separated for further use. Further exploration, appraisal and development of the other prospects in OML 149 will be pursued in order to maximize the production from the entire block. In addition to the Adofi River structure, seven other prospects have been identified for exploration and appraisal. The other prospects are expected to contribute over 3TCF of gas and 120Mbbls of condensates. These Prospective resources evaluated indicate a GPDC net resource volume of over 267MMBOE.",
      "A Field Development Plan Study has been concluded. GPDC has recently received the approval of the Nigerian National Petroleum Corporation (NNPC) for the conversion of Oil Production License (OPL) 135 into Oil Mining License (OML) 149. First Oil is targeted for Q4 2016.",
    ],
  },
  {
    slug: "opl-917",
    title: "OPL 917",
    imageSrc: "/operations/opl_917.jpg",
    paragraphs: [
      "OPL 917 spans an area of approximately 1,702 km² and is located onshore in the Anambra basin in the southern part of Nigeria. Significant gas reserves exist in the Igbariam axis of the OPL 917 where two exploration wells namely Igbariam-1 and Ajire-1 have been drilled to date.",
      "Igbariam-1 well was drilled in 1971 by SPDC to a total depth of about 11,000ft. It has a full suite of logs (Gamma Ray-Resistivity-Neutron-Density Logs) and encountered approximately 194ft of net gas sand and some 30ft of possible light oil or condensate. There are no records of any production tests of these reservoirs. Ajire-1 was drilled in 1972 by SPDC to a total depth of about 8,400ft and the well was wet and abandoned.",
      "Based on the preliminary evaluation of the available 2D Seismic data and well reports, the Igbariam gas and oil discoveries have estimated in place gas volumes of up to 300 Bcf and oil in place up to 80MMbbls.",
      "The block is operated by AGER, an associate company of GEC which controls a 42% working interest.",
    ],
  },
  {
    slug: "opl-907",
    title: "OPL 907",
    imageSrc: "/operations/opl_907.jpg",
    paragraphs: [
      "OPL 907 is located onshore Nigeria within the highly prospective Anambra Basin, which holds an estimated gas potential in the region of 10 tcf. The license covers an area of 2,284.50 km² and contains the Akukwa gas discovery, which has estimated in place volumes of 400 bcf with potential for a significant upside. AGER, an associate company of GEC, operates the asset and controls a 41% working interest.",
      "Six wells have so far been drilled in the block, including four shallow dry wells by Shell in 1938–1939, and two successful wells — Akukwa-1 and Akukwa-2, drilled by Shell/BP in 1955 and 1956 respectively. The Akukwa-1 discovered gas and condensate in Cretaceous sandstones, while the Akukwa-2 appraisal well intersected approximately 150m net gas pay and produced dry gas on test. The two wells make up the Akukwa field located within the Ugwuoba community of Enugu State.",
    ],
  },
]

export const offshoreOperations = [
  {
    slug: "opl-2009",
    title: "OPL 2009",
    imageSrc: "/operations/opl_2009.png",
    paragraphs: [
      "OPL 2009 is an offshore asset located on the South Eastern flank of Niger Delta, with an acreage size of about 313 sq. km. It is located in water depths ranging from 30–100 metres. It consists of one appraised field (Afiando field), with 2P reserves of approximately 37.6 Mmbls as well as four other identified prospects with P50 resources volumes of 2,314Mboe.",
      "The Afiando field is located on the Northern flank of a collapsed crestal roll over anticlinal structure and has the Okono discovery in OML 119 to its south. Its structure has been compartmentalized into five fault blocks (I, II, III, IV & V). Its blocks II, III & IV have been explored and appraised by the two wells drilled (Afiando 2 & 3 wells) with the Miocene hydrocarbons encountered currently planned for development. 2P Reserves of 37.6Mbbl of oil is being targeted for development. GPDC has 51% working interest in OPL 2009, while Eni/Agip has 49% working interest.",
      "After careful consideration of several factors, the compartments II, III & IV will be developed by completing the already drilled Afiando 3 well. Production from this well would add to those from the planned Afiando-4 & 5 development wells.",
      "The produced crude is expected to be tied back into the near-by Mystras FPSO located less than 3km from the Afiando field. A Pre-FEED study for this project has now been completed and a Field Development Program is ongoing.",
      "Further exploration and appraisal of the Afiando I & V blocks along with the neighbouring Idak East & Idak West prospects when completed, is expected to add an additional P50 resource volume of about 2314.5MMBOE.",
      "First oil from the Afiando field is projected for Q2, 2017 with a start up production of 15,500bbls/day.",
    ],
  },
  {
    slug: "opl-2010",
    title: "OPL 2010",
    imageSrc: "/operations/opl_2010.png",
    paragraphs: [
      "GPDC was awarded operatorship of this asset after the 2007 bid round. The asset is located 55–80 km off the South Eastern Nigerian coast with an acreage size of 368 km² and in water depths ranging from 70 to 160 meters. OPL 2010 has four discoveries and over eleven prospects with 136.7mmboe net 2C resources and 584.0mmboe P50 prospective resources (Source: CPR by AGR Tracs) estimated. The block is covered by a full 3D seismic and has 5 wells drilled between 1982 and 1992, four of which discovered hydrocarbon.",
      "The current technical evaluation effort is based on the 2008 re-processed 3D-Seismic data, which has identified additional prospects and provided further clarity on the already identified prospective resources on the assets. The horizons on this block have been correlated from the D-series which have been found highly prolific in neighbouring assets. The Uwem Cluster Prospect area is first pass for early production mainly because of the near-by Odudu Platform and Production facilities in Total’s OML 100. The Uwem appraisal and the Oyong & Oyong North Prospects are structures planned for drilling and hook-up to the Odudu Production facilities. Technically the area has a proven petroleum system from the discoveries & producing reservoirs within the Odudu-Afia-Ime structural axis from the shallow D1 members (D20, D30, D40, D50, D70 reservoirs). GPDC however plans to acquire a new high density 3D seismic data targeting the deeper prospects in the block, as well as obtain an even better understanding of the different other horizons spread over this asset.",
      "GPDC’s notional development plan aims to achieve first oil through an aggressive EPS strategy that would see it appraise and exploit the already discovered D-series within the Uwem cluster. The second phase of activities would see us achieve Block-wide development through drilling and exploiting the southern Diabolo, Idara and Udeme structures. These reservoirs are characterized by distinct structurally controlled features that have been correlated to the Nkarika field.",
      "In addition to GPDC’s oil strategy, the Company is currently developing a cost effective strategy aimed at exploiting the Block’s vast gas reserves, located in close proximity with other franchise gas assets operated by major Multinationals. The plan is to jointly proffer ways to economically produce the discovered gas for both local and LNG use.",
      "The Uwem-West appraisal well preparation is currently underway, and first oil by EPS from the Uwem Discovery is planned for Q4 2016.",
    ],
  },
]

export const gasOperations = [
  {
    title: "Gas Focus",
    paragraphs: [
      "With an aerial acreage of about 5,000 sq. km and an estimated gas reserve of some 6.4TCF and oil reserves of 1.3 billion barrels, GPDC is a major and significant player in the emergent gas play in Nigeria. GPDC’s Gas and Power strategy is to establish ownership of feed stock and develop expertise and build assets along the value chain, with an ultimate aim to own power plants, supply gas to them and where possible optimize the portfolio by providing associated or specialized services to the assets.",
      "In the medium to long term, GPDC will expand its operations into high prospectivity assets in West Africa, whilst pursuing major gas utilization projects in partnership with strategic gas technology companies focused on LNG, GTL, fertilizers, etc. We also have a strong interest in developing a major gas-fired power plant (IPP) utilizing our gas resources in the contract areas to evaluate opportunities in pipeline infrastructure, gas distribution, commodity trading & supplies.",
    ],
  },
  {
    title: "Offshore Gas Gathering Strategy",
    paragraphs: [
      "OPLs 2009 & 2010 fall within the South Eastern Franchise area as delineated by the Nigerian Gas Master Plan. Part of our offshore Gas Gathering Strategy includes:",
    ],
    bullets: [
      "As part of our Gas Development plan in OPL 2010, we plan to appraise the Mbara discovery and considerably prove up more gas reserves and consequently develop it for immediate production.",
      "The second phase would see us appraise the second largest gas reserves in OPL 2010, which is the Udeme field, and bring it to immediate production as well.",
      "The third phase is meant to add reserves encountered in the Uwem and Nkere fields, and consequently shore-up the production from our shallow fields.",
      "The Gas produced is meant to be gathered at the nearby Odudu field, and piped to North east to the existing Gas gathering facility around AmenamKpono, and passed onward to Nigerian LNG Ltd (NLNG) gas pipeline infrastructure to Bonny Island or other designated onshore locations in Akwa Ibom or Rivers States.",
      "NLNG is extending to Train 7.",
    ],
  },
  {
    title: "Onshore Network Conceptual Feasibility for Gas Commercialisation",
    paragraphs: [
      "OPLs 135 and 917 fall within the Central Franchise Area while OPL 907 falls within the Central/Eastern Franchise Area:",
    ],
    bullets: [
      "The concept is to aggregate all gas produced from OPLs 907, 917 and pipe to OML 149’s Adofi River location, located in the South West axis of the block.",
      "Gas aggregation to be achieved via an 84km pipeline network from Akukwa-2 (hub for all produced gas in OPL 907), to Adofi River in OPL 135 with a 12km connecting gas pipeline from Igbariam-1 (hub for all produced gas in OPL 917).",
      "The Adofi River will serve as the coagulation hub of all produced gas before subsequent transport to the Okpai gas facility and finally to the planned Central Franchise Area (CPF).",
      "At the CPF cluster, gas is then sold, swapped and utilised for agreed priority projects such as power generation, methanol, petrochemicals, LNG etc.",
    ],
  },
]

export const globeMarkers = [
  { id: "lagos", location: [6.5244, 3.3792] as [number, number], label: "Lagos" },
  { id: "new-york", location: [40.7128, -74.006] as [number, number], label: "New York" },
  { id: "geneva", location: [46.2044, 6.1432] as [number, number], label: "Geneva" },
  { id: "london", location: [51.5072, -0.1276] as [number, number], label: "London" },
  { id: "cape-town", location: [-33.9249, 18.4241] as [number, number], label: "Cape Town" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
]

export const globeArcs = [
  {
    id: "lagos-london",
    from: [6.5244, 3.3792] as [number, number],
    to: [51.5072, -0.1276] as [number, number],
  },
  {
    id: "london-geneva",
    from: [51.5072, -0.1276] as [number, number],
    to: [46.2044, 6.1432] as [number, number],
  },
  {
    id: "new-york-london",
    from: [40.7128, -74.006] as [number, number],
    to: [51.5072, -0.1276] as [number, number],
  },
  {
    id: "singapore-cape-town",
    from: [1.3521, 103.8198] as [number, number],
    to: [-33.9249, 18.4241] as [number, number],
  },
  {
    id: "cape-town-lagos",
    from: [-33.9249, 18.4241] as [number, number],
    to: [6.5244, 3.3792] as [number, number],
  },
  {
    id: "lagos-riyadh",
    from: [6.5244, 3.3792] as [number, number],
    to: [24.7136, 46.6753] as [number, number],
  },
]
