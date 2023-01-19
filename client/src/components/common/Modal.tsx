import { useSetRecoilState } from "recoil";
import { isChoosen, isModalOpenAtom } from "../../atom";
import { IModalProps, IModalViewProps } from "../../types/common/modal";
import ModalView from "./view/ModalView";

export function Modal({ title: toDoTitle, actionType }: IModalProps) {
  const setIsSelete = useSetRecoilState(isChoosen);
  const setIsModalOpen = useSetRecoilState(isModalOpenAtom);

  const modalProps: IModalViewProps = {
    setIsSelete,
    setIsModalOpen,
    toDoTitle,
    actionType,
  };

  return <ModalView {...modalProps} />;
}
