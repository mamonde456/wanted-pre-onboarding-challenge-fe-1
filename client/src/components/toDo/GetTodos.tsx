import { useQuery } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getTodosApi } from "../../api/todo/getTodos";
import { isChange, todoId } from "../../atom";
import { IGetTodosProps, ITodos } from "../../types/toDo/todo";
import GetTodosView from "./views/GetTodosView";

export default function GetTodos() {
  const setId = useSetRecoilState(todoId);
  const isChangeValue = useRecoilValue(isChange);
  const token = localStorage.getItem("token");
  const { isLoading: todosIsLoading, data: todos } = useQuery<ITodos[]>(
    ["todos", isChangeValue],
    () => getTodosApi(token || "")
  );
  const GetTodosProps: IGetTodosProps = {
    setId,
    todosIsLoading,
    todos,
  };

  return <GetTodosView {...GetTodosProps} />;
}
