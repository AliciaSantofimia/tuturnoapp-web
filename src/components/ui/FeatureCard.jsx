const accents = {
  beige: 'bg-feature-beige',
  sage: 'bg-feature-sage',
  rose: 'bg-feature-rose',
  sand: 'bg-feature-sand',
  olive: 'bg-feature-olive',
}

export function FeatureCard({ icon: Icon, title, description, accent = 'beige' }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-editorial border border-tt-border p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float ${accents[accent]}`}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-tt-sand/25 opacity-0 transition duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-tt-border-strong bg-tt-elevated/90 text-tt-olive shadow-sm">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <h3 className="font-display text-[1.35rem] font-semibold leading-snug text-tt-text">{title}</h3>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-tt-muted">{description}</p>
      </div>
    </article>
  )
}
