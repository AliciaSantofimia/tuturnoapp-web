/**
 * Mini preview del calendario de reservas: contenido neutro y maquetación alineada con tt-*.
 */
const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

/** Abril 2026 (Lun = primer día de columna). 30–31 = marzo. */
const cells = [
  { n: 30, kind: 'prev' },
  { n: 31, kind: 'prev' },
  { n: 1, kind: 'day' },
  { n: 2, kind: 'day' },
  { n: 3, kind: 'busy' },
  { n: 4, kind: 'day' },
  { n: 5, kind: 'day' },
  { n: 6, kind: 'day' },
  { n: 7, kind: 'day' },
  { n: 8, kind: 'busy' },
  { n: 9, kind: 'day' },
  { n: 10, kind: 'day' },
  { n: 11, kind: 'day' },
  { n: 12, kind: 'busy' },
  { n: 13, kind: 'day' },
  { n: 14, kind: 'selected' },
  { n: 15, kind: 'day' },
  { n: 16, kind: 'day' },
  { n: 17, kind: 'busy' },
  { n: 18, kind: 'day' },
  { n: 19, kind: 'day' },
  { n: 20, kind: 'day' },
  { n: 21, kind: 'busy' },
  { n: 22, kind: 'day' },
  { n: 23, kind: 'day' },
  { n: 24, kind: 'day' },
  { n: 25, kind: 'day' },
  { n: 26, kind: 'busy' },
  { n: 27, kind: 'day' },
  { n: 28, kind: 'day' },
  { n: 29, kind: 'day' },
  { n: 30, kind: 'day' },
  { n: null, kind: 'empty' },
  { n: null, kind: 'empty' },
  { n: null, kind: 'empty' },
]

function cellClass(kind) {
  const base =
    'flex min-h-[2.1rem] items-center justify-center rounded-xl text-[0.72rem] font-medium tabular-nums transition-colors sm:min-h-[2.25rem] sm:text-[0.74rem]'
  switch (kind) {
    case 'empty':
      return `${base} bg-transparent`
    case 'prev':
      return `${base} text-tt-muted/55`
    case 'busy':
      return `${base} bg-[color-mix(in_srgb,var(--color-sand)_26%,var(--color-bg))] text-tt-text`
    case 'selected':
      return `${base} bg-[color-mix(in_srgb,var(--color-sage)_18%,var(--color-elevated))] text-tt-burgundy shadow-[0_0_0_1.5px_color-mix(in_srgb,var(--color-olive)_55%,transparent)]`
    default:
      return `${base} text-tt-text hover:bg-tt-surface/80`
  }
}

export function HeroEditorialPreview() {
  return (
    <div
      className="select-none bg-tt-elevated px-4 pb-5 pt-5 sm:px-5 sm:pb-6 sm:pt-5"
      role="img"
      aria-label="Calendario de reservas TuTurno, abril 2026"
    >
      <header className="flex flex-col gap-1">
        <h3 className="font-display text-[1.2rem] font-semibold tracking-tight text-tt-text sm:text-[1.3rem]">
          Calendario de reservas
        </h3>
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-tt-muted sm:text-xs">
          Vista mensual
        </p>
      </header>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-tt-muted/80"
          aria-hidden
        >
          ←
        </span>
        <p className="font-display text-[1.05rem] font-medium text-tt-text sm:text-[1.1rem]">Abril 2026</p>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-tt-muted/80"
          aria-hidden
        >
          →
        </span>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-x-1 gap-y-2 sm:gap-x-1.5 sm:gap-y-2.5">
        {weekDays.map((d) => (
          <div
            key={d}
            className="pb-0.5 text-center text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-tt-muted sm:text-[0.6rem]"
          >
            {d}
          </div>
        ))}
        {cells.map((cell, i) => (
          <div key={i} className={cellClass(cell.kind)}>
            {cell.n != null ? cell.n : ''}
          </div>
        ))}
      </div>

      <div className="mt-7 border-t border-tt-border/80 pt-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-tt-olive">Detalle del día</p>
        <p className="mt-3 font-display text-[1.05rem] font-semibold leading-snug text-tt-text sm:text-[1.1rem]">
          Martes 14 de abril
        </p>
        <p className="mt-3 text-[0.82rem] font-medium leading-snug text-tt-text sm:text-[0.85rem]">
          Taller de cerámica creativa
        </p>
        <p className="mt-2 text-[0.74rem] leading-relaxed text-tt-muted sm:text-[0.76rem]">
          18:00 – 20:30 · 4 plazas
        </p>
        <p className="mt-5 inline-flex text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tt-olive">
          Reserva confirmada
        </p>
      </div>
    </div>
  )
}
