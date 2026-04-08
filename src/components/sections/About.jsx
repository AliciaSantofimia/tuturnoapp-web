import { Section } from '../ui/Section'
import { SectionLabel } from '../ui/SectionLabel'

const portraitSrc = '/alicia-sobre-mi.png'

export function About() {
  return (
    <Section id="sobre-mi" className="relative overflow-hidden bg-tt-bg py-22 sm:py-30">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,color-mix(in_srgb,var(--color-beige)_28%,transparent)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="relative lg:col-span-5">
          <div
            className="absolute -left-4 top-10 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-tt-sage/0 via-tt-sage/70 to-tt-sage/0 lg:block"
            aria-hidden
          />
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div
              className="absolute -bottom-5 -right-5 h-full w-full rounded-4xl border border-tt-sage/45 bg-tt-surface/40"
              aria-hidden
            />
            <figure className="relative overflow-hidden rounded-4xl shadow-soft ring-1 ring-tt-border-strong">
              <img
                src={portraitSrc}
                alt="Alicia con una cámara en la playa, detrás del proyecto TuTurno"
                className="about-portrait-photo aspect-[3/4] w-full sm:aspect-[4/5]"
                width={900}
                height={1125}
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-tt-on-dark/10"
                aria-hidden
              />
            </figure>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-4">
          <SectionLabel tone="sage">Sobre mí</SectionLabel>
          <h2 className="font-display text-display-lg text-tt-text">Hola, soy Alicia.</h2>
          <div className="mt-10 space-y-6 text-lg leading-[1.8] text-tt-muted">
            <p>
              Me interesan los proyectos útiles, bonitos y bien pensados.
              <br />
              De los que funcionan bien por dentro y se sienten fáciles por fuera.
            </p>
            <p>
              TuTurno nace de esa forma de ver las cosas.
              <br />
              De intentar ordenar lo que normalmente acaba siendo un poco caótico, y de hacer que todo sea más
              claro y más cómodo en el día a día.
            </p>
            <p>
              Llevo años trabajando muy cerca de cómo usan las personas las plataformas y de todo lo que influye
              en que una experiencia funcione bien de verdad: los errores que aparecen, lo que no termina de
              encajar y lo que realmente ayuda.
              <br />
              Supongo que por eso me fijo tanto en los detalles y en cómo hacer que algo funcione bien de verdad.
            </p>
            <p>
              TuTurno es una forma de llevar esa manera de pensar a un proyecto propio, pensado para talleres y
              negocios creativos que necesitan una herramienta sencilla para organizarse mejor.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
