import { AboutContentPage } from "@/components/about-content-page"
import { aboutSectionLookup } from "@/lib/about-data"

export default function GovernancePage() {
  const section = aboutSectionLookup["governance"]

  return (
    <AboutContentPage
      title={section.title}
      blocks={section.blocks}
      imageSrc="/about/about_corporategovernance.png"
    />
  )
}
