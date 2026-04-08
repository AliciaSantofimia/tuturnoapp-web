import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-tt-border-strong bg-tt-bg py-14">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <p className="font-display text-xl font-semibold text-tt-text">TuTurno App</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-tt-muted">
            Una herramienta pensada para talleres creativos que quieren organizarse mejor, sin perder su esencia.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm font-medium lg:col-span-4 lg:items-end lg:text-right">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-tt-muted lg:justify-end">
            <a href="#que-es" className="transition hover:text-tt-text">
              Qué es
            </a>
            <a href="#ofrece" className="transition hover:text-tt-text">
              Qué ofrece
            </a>
            <a href="#sobre-mi" className="transition hover:text-tt-text">
              Sobre mí
            </a>
            <a href="#contacto" className="transition hover:text-tt-text">
              Contacto
            </a>
          </div>
          <a
            href="mailto:contactotuturnoapp@gmail.com"
            className="text-tt-olive transition hover:text-[var(--color-olive-hover)]"
          >
            contactotuturnoapp@gmail.com
          </a>
        </div>
        <p className="text-xs text-tt-muted lg:col-span-3 lg:text-right">
          © {year} TuTurno. Diseñado y desarrollado con cariño por Alicia Santofimia Melero.
        </p>
      </Container>
    </footer>
  )
}
