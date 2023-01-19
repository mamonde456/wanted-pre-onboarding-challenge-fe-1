import { IUser } from "../../types/auth/auth";
export const userAPi = async ({ email, password }: IUser, login?: string) => {
  const response = await fetch(
    `/users/${login === "login" ? "login" : "create"}`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  if (!response.ok) {
    const config = { details: "이미 존재하는 이메일입니다." };
    return config;
  }
  const data = await response.json();
  return data ? data : response.ok;
};
