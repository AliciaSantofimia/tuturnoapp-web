import { useState } from 'react'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { SectionLabel } from '../ui/SectionLabel'

const EMAIL = 'contactotuturnoapp@gmail.com'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto web TuTurno — ${form.name || 'Sin nombre'}`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section id="contacto" className="bg-tt-surface py-22 sm:py-30">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionLabel tone="burgundy">Contacto</SectionLabel>
          <h2 className="font-display text-display-lg text-tt-text">Hablemos.</h2>
          <p className="mt-6 text-lg leading-relaxed text-tt-muted">
            Si tienes un taller, una idea o simplemente quieres preguntarme algo sobre TuTurno, puedes escribirme
            por aquí.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-block break-all font-display text-2xl font-semibold text-tt-olive underline decoration-tt-rose/45 decoration-2 underline-offset-[0.35rem] transition hover:text-[var(--color-olive-hover)]"
          >
            {EMAIL}
          </a>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-tt-muted">
            Si lo prefieres, también puedes escribirme directamente por correo.
          </p>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-4xl border border-tt-border-strong bg-tt-elevated/90 p-9 shadow-card sm:p-11"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-tt-muted">
                  Nombre
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-2.5 w-full rounded-lg border border-tt-border-strong bg-tt-bg px-4 py-3.5 text-sm text-tt-text outline-none ring-tt-sage/50 transition focus:border-tt-sage focus:ring-2"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-tt-muted">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-2.5 w-full rounded-lg border border-tt-border-strong bg-tt-bg px-4 py-3.5 text-sm text-tt-text outline-none ring-tt-sage/50 transition focus:border-tt-sage focus:ring-2"
                  placeholder="tucorreo@ejemplo.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-tt-muted">
                  Mensaje
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-2.5 w-full resize-y rounded-lg border border-tt-border-strong bg-tt-bg px-4 py-3.5 text-sm text-tt-text outline-none ring-tt-sage/50 transition focus:border-tt-sage focus:ring-2"
                  placeholder="Cuéntame en qué te puedo ayudar…"
                />
              </label>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="primary">
                Abrir correo
              </Button>
              {sent && (
                <p className="text-sm text-tt-olive" role="status">
                  Se abrirá tu cliente de correo con el mensaje listo. Si no pasa, escribe directamente a{' '}
                  {EMAIL}.
                </p>
              )}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-tt-muted">
              Este formulario abre tu aplicación de correo con el mensaje preparado.
            </p>
          </form>
        </div>
      </div>
    </Section>
  )
}
