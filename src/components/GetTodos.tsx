import React, { useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getTodosApi, ITodo } from "../api";
import { isChange, todoId } from "../atom";

const Todos = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-items: center; */
`;

const Todo = styled.li`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  p {
    display: flex;
    background: red;
  }
`;

export interface ITodos extends ITodo {
  id: string;
  createdAt: string;
  updatedAt: string;
}
export default function GetTodos() {
  const setId = useSetRecoilState<string | undefined>(todoId);
  const isChangeValue = useRecoilValue(isChange);
  const token = localStorage.getItem("token");
  const { isLoading: todosIsLoading, data: todos } = useQuery<ITodos[]>(
    ["todos", isChangeValue],
    () => getTodosApi(token || "")
  );

  return (
    <>
      {todosIsLoading ? (
        <p>...is loading</p>
      ) : (
        <Todos>
          {todos?.map((el: ITodos) => (
            <Todo
              key={el.id}
              data-id={el.id}
              onClick={(event) => setId(event.currentTarget.dataset.id)}
            >
              <Link to={el.id}>
                <span>{el.title}</span>
                <span>{el.createdAt.substring(0, 10)}</span>
              </Link>
            </Todo>
          ))}
        </Todos>
      )}
    </>
  );
}
