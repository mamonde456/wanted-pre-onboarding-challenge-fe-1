import { ITodo } from "../../types/toDo/todo";

export const createTodoApi = async (
  { title, content }: ITodo,
  token: string
) => {
  const response = await fetch(`/todos`, {
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
