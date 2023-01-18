import { ITodo } from "../types/todo";

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
