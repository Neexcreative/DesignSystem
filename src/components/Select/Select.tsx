import './Select.css'

type SelectProps = {
  label: string
  options: string[]
}

function Select({ label, options }: SelectProps) {
  return (
    <label className="neex-select-field">
      <span className="neex-select-label">{label}</span>
      <select className="neex-select" defaultValue="">
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select