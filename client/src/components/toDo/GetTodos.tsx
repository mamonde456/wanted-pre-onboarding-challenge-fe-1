import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getTodosApi } from "../../api/getTodos";
import { isChange, todoId } from "../../atom";
import { IGetTodosProps, ITodos } from "../../types/todo";
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
