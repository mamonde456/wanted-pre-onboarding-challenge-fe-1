import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLogged, todoId } from "../atom";
import CreateTodo from "../components/toDo/CreateTodo";
import GetTodos from "../components/toDo/GetTodos";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 28px;
  }
`;

const BoxList = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 400px;
  height: 500px;
  padding: 10px;
  border: solid 1px black;
  border-radius: 10px;
`;

const ToDosBox = styled.div`
  height: 450px;
  position: relative;
`;

const TextBox = styled.div`
  padding: 10px;
  font-size: 18px;
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
              <CreateTodo />
            </ToDosBox>
          ) : (
            <TextBox>
              <p>로그인 해주세요</p>
            </TextBox>
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
