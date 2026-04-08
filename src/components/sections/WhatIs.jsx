import { Section } from '../ui/Section'
import { SectionLabel } from '../ui/SectionLabel'

export function WhatIs() {
  return (
    <Section id="que-es" className="relative overflow-hidden bg-tt-surface py-22 sm:py-30">
      <div
        className="pointer-events-none absolute inset-0 bg-grain"
        style={{ opacity: 'var(--grain-opacity)' }}
        aria-hidden
      />

      <div className="relative grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-20">
        <div className="lg:col-span-5 lg:pt-4">
          <SectionLabel tone="rose">Qué es TuTurno</SectionLabel>
          <h2 className="font-display text-display-lg text-tt-text text-balance-safe">
            Tu taller, mejor organizado y mucho más fácil de gestionar.
          </h2>
          <div className="mt-10 hidden h-px w-24 bg-tt-burgundy/55 lg:block" aria-hidden />
        </div>
        <div className="space-y-9 border-tt-border lg:col-span-7 lg:border-l lg:pl-14">
          <p className="text-lg leading-[1.8] text-tt-muted">
            <span className="font-semibold text-tt-text">El problema</span>
            <br />
            Mensajes por WhatsApp, dudas por Instagram, anotaciones en papel, horarios apuntados en varios sitios y
            demasiadas cosas pendientes de recordar.
          </p>
          <p className="text-lg leading-[1.8] text-tt-muted">
            <span className="font-semibold text-tt-text">La solución</span>
            <br />
            TuTurno reúne en un solo lugar lo que normalmente acaba repartido entre mensajes, notas y conversaciones:
            clases, horarios, plazas, reservas y gestión diaria. Una forma más clara, cómoda y profesional de
            organizar el taller sin complicarlo todo.
          </p>
          <figure className="bg-pullquote px-8 py-7">
            <blockquote className="font-display text-[1.35rem] font-medium italic leading-snug text-tt-text">
              Más orden para el taller. Más facilidad para quien reserva.
            </blockquote>
            <figcaption className="mt-4 text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-tt-muted">
              Diseñado para el día a día real del taller
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  )
}
