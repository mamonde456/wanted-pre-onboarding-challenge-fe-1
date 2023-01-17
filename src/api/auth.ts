import { IUser } from "../types/auth";
export const userAPi = async ({ email, password }: IUser, login?: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${
      login === "login" ? "login" : "create"
    }`,
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
  return await response.json();
};
