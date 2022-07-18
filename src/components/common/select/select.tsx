import { ISelectBlock } from "../../../data-typing"


export const SelectBlock: React.FC<ISelectBlock> = ({
  customClasses, label, id,
  name, children, onChange,
}) => {
  return (
    <label className={customClasses.labelClassName} htmlFor={id}>
      <span className={customClasses.spanClassName}>{label}</span>
      <select name={name} id={id} onChange={onChange}>
        <option value=''>{name}</option>
        {children}
      </select>
    </label>
  )
}