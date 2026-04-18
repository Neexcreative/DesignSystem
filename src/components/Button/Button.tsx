import './Button.css'

type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

function Button({ label, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`neex-button neex-button--${variant}`}>
      {label}
    </button>
  )
}

export default Button