export interface IUser {
  email: string;
  password: string;
  confirmPassword?: string;
  username?: string;
  location?: string;
}

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

export interface ITodo {
  title: string;
  content: string;
}

export const createTodoApi = async (
  { title, content }: ITodo,
  token: string
) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });

  const { data: newTodo } = await response.json();

  return newTodo;
};

export const getTodosApi = async (token: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();

  return data;
};

export const getTodoByIdApi = async (token: string, id: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();
  return data;
};

export interface INewTodo extends ITodo {
  id: string;
  token: string;
}

export const updateTodoApi = async ({
  title,
  content,
  token,
  id,
}: INewTodo) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ title, content }),
  });
  return await response.json();
};

export interface IDelete {
  token: string;
  id: string;
}

export const deleteTodoApi = async ({ token, id }: IDelete) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    method: "delete",
    headers: {
      Authorization: token,
    },
  });
  return await response.json();
};
