import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isChoosen, isModalOpenAtom } from "../../atom";
import { IModal } from "../../types/modal";
import ModalView from "./view/ModalView";

interface IModalType {
  title: string;
  actionType: string;
}

export function Modal({ title: toDoTitle, actionType }: IModalType) {
  const setIsSelete = useSetRecoilState(isChoosen);
  const setIsModalOpen = useSetRecoilState(isModalOpenAtom);

  const modalProps: IModal = {
    setIsSelete,
    setIsModalOpen,
    toDoTitle,
    actionType,
  };

  return <ModalView {...modalProps} />;
}
