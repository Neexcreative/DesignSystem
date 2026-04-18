import './Card.css'

type CardProps = {
  eyebrow?: string
  title: string
  description: string
}

function Card({ eyebrow, title, description }: CardProps) {
  return (
    <article className="neex-card">
      {eyebrow ? <p className="neex-card__eyebrow">{eyebrow}</p> : null}
      <h3 className="neex-card__title">{title}</h3>
      <p className="neex-card__description">{description}</p>
    </article>
  )
}

export default Card