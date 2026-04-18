import './ContactForm.css'
import { Input, Select, Textarea, Button } from '..'

type ContactFormProps = {
  title?: string
  buttonText?: string
}

function ContactForm({
  title = 'Fale com a gente',
  buttonText = 'Enviar mensagem',
}: ContactFormProps) {
  return (
    <form className="neex-form">
      <h2 className="neex-form-title">{title}</h2>

      <div className="neex-form-grid">
        <Input label="Nome" placeholder="Seu nome" />
        <Input label="Email" placeholder="Seu email" />

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

      <Textarea label="Mensagem" placeholder="O que você precisa?" rows={5} />

      <Button label={buttonText} />
    </form>
  )
}

export default ContactForm