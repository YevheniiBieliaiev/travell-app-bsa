import { IButton } from "../../../data-typing"

export const Button: React.FC<IButton> = ({ children, type, customClass, onClick }) => {
  return (
    <button
      className={customClass}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}