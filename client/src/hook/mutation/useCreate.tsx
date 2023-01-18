import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { createTodoApi } from "../../api/createTodo";
import { isChange, noticeMsgAtom } from "../../atom";
import { ITodo } from "../../types/todo";

export default function useCreate() {
  const setIsChangeTodo = useSetRecoilState(isChange);
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const token = localStorage.getItem("token");
  return useMutation((toDo: ITodo) => createTodoApi(toDo, token || ""), {
    onSuccess: (newTodo) => {
      setNoticeMsg(`할 일 ${newTodo.title}가(이) 생성되었습니다.`);
      setIsChangeTodo((prev: boolean) => !prev);
    },
    onError: (err) => {
      setNoticeMsg(`할 일을 생성하지 못했습니다.`);
    },
  });
}
