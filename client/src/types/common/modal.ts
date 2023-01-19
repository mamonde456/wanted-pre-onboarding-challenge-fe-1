import { ITodo } from "../toDo/todo";

export interface IModalViewProps {
  setIsSelete: (state: boolean) => void;
  setIsModalOpen: (state: boolean) => void;
  toDoTitle: string;
  actionType: string;
}
export interface IModalProps {
  title: string;
  actionType: string;
}
