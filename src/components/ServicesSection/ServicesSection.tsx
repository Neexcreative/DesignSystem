import './ServicesSection.css'
import { SectionTitle, Card } from '..'

type ServicesSectionProps = {
  eyebrow?: string
  title: string
  description?: string
}

function ServicesSection({
  eyebrow = 'Services',
  title,
  description,
}: ServicesSectionProps) {
  return (
    <section className="neex-services-section">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="neex-services-grid">
        <Card
          eyebrow="Branding"
          title="Visual identity"
          description="Logo, color system, typography and direction for a stronger brand presence."
        />
        <Card
          eyebrow="Content"
          title="Content creation"
          description="Short-form content and creative assets to improve visibility and retention."
        />
        <Card
          eyebrow="Web"
          title="Landing pages"
          description="Clean, conversion-focused pages built from reusable design system blocks."
        />
      </div>
    </section>
  )
}

export default ServicesSection