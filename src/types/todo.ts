import { Dispatch, SetStateAction } from "react";

export interface ITodo {
  title: string;
  content: string;
}

export interface INewTodo extends ITodo {
  id: string;
  token: string;
}

export interface IDelete {
  token: string;
  id: string;
}
export interface ITodos extends ITodo {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IChangeTodoProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  isDisabled: boolean;
  isOpen: boolean;
  isLoading: boolean;
  toDo: ITodos | undefined;
  actionType: string;
}
