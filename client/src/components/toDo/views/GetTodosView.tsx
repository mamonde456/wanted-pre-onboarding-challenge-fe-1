import { Link } from "react-router-dom";
import styled from "styled-components";
import { IGetTodosProps, ITodos } from "../../../types/toDo/todo";

const Todos = styled.ul`
  width: 100%;
  max-height: 310px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  ::-webkit-scrollbar {
    width: 5px;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: black;
  }
`;

const Todo = styled.li`
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  a {
    display: block;
    height: 50px;
    padding: 10px;
  }
  span:first-child {
    width: 220px;
    word-break: break-all;
  }
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function GetTodosView({
  setId,
  todosIsLoading,
  todos,
}: IGetTodosProps) {
  return (
    <>
      {todosIsLoading ? (
        <p>...is loading</p>
      ) : (
        <Todos>
          {todos?.map((el: ITodos) => (
            <Todo key={el.id} onClick={() => setId(el.id || null)}>
              <Link to={el.id}>
                <Box>
                  <span>{el?.title}</span>
                  <span>{el?.createdAt.substring(0, 10)}</span>
                </Box>
              </Link>
            </Todo>
          ))}
        </Todos>
      )}
    </>
  );
}
