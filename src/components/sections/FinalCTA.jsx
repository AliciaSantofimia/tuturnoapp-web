import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export function FinalCTA() {
  return (
    <Section
      id="cta"
      className="relative overflow-hidden border-y border-tt-border-strong bg-tt-rose py-22 text-tt-on-dark sm:py-28"
      containerClassName="relative z-10"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grain"
        style={{ opacity: '0.06' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-tt-burgundy/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-tt-sand/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-tt-on-dark-muted">
          Tu próximo paso
        </p>
        <h2 className="mt-5 font-display text-display-lg text-tt-on-dark text-balance-safe">
          Si tienes un taller, quizá esto te interese.
        </h2>
        <p className="mt-7 text-lg leading-relaxed text-[color-mix(in_srgb,var(--color-on-dark)_88%,var(--color-burgundy))]">
          Si gestionas un taller o un espacio creativo y sientes que todo podría ser más sencillo, escríbeme.
          <br />
          Te cuento cómo funciona y vemos si puede encajar contigo.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            as="a"
            href="mailto:contactotuturnoapp@gmail.com?subject=Quiero%20probar%20TuTurno"
            variant="primary"
            className="!ring-offset-tt-rose"
          >
            Escribirme
          </Button>
          <Button as="a" href="#contacto" variant="outlineLight" className="!ring-offset-tt-rose">
            Ver contacto
          </Button>
        </div>
      </div>
    </Section>
  )
}
