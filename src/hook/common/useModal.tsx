import { useState } from "react";
import { IModal } from "../../types/modal";

export default function useModal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const modal = {
    remove(toDoTitle: string) {
      setTitle(`${toDoTitle}을(를) 삭제할까요?`);
      setContent(`이 동작은 복구할 수 없습니다. 할 일에서 영구히 삭제됩니다.`);
      console.log(title, content);
      return { title, content };
    },
    update(toDoTitle: string) {
      setTitle(`${toDoTitle}을(를) 변경할까요?`);
      setContent(`이 동작은 복구할 수 없습니다. 할 일이 변경됩니다.`);
      return { title, content };
    },
  };

  return modal;
}
