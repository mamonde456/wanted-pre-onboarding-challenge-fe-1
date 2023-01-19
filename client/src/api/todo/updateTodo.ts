import { INewTodo } from "../../types/toDo/todo";

export const updateTodoApi = async ({
  title,
  content,
  token,
  id,
}: INewTodo) => {
  const response = await fetch(`/todos/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ title, content }),
  });
  return await response.json();
};
