import { useEffect, useState } from 'react'
import { Container } from '../ui/Container'

const links = [
  { href: '#que-es', label: 'Qué es' },
  { href: '#ofrece', label: 'Qué ofrece' },
  { href: '#experiencia', label: 'Beneficios' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-tt-border bg-tt-bg/88 shadow-card backdrop-blur-lg'
          : 'border-b border-transparent bg-tt-bg/40 backdrop-blur-[2px]'
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#" className="font-display text-[1.35rem] font-semibold tracking-tight text-tt-text">
          TuTurno
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3.5 py-2 text-[0.8125rem] font-medium text-tt-muted transition hover:bg-tt-surface hover:text-tt-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-tt-border-strong bg-tt-elevated text-tt-text shadow-sm transition hover:border-tt-sage md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M5 7h14M5 12h14M5 17h14" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 top-[4.5rem] z-40 bg-tt-bg/97 backdrop-blur-md transition-opacity duration-200`}
      >
        <Container className="flex flex-col gap-2 py-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-editorial border border-tt-border bg-tt-elevated px-5 py-4 text-base font-medium text-tt-text shadow-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  )
}
