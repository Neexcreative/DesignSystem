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
    <div className="hero">
      {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}

      <h1>{title}</h1>

      {description && <p>{description}</p>}

      <div className="hero-actions">
        {primaryAction && <button className="btn-primary">{primaryAction}</button>}
        {secondaryAction && <button className="btn-secondary">{secondaryAction}</button>}
      </div>
    </div>
  )
}

export default Hero