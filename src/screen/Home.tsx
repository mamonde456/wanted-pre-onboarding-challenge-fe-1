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
  margin-top: 100px;
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

const ToDosBox = styled.div`
  height: 460px;
  position: relative;
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
            <ToDosBox>
              <GetTodos />
              <CreateTodoList />
            </ToDosBox>
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
