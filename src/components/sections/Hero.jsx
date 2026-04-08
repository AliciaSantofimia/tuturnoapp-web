import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { HeroEditorialPreview } from './HeroEditorialPreview'

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-tt-border bg-tt-bg pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-tt-sage/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-24 h-[480px] w-[480px] rounded-full bg-[color-mix(in_srgb,var(--color-sand)_35%,transparent)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[color-mix(in_srgb,var(--color-rose-clay)_18%,transparent)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain"
        style={{ opacity: 'var(--grain-opacity)' }}
        aria-hidden
      />

      <Container>
        <div className="grid items-end gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="relative z-10 lg:col-span-6 lg:pb-4">
            <div className="mb-8 hidden w-12 border-t-2 border-tt-burgundy lg:block" aria-hidden />
            <h1 className="font-display text-display-xl text-tt-text text-balance-safe">
              El ritmo de tu taller,
              <span className="mt-2 block font-normal italic text-tt-burgundy">sin el caos de la libreta.</span>
            </h1>
            <p className="mt-9 max-w-readable text-lg leading-[1.75] text-tt-muted">
              TuTurno te ayuda a dejar atrás las reservas por WhatsApp, Instagram, notas o mensajes sueltos.
              Organiza clases, plazas, horarios y reservas desde un solo lugar, de forma clara, bonita y sin
              complicaciones.
            </p>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href="#que-es" variant="primary">
                Descubrir cómo funciona
              </Button>
              <Button as="a" href="#ofrece" variant="outline">
                Ver qué ofrece
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[17.5rem] sm:max-w-[18.75rem] lg:ml-auto lg:mr-0 lg:max-w-[19.5rem]">
              <div
                className="absolute -inset-2.5 rounded-3xl border border-tt-beige/55 bg-tt-surface/45 sm:-inset-3 sm:rounded-4xl"
                aria-hidden
              />
              <figure className="relative">
                <div className="overflow-hidden rounded-[1.35rem] bg-[color-mix(in_srgb,var(--color-surface)_88%,var(--color-beige))] shadow-soft ring-1 ring-tt-border sm:rounded-3xl">
                  <HeroEditorialPreview />
                </div>
                <figcaption className="mt-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-tt-muted">
                  TuTurno
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
