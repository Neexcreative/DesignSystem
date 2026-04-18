import './Textarea.css'

type TextareaProps = {
  label: string
  placeholder?: string
  rows?: number
}

function Textarea({ label, placeholder, rows = 5 }: TextareaProps) {
  return (
    <label className="neex-textarea-field">
      <span className="neex-textarea-label">{label}</span>
      <textarea
        className="neex-textarea"
        placeholder={placeholder}
        rows={rows}
      />
    </label>
  )
}

export default Textarea