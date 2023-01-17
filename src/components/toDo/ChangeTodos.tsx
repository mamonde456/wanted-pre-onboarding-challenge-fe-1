import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { isChoosen, isModalOpenAtom, todoId } from "../../atom";
import { Modal } from "../Modal";
import { IChangeTodoProps, ITodo, ITodos } from "../../types/todo";
import { getTodoByIdApi } from "../../api/getTodoById";
import useDelete from "../../hook/mutation/useDelete";
import useUpdate from "../../hook/mutation/useUpdate";
import useGetTodoById from "../../hook/query/useGetTodoById";
import useModal from "../../hook/common/useModal";

export default function ChangeTodos() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [actionType, setActionType] = useState("");
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenAtom);
  const [isModalSelete, setIsModalSelete] = useRecoilState(isChoosen);
  const id = useRecoilValue(todoId) || "";
  const token = localStorage.getItem("token") || "";
  const { isLoading, data: toDo } = useGetTodoById(id, token);
  const params = useParams();
  const deleteTodo = useDelete();
  const updateTodo = useUpdate();
  const [newToDo, setNewToDo] = useState<ITodo>({
    title: "",
    content: "",
  });

  useEffect(() => {
    setIsDisabled(false);
  }, [params.id]);

  useEffect(() => {
    const config = {
      ...newToDo,
      id,
      token,
    };
    if (isModalSelete && actionType === "delete") {
      console.log("test");
      return deleteTodo.mutate(config);
    } else if (isModalSelete && actionType === "update") {
      return updateTodo.mutate(config);
    }
    setIsModalSelete(false);
  }, [isModalSelete]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isDisabled) return;
    e.preventDefault();
    setActionType("update");
    setIsOpen(true);
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = e;

    setNewToDo({
      ...newToDo,
      [name]: value,
    });
  };
  const modal = useModal();
  const onDelete = () => {
    setActionType("delete");
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && <Modal title={toDo?.title || ""} actionType={actionType} />}
      {isLoading ? (
        <p>...is loading</p>
      ) : (
        <>
          <div>
            <p>{toDo?.title}</p>
            <p>{toDo?.content}</p>
            <p>{toDo?.createdAt}</p>
            <p>{toDo?.updatedAt}</p>
          </div>
          <div>
            <button onClick={onDelete}>delete</button>
            <button onClick={() => setIsDisabled((prev) => !prev)}>
              {isDisabled ? "Cancel" : "Edit Todo"}
            </button>
          </div>
          {isDisabled && (
            <>
              <form onSubmit={onSubmit}>
                <p>
                  <label htmlFor="title">title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={onChange}
                    defaultValue={toDo?.title}
                  />
                </p>
                <p>
                  <label htmlFor="content">content</label>
                  <input
                    type="text"
                    id="content"
                    name="content"
                    onChange={onChange}
                    defaultValue={toDo?.content}
                  />
                </p>
                <input type="submit" value="Update To do" />
              </form>
            </>
          )}
        </>
      )}
    </>
  );
}
