import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { createTodoApi } from "../../api/createTodo";
import { isChange, noticeMsgAtom } from "../../atom";
import useCreate from "../../hook/mutation/useCreate";
import { ITodo } from "../../types/todo";

const Form = styled.form`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0px;
  #button {
    width: 100%;
    padding: 5px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
  }
  p {
    input {
      width: 100%;
    }
  }
`;

export default function CreateTodoList() {
  const [toDo, setTodo] = useState<ITodo>({
    title: "",
    content: "",
  });
  const createTodo = useCreate();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo.mutate(toDo);
    if (!formRef) return;
    formRef?.current?.reset();
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setTodo({ ...toDo, [name]: value });
  };
  return (
    <>
      <Form ref={formRef} onSubmit={onSubmit}>
        <p>
          <label htmlFor="title">title</label>
          <input type="text" id="title" name="title" onChange={onChange} />
        </p>
        <p>
          <label htmlFor="content">content</label>
          <input type="text" id="content" name="content" onChange={onChange} />
        </p>
        <input id="button" type="submit" value="Create To do" />
      </Form>
    </>
  );
}
