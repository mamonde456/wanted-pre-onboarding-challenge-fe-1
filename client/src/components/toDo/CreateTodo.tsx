import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { createTodoApi } from "../../api/createTodo";
import { isChange, noticeMsgAtom } from "../../atom";
import useCreate from "../../hook/mutation/useCreate";
import { ICreateToDoProps, ITodo } from "../../types/todo";
import CreateTodoView from "./views/CreateTodoView";

export default function CreateTodo() {
  const [toDo, setTodo] = useState<ITodo>({
    title: "",
    content: "",
  });
  const createTodo = useCreate();
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const formRef = useRef<HTMLFormElement>(null);
  const CreateToDoProps: ICreateToDoProps = {
    onSubmit: (e) => {
      e.preventDefault();
      if (toDo.title === "" && toDo.content === "")
        return setNoticeMsg("할 일을 입력해주세요.");
      createTodo.mutate(toDo);
      if (!formRef) return;
      formRef?.current?.reset();
      setTodo({ ...toDo, title: "", content: "" });
    },
    onChange: (e) => {
      const {
        currentTarget: { name, value },
      } = e;
      setTodo({ ...toDo, [name]: value.trim() });
    },
    formRef,
  };
  return <CreateTodoView {...CreateToDoProps} />;
}
