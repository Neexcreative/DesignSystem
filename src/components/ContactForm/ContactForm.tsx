import './ContactForm.css'
import { Input, Select, Textarea, Button } from '..'

type ContactFormProps = {
  title?: string
  buttonText?: string
  serviceOptions?: string[]
}

function ContactForm({
  title = 'Fale com a gente',
  buttonText = 'Enviar mensagem',
  serviceOptions = ['Branding', 'Website', 'Social Media', 'Video Editing'],
}: ContactFormProps) {
  return (
    <form className="neex-form">
      <h2 className="neex-form-title">{title}</h2>

      <div className="neex-form-grid">
        <Input label="Nome" placeholder="Seu nome" />
        <Input label="Email" placeholder="Seu email" />

        <Select label="Serviço" options={serviceOptions} />

        <Input label="Empresa" placeholder="Nome da empresa" />
      </div>

      <Textarea label="Mensagem" placeholder="O que você precisa?" rows={5} />

      <Button label={buttonText} type="submit" fullWidth />
    </form>
  )
}

export default ContactForm