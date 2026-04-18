import './Hero.css'
import { Button, SectionTitle } from '..'

type HeroProps = {
  eyebrow?: string
  title: string
  description?: string
  primaryAction?: string
  secondaryAction?: string
}

function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <div className="neex-hero">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="neex-hero-actions">
        {primaryAction ? <Button label={primaryAction} /> : null}
        {secondaryAction ? (
          <Button label={secondaryAction} variant="secondary" />
        ) : null}
      </div>
    </div>
  )
}

export default Hero