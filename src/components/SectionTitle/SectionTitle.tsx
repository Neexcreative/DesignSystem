import './SectionTitle.css'

type Props = {
  eyebrow?: string
  title: string
  description?: string
}

function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="neex-section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="description">{description}</p>}
    </div>
  )
}

export default SectionTitle