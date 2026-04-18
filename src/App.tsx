import './App.css'
import {
  Badge,
  Button,
  Card,
  Container,
  Input,
  Section,
  SectionTitle,
  Select,
  Textarea,
} from './components'

function App() {
  return (
    <div className="app-shell">
      <Container>
        <Section>
          <div className="app-hero">
            <Badge label="NEEX Design System" variant="outline" />

            <div className="app-hero-copy">
              <SectionTitle
                title="Sistema visual premium para a marca"
                description="Uma base reutilizável para websites, apresentações, social media e interfaces da NEEX Creative."
              />
            </div>

            <div className="app-actions">
              <Button label="Começar projeto" />
              <Button label="Ver componentes" variant="secondary" />
              <Button label="Saiba mais" variant="ghost" />
            </div>
          </div>
        </Section>

        <Section>
          <div className="app-grid">
            <Card
              eyebrow="Foundation"
              title="Tokens da marca"
              description="Cores, tipografia, espaçamentos e regras visuais centralizadas em um único sistema."
            />
            <Card
              eyebrow="Components"
              title="UI reutilizável"
              description="Botões, cards e blocos prontos para acelerar criação e manter consistência."
            />
          </div>
        </Section>

        <Section>
          <div className="app-form-demo">
            <SectionTitle
              eyebrow="Form Elements"
              title="Campos reutilizáveis"
              description="Inputs, selects e textareas para landing pages, formulários e interfaces."
            />

            <div className="app-form-grid">
              <Input label="Nome" placeholder="Digite seu nome" />
              <Input label="Email" placeholder="Digite seu email" />
              <Select
                label="Serviço"
                options={[
                  'Branding',
                  'Website',
                  'Social Media',
                  'Video Editing',
                ]}
              />
              <Input label="Empresa" placeholder="Nome da empresa" />
            </div>

            <div className="app-form-message">
              <Textarea
                label="Mensagem"
                placeholder="Descreva o que você precisa"
                rows={6}
              />
            </div>
          </div>
        </Section>
      </Container>
    </div>
  )
}

export default App