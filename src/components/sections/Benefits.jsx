import { IconClock, IconHeart, IconShield, IconSparkles } from '../icons'
import { Section } from '../ui/Section'
import { SectionLabel } from '../ui/SectionLabel'

const benefits = [
  {
    icon: IconSparkles,
    title: 'Fácil de usar',
    text: 'Pensado para que tanto tú como tus alumnos lo entendáis todo sin complicaciones ni pasos innecesarios.',
  },
  {
    icon: IconClock,
    title: 'Ahorro de tiempo',
    text: 'Dedica menos tiempo a organizar, responder o revisar reservas, y más tiempo a lo importante: crear y enseñar.',
  },
  {
    icon: IconShield,
    title: 'Organización',
    text: 'Ten más claro quién viene, cuándo hay plazas y cómo va el ritmo del taller sin depender de notas, mensajes o memoria.',
  },
  {
    icon: IconHeart,
    title: 'Todo más claro',
    text: 'Una experiencia más clara, cómoda y agradable tanto para quien reserva como para quien gestiona el taller.',
  },
]

export function Benefits() {
  return (
    <Section
      id="experiencia"
      className="relative overflow-hidden bg-tt-burgundy py-22 text-tt-on-dark sm:py-30"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-tt-rose/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-tt-olive/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain"
        style={{ opacity: '0.055' }}
        aria-hidden
      />

      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel tone="light">Beneficios</SectionLabel>
          <h2 className="font-display text-display-lg text-tt-on-dark text-balance-safe">
            Una forma más tranquila de gestionar tu taller.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-tt-on-dark-muted">
            Menos tiempo resolviendo dudas, menos cosas apuntadas por todas partes y más sensación de tener el
            taller bajo control.
          </p>
        </div>

        <ul className="mt-18 grid gap-6 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex gap-6 rounded-editorial border border-tt-on-dark/15 bg-[color-mix(in_srgb,var(--color-burgundy)_88%,var(--color-sand))] p-8 shadow-card backdrop-blur-[2px]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-tt-on-dark/20 bg-tt-on-dark/10 text-tt-sand">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-tt-on-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tt-on-dark-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
