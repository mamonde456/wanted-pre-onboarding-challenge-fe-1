export interface IUser {
  email: string;
  password: string;
}

export const userAPi = async ({ email, password }: IUser, login?: string) => {
  const response = await fetch(
    `http://localhost:8080/users/${login ? "login" : "create"}`,
    {
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  const data = await response.json();
  return data;
};
