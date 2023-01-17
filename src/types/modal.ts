import { ITodo } from "./todo";

export interface IModal {
  setIsSelete: (state: boolean) => void;
  setIsModalOpen: (state: boolean) => void;
  toDo: ITodo;
}
