import './Badge.css'

type BadgeProps = {
  label: string
  variant?: 'default' | 'dark' | 'outline'
}

function Badge({ label, variant = 'default' }: BadgeProps) {
  return <span className={`neex-badge neex-badge--${variant}`}>{label}</span>
}

export default Badge