import {
  Container,
  Hero,
  ContactForm,
  Section,
  FeaturesSection,
  ServicesSection,
  CTASection,
} from '../../components'

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
          <FeaturesSection
            eyebrow="Features"
            title="Why this system is powerful"
            description="Reusable sections and components to build faster and keep visual consistency."
            items={[
              {
                eyebrow: 'Strategy',
                title: 'Clear positioning',
                description:
                  'Build a brand presence with direction, consistency and visual clarity.',
              },
              {
                eyebrow: 'Design',
                title: 'Premium visual system',
                description:
                  'Reusable assets, modern layout and a polished design language.',
              },
              {
                eyebrow: 'Speed',
                title: 'Faster production',
                description:
                  'Create pages and content faster using reusable design system blocks.',
              },
            ]}
          />
        </Section>

        <Section>
          <ServicesSection
            eyebrow="Services"
            title="What can be built"
            description="Present your offer in reusable card-based service sections."
            items={[
              {
                eyebrow: 'Branding',
                title: 'Visual identity',
                description:
                  'Logo, color system, typography and direction for a stronger brand presence.',
              },
              {
                eyebrow: 'Content',
                title: 'Content creation',
                description:
                  'Short-form content and creative assets to improve visibility and retention.',
              },
              {
                eyebrow: 'Web',
                title: 'Landing pages',
                description:
                  'Clean, conversion-focused pages built from reusable design system blocks.',
              },
            ]}
          />
        </Section>

        <Section>
          <CTASection
            eyebrow="Next step"
            title="Ready to turn this into real client pages?"
            description="This CTA block helps guide the user into action after understanding the offer."
            primaryAction="Start a project"
            secondaryAction="See examples"
          />
        </Section>

        <Section>
          <ContactForm
            title="Fale com a gente"
            buttonText="Enviar mensagem"
            serviceOptions={[
              'Branding',
              'Website',
              'Social Media',
              'Video Editing',
            ]}
          />
        </Section>
      </Container>
    </div>
  )
}

export default LandingPage