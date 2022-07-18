import { IForm } from "../../../data-typing"


export const Form: React.FC<IForm> = ({ customClassName, children }) => {
  return (
    <form className={customClassName} autoComplete='off'>
      {children}
    </form>
  )
}