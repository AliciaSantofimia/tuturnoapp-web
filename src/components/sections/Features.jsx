import {
  IconCalendar,
  IconGift,
  IconLayout,
  IconNotebook,
  IconTicket,
} from '../icons'
import { FeatureCard } from '../ui/FeatureCard'
import { Section } from '../ui/Section'
import { SectionLabel } from '../ui/SectionLabel'

const items = [
  {
    icon: IconCalendar,
    title: 'Reservas de clases',
    description:
      'Muestra tus clases, horarios y plazas disponibles de forma clara para que reservar sea más fácil y más cómodo para todos.',
    accent: 'beige',
  },
  {
    icon: IconTicket,
    title: 'Bonos y packs',
    description:
      'Si tu taller trabaja con bonos o packs de clases, puedes ofrecerlos también desde la app y tenerlo todo más claro y organizado.',
    accent: 'sage',
  },
  {
    icon: IconGift,
    title: 'Tarjetas regalo',
    description:
      'También puedes ofrecer tarjetas regalo para que regalar una experiencia en tu taller sea algo fácil, bonito y sencillo de gestionar.',
    accent: 'rose',
  },
  {
    icon: IconNotebook,
    title: 'Gestión sencilla',
    description:
      'Toda la información importante del día a día reunida en un mismo lugar, para que organizarte sea más fácil y no dependas de mil notas o mensajes.',
    accent: 'sand',
  },
  {
    icon: IconLayout,
    title: 'Panel de gestión',
    description:
      'Controla clases, reservas y usuarios desde un solo sitio, para dedicar menos tiempo a organizar y más tiempo a crear.',
    accent: 'olive',
  },
]

export function Features() {
  return (
    <Section id="ofrece" className="relative bg-tt-bg py-22 sm:py-30">
      <div
        className="pointer-events-none absolute inset-0 bg-grain"
        style={{ opacity: 'var(--grain-opacity)' }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <SectionLabel tone="olive">Qué ofrece</SectionLabel>
            <h2 className="font-display text-display-lg text-tt-text text-balance-safe">
              Todo lo que tu taller necesita para funcionar mejor.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-tt-muted lg:pb-1 lg:text-right">
            Reservas, bonos, tarjetas regalo y organización diaria en una misma herramienta, pensada para que
            todo sea más fácil de gestionar.
          </p>
        </div>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-tt-sage/50 via-tt-border to-transparent" aria-hidden />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Section>
  )
}
