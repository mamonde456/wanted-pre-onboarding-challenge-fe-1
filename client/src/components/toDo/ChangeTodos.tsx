import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isChoosen, isModalOpenAtom, noticeMsgAtom, todoId } from "../../atom";
import { IChangeTodoProps, ITodo } from "../../types/toDo/todo";
import useDelete from "../../hook/mutation/useDelete";
import useUpdate from "../../hook/mutation/useUpdate";
import useGetTodoById from "../../hook/query/useGetTodoById";
import ChangeTodoView from "./views/ChangeTodoView";

export default function ChangeTodos() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [actionType, setActionType] = useState("");
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenAtom);
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const isModalSelete = useRecoilValue(isChoosen);
  const id = useRecoilValue(todoId) || "";
  const token = localStorage.getItem("token") || "";
  const { isLoading, data: toDo } = useGetTodoById(id, token);
  const params = useParams();
  const deleteTodo = useDelete();
  const updateTodo = useUpdate();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const [newToDo, setNewToDo] = useState<ITodo>({
    title: "",
    content: "",
  });

  useEffect(() => {
    setIsDisabled(false);
    setIsOpen(false);
  }, [params.id]);

  useEffect(() => {
    const config = {
      ...newToDo,
      id,
      token,
    };
    if (isModalSelete && actionType === "delete")
      return deleteTodo.mutate(config);
    if (isModalSelete && actionType === "update")
      return updateTodo.mutate(config);
  }, [isModalSelete]);

  const ChangeToDoProps: IChangeTodoProps = {
    onSubmit(e) {
      e.preventDefault();
      if (!isDisabled) return;
      if (newToDo.title === "" && newToDo.content === "")
        return setNoticeMsg("빈 값은 할 일로 설정할 수 없습니다.");
      if (titleRef) {
        const titleValue = titleRef?.current?.dataset.set;
        if (newToDo.title === titleValue)
          return setNoticeMsg("값이 변경되지 않았습니다.");
        if (newToDo.title === "") {
          setNewToDo({ ...newToDo, title: titleValue || "" });
        }
      }
      if (contentRef) {
        const contentValue = contentRef?.current?.dataset.set;
        if (newToDo.title === contentValue)
          return setNoticeMsg("값이 변경되지 않았습니다.");
        if (newToDo.content === "") {
          setNewToDo({ ...newToDo, content: contentValue || "" });
        }
      }
      setActionType("update");
      setIsOpen(true);
    },
    onChange(e) {
      const {
        currentTarget: { name, value },
      } = e;

      setNewToDo({
        ...newToDo,
        [name]: value.trim(),
      });
    },
    onDelete() {
      setActionType("delete");
      setIsOpen(true);
    },
    setIsDisabled,
    isDisabled,
    isOpen,
    actionType,
    isLoading,
    toDo,
    titleRef,
    contentRef,
  };

  return <ChangeTodoView {...ChangeToDoProps} />;
}
