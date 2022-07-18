import { createContext } from "react";
import { IAuthContext } from "../data-typing";

function nop(): void { }

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  login: nop,
  logout: nop
});