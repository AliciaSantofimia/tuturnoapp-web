const variants = {
  primary:
    'bg-tt-olive text-tt-on-dark hover:bg-[var(--color-olive-hover)] focus-visible:ring-tt-sage shadow-soft',
  secondary:
    'bg-tt-burgundy text-tt-on-dark hover:bg-[var(--color-burgundy-hover)] focus-visible:ring-tt-sand shadow-soft',
  outline:
    'bg-transparent text-tt-text border border-tt-border-strong hover:border-tt-sage hover:bg-tt-surface focus-visible:ring-tt-sage',
  outlineLight:
    'bg-transparent text-tt-on-dark border border-tt-on-dark/40 hover:bg-tt-on-dark/10 focus-visible:ring-tt-sand',
  ghost: 'bg-transparent text-tt-text hover:bg-tt-surface focus-visible:ring-tt-sage',
}

export function Button({
  as: Comp = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-tt-bg disabled:pointer-events-none disabled:opacity-45'

  return (
    <Comp className={`${base} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </Comp>
  )
}
