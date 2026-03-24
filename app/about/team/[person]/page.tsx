import { notFound } from "next/navigation"

import { AboutTeamDetail } from "@/components/about-team-detail"
import { aboutTeamMembers } from "@/lib/about-data"

export function generateStaticParams() {
  return aboutTeamMembers.map((member) => ({ person: member.slug }))
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ person: string }>
}) {
  const { person } = await params
  const member = aboutTeamMembers.find((item) => item.slug === person)

  if (!member) {
    notFound()
  }

  return <AboutTeamDetail name={member.name} title={member.title} bio={member.bio} />
}
