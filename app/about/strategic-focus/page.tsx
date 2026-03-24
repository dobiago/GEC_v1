import { AboutContentPage } from "@/components/about-content-page"
import { aboutSectionLookup } from "@/lib/about-data"

export default function StrategicFocusPage() {
  const section = aboutSectionLookup["strategic-focus"]

  return (
    <AboutContentPage
      title={section.title}
      blocks={section.blocks}
      imageSrc="/about/about_strategicfocus.png"
    />
  )
}
