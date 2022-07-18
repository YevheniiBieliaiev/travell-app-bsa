import { IInputBlock } from "../../../data-typing"

export const InputBlock: React.FC<IInputBlock> = ({
  customClasses,
  value, label, id,
  type, name, required, min, max,
  placeholder, autocomplete,
  onChange
}) => {

  return (
    <label className={customClasses.labelClassName} htmlFor={id}>
      <span className={customClasses.spanClassName}>{label}</span>
      <input
        value={value}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        required={required}
        min={min}
        max={max}
        onChange={onChange}
      />
    </label>
  )
}