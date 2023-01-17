import { INewTodo } from "../types/todo";

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
