import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { getTodoByIdApi } from "../../api/getTodoById";
import { todoId } from "../../atom";
import { ITodos } from "../../types/todo";

export default function useGetTodoById(
  id: string | null,
  token: string | undefined
) {
  const { isLoading, data } = useQuery<ITodos>(["todo", id], () =>
    getTodoByIdApi(token || "", id || "")
  );
  return { isLoading, data };
}
