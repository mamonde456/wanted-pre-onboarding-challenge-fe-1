import { useQuery } from "@tanstack/react-query";
import { getTodoByIdApi } from "../../api/todo/getTodoById";
import { ITodos } from "../../types/toDo/todo";

export default function useGetTodoById(
  id: string | null,
  token: string | undefined
) {
  const { isLoading, data } = useQuery<ITodos>(["todo", id], () => {
    try {
      return getTodoByIdApi(token || "", id || "");
    } catch (err) {
      throw Error("찾을 수 없습니다.");
    }
  });
  return { isLoading, data };
}
