import { AboutContentPage } from "@/components/about-content-page"
import { aboutSectionLookup } from "@/lib/about-data"

export default function ValuesPage() {
  const section = aboutSectionLookup["values"]

  return (
    <AboutContentPage
      title={section.title}
      blocks={section.blocks}
      imageSrc="/about/about_ourvalues.png"
    />
  )
}
