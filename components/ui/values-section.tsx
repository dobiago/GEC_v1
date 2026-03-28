const values = [
  "Integrity",
  "Teamwork",
  "Innovation",
  "Excellence",
  "Freedom of Action",
]

export function ValuesSection() {
  return (
    <section
      id="our-values"
      className="w-full border-t border-white/10 bg-[linear-gradient(135deg,rgba(10,37,64,0.96),rgba(14,116,144,0.88))] px-6 py-16 text-white md:px-12 md:py-20 xl:py-24"
    >
      <div className="w-full">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Our Values</p>
        <p className="mt-4 max-w-4xl text-base leading-7 text-white/70 sm:text-lg">
          Our values express our shared understanding of what we believe, how we aim to behave and
          what we aspire to be as an organization.
        </p>

        <div className="mt-12 grid gap-x-8 gap-y-10 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value}
              className={`min-w-0 lg:pl-8 ${
                index > 0 && index !== 3 ? "lg:border-l lg:border-white/10" : ""
              } ${value === "Freedom of Action" ? "whitespace-nowrap" : ""}`}
            >
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl xl:text-4xl 2xl:text-5xl">
                {value}
              </h2>
              <div className="mt-5 h-px w-full bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
