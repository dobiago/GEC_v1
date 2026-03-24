import Link from "next/link"

import { OperationsBreadcrumb } from "@/components/ui/breadcrumb"
import { aboutTeamMembers } from "@/lib/about-data"

const executiveDirectors = aboutTeamMembers.filter((member) => member.category === "executive")
const nonExecutiveDirectors = aboutTeamMembers.filter((member) => member.category === "non-executive")

type TeamSectionProps = {
  members: typeof aboutTeamMembers
  title: string
}

function TeamSection({ members, title }: TeamSectionProps) {
  return (
    <section className="space-y-6 border-t border-white/10 pt-10">
      <h2 className="text-2xl font-medium tracking-[-0.03em] text-white">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/about/team/${member.slug}`}
            className="group flex h-full min-h-[220px] flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:scale-[1.01] hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="aspect-video w-full rounded-[22px] border border-white/10 bg-zinc-900" />
            <div className="mt-5 space-y-2">
              <p className="text-xl font-medium tracking-[-0.03em] text-white">{member.name}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">{member.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function TeamPage() {
  return (
    <main className="w-full bg-black pt-32 text-white">
      <section className="w-full px-6 pb-16 md:px-12 lg:min-h-[calc(100vh-8rem)] lg:overflow-hidden">
        <div className="space-y-3">
          <OperationsBreadcrumb />
          <h1 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Our Team</h1>
        </div>

        <div className="mt-10 space-y-10">
          <TeamSection title="Executive Directors" members={executiveDirectors} />
          <TeamSection title="Non-Executive Directors" members={nonExecutiveDirectors} />
        </div>
      </section>
    </main>
  )
}
