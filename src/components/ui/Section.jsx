import { Container } from './Container'

export function Section({ id, className = '', containerClassName = '', children }) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`.trim()}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
