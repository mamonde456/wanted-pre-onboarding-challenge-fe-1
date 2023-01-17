import { IDelete } from "../types/todo";

export const deleteTodoApi = async ({ token, id }: IDelete) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    method: "delete",
    headers: {
      Authorization: token,
    },
  });
  return await response.json();
};
