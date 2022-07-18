import { IUserModel, IFindUser, IFindUserResult } from "../data-typing";
import { users } from "../pseudo-db";

export const saveUser = ({ fullName, email, password }: IUserModel): void => {
  const userDTO = {
    fullName,
    email,
    password
  }
  users.push(userDTO);
}

export const findUser = ({ email, password }: IFindUser): IFindUserResult => {
  const user = users.find(user => user.email === email);
  if (user) {
    if (user.password === password) {
      return {
        error: false,
        name: user.fullName
      }
    } else {
      return {
        error: true,
        name: ''
      }
    }
  }
  return {
    error: true,
    name: ''
  }
}

