import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isChoosen, isModalOpenAtom } from "../atom";
import useModal from "../hook/common/useModal";
import { ITodo } from "../types/todo";
import ModalView from "./common/view/ModalView";

interface IModalType {
  title: string;
  actionType: string;
}

export function Modal({ title: toDoTitle, actionType }: IModalType) {
  const [toDo, setToDo] = useState({
    title: toDoTitle,
    content: "",
  });
  const setIsSelete = useSetRecoilState(isChoosen);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenAtom);
  const modal = useModal();
  const params = useParams();
  useEffect(() => {
    const { title, content } = actionType
      ? modal.update(toDoTitle)
      : modal.remove(toDoTitle);
    setToDo({ title, content });
    console.log(title, content, params);
  }, [params.id]);
  const props = {
    setIsSelete,
    setIsModalOpen,
    toDo,
  };

  return <ModalView {...props} />;
}
