export function TimelineYear({ year }: { year: string }) {
  const match = year.match(/^(\d{4})(s)$/i)

  if (!match) {
    return <>{year}</>
  }

  return (
    <>
      {match[1]}
      <span className="normal-case align-top text-[0.72em]">{match[2].toLowerCase()}</span>
    </>
  )
}
