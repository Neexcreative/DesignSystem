import './CTASection.css'
import { Button, SectionTitle } from '..'

type CTASectionProps = {
  eyebrow?: string
  title: string
  description?: string
  primaryAction?: string
  secondaryAction?: string
}

function CTASection({
  eyebrow = 'Next step',
  title,
  description,
  primaryAction = 'Start a project',
  secondaryAction = 'Learn more',
}: CTASectionProps) {
  return (
    <section className="neex-cta-section">
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="neex-cta-actions">
        <Button label={primaryAction} />
        <Button label={secondaryAction} variant="ghost" />
      </div>
    </section>
  )
}

export default CTASection