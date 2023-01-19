import { IDelete } from "../../types/toDo/todo";

export const deleteTodoApi = async ({ token, id }: IDelete) => {
  const response = await fetch(`/todos/${id}`, {
    method: "delete",
    headers: {
      Authorization: token,
    },
  });
  return await response.json();
};
