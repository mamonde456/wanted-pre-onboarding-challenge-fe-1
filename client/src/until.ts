const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

export const emailMatch = (email: string) => emailRegEx.test(email);

export const passwordMatch = (password: string) => passwordRegEx.test(password);
