import { AboutContentPage } from "@/components/about-content-page"
import { aboutSectionLookup } from "@/lib/about-data"

export default function CareersPage() {
  const section = aboutSectionLookup["careers"]

  return (
    <AboutContentPage
      title={section.title}
      blocks={section.blocks}
      imageSrc="/about/about_careers.png"
    />
  )
}
