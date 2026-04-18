import './Input.css'

type InputProps = {
  label: string
  placeholder?: string
}

function Input({ label, placeholder }: InputProps) {
  return (
    <label className="neex-input-field">
      <span className="neex-input-label">{label}</span>
      <input className="neex-input" placeholder={placeholder} />
    </label>
  )
}

export default Input