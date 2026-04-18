import { Container, Hero, ContactForm, Section } from '../../components'

function LandingPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '88px 0',
        background:
          'radial-gradient(circle at top left, rgba(107, 0, 0, 0.08), transparent 30%), linear-gradient(180deg, #edfdc5 0%, #f4f7ea 100%)',
      }}
    >
      <Container>
        <Section>
          <Hero 
          eyebrow="NEEX DESIGN SYSTEM"
      title="Sistema visual premium para a marca"
      description="Uma base reutilizável para websites, apresentações e social media."
      primaryAction="Começar projeto"
      secondaryAction="Ver componentes"
/>
        </Section>

        <Section>
          <ContactForm />
        </Section>
      </Container>
    </div>
  )
}

export default LandingPage