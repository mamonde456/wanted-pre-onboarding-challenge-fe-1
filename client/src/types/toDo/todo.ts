import { Dispatch, RefObject, SetStateAction } from "react";

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

export interface ITodoOnFnProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
export interface IGetTodosProps {
  setId: Dispatch<SetStateAction<string | null>>;
  todosIsLoading: boolean;
  todos: ITodos[] | undefined;
}

export interface IChangeTodoProps extends ITodoOnFnProps {
  onDelete: () => void;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  isDisabled: boolean;
  isOpen: boolean;
  isLoading: boolean;
  toDo: ITodos | undefined;
  actionType: string;
  titleRef: RefObject<HTMLInputElement> | null;
  contentRef: RefObject<HTMLInputElement> | null;
}

export interface ICreateToDoProps extends ITodoOnFnProps {
  formRef: RefObject<HTMLFormElement> | null;
}
