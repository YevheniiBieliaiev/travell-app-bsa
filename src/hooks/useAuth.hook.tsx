import { useState } from "react";
import { IUseAuth } from "../data-typing";

function useAuth(): IUseAuth {
  const [isLogin, setIsLogin] = useState(false);

  const login = (): void => {
    setIsLogin(true);
  }

  const logout = (): void => {
    setIsLogin(false);
  }

  return { isLogin, login, logout }
}

export {
  useAuth
}