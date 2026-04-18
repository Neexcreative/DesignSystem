import './Button.css'

type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  label,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`neex-button neex-button--${variant} ${
        fullWidth ? 'neex-button--full' : ''
      }`}
    >
      {label}
    </button>
  )
}

export default Button