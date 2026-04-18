import './FeaturesSection.css'
import { SectionTitle, Card } from '..'

type FeatureItem = {
  eyebrow: string
  title: string
  description: string
}

type FeaturesSectionProps = {
  eyebrow?: string
  title: string
  description?: string
  items: FeatureItem[]
}

function FeaturesSection({
  eyebrow = 'Features',
  title,
  description,
  items,
}: FeaturesSectionProps) {
  return (
    <section className="neex-features-section">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="neex-features-grid">
        {items.map((item, index) => (
          <Card
            key={index}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection