import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  deleteTodoApi,
  getTodoByIdApi,
  IDelete,
  INewTodo,
  ITodo,
  updateTodoApi,
} from "../api";
import { isChange, isLogged, todoId } from "../atom";
import CreateTodoList from "../components/CreateTodoList";
import GetTodos, { ITodos } from "../components/GetTodos";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxList = styled.div`
  padding: 10px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center; */
`;

const Box = styled.div`
  width: 400px;
  height: 500px;
  padding: 10px;
  border: solid 1px black;
  border-radius: 10px;
`;

export default function Home() {
  const isLoggedIn = useRecoilValue(isLogged);
  const id = useRecoilValue(todoId);
  return (
    <Wrapper>
      <BoxList>
        <Box>
          <h1>To do list</h1>

          {isLoggedIn ? (
            <>
              <GetTodos />
              <CreateTodoList />
            </>
          ) : (
            <p>로그인 해주세요</p>
          )}
        </Box>
        {id && (
          <Box>
            <Outlet />
          </Box>
        )}
      </BoxList>
    </Wrapper>
  );
}
