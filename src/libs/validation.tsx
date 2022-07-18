export const nameValidation = (name: string): boolean => {
  const result = name.length >= 2 && name.length <= 15;
  return result
}

export const emailValidation = (email: string): boolean => {
  const result = /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(email);
  return result;
}

export const passwordValidation = (password: string): boolean => {
  const result = password.length >= 3 && password.length <= 20;
  return result;
}

