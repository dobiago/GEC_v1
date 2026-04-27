import { redirect } from "next/navigation"

import { AboutTeamDetail } from "@/components/about-team-detail"
import { visibleAboutTeamMembers } from "@/lib/about-data"

export function generateStaticParams() {
  return visibleAboutTeamMembers.map((member) => ({ person: member.slug }))
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ person: string }>
}) {
  const { person } = await params
  const member = visibleAboutTeamMembers.find((item) => item.slug === person)

  if (!member) {
    redirect("/about#our-team")
  }

  return (
    <AboutTeamDetail
      name={member.name}
      title={member.title}
      bio={member.bio}
      imageSrc={member.imageSrc}
    />
  )
}
