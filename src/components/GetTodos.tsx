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
  width: 100%;
  max-height: 320px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  /* align-items: center; */
`;

const Todo = styled.li`
  padding: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
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
                <Box>
                  <span>{el.title}</span>
                  <span>{el.createdAt.substring(0, 10)}</span>
                </Box>
              </Link>
            </Todo>
          ))}
        </Todos>
      )}
    </>
  );
}
