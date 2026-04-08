export function SectionLabel({ children, tone = 'olive' }) {
  const tones = {
    olive: 'text-tt-olive',
    rose: 'text-tt-rose',
    sage: 'text-tt-sage',
    burgundy: 'text-tt-burgundy',
    muted: 'text-tt-muted',
    light: 'text-tt-on-dark-muted',
  }
  return (
    <p
      className={`mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.42em] ${tones[tone]}`}
    >
      {children}
    </p>
  )
}
