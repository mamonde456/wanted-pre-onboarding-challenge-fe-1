import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getTodoByIdApi } from "../../api/getTodoById";
import { todoId } from "../../atom";
import { ITodos } from "../../types/todo";

export default function useGetTodoById(
  id: string | null,
  token: string | undefined
) {
  const { isLoading, data } = useQuery<ITodos>(["todo", id], () => {
    try {
      return getTodoByIdApi(token || "", id || "");
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
  return { isLoading, data };
}
