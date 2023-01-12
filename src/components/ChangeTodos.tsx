import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  deleteTodoApi,
  getTodoByIdApi,
  IDelete,
  INewTodo,
  ITodo,
  updateTodoApi,
} from "../api";
import { isChange, isChoosen, isModalOpen, todoId } from "../atom";
import { DeleteTodo, UpdateTodo } from "./EditTodo";
import { ITodos } from "./GetTodos";
import { Modal } from "./Modal";

export default function ChangeTodos() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(isModalOpen);
  const [isModalChoosen, setIsModalChoosen] = useRecoilState(isChoosen);
  const [modalType, setModalType] = useState({
    title: "",
    actionType: "",
  });
  const id = useRecoilValue(todoId);
  const updateTodoFn = UpdateTodo();
  const deleteTodoFn = DeleteTodo();
  const token = localStorage.getItem("token");
  const params = useParams();

  const [todo, setTodo] = useState<ITodo>({
    title: "",
    content: "",
  });
  const { isLoading, data } = useQuery<ITodos>(["todo", id], () =>
    getTodoByIdApi(token || "", id || "")
  );

  useEffect(() => {
    setIsDisabled(false);
  }, [params.id]);

  useEffect(() => {
    const config = {
      ...todo,
      id: id || "",
      token: token || "",
    };
    if (isModalChoosen && modalType.actionType === "delete") {
      deleteTodoFn.mutate(config);
    } else if (isModalChoosen && modalType.actionType === "update") {
      updateTodoFn.mutate(config);
    }
    setIsModalChoosen(false);
  }, [isModalChoosen]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!isDisabled) return;
    event.preventDefault();
    setIsOpen(true);
    setModalType({
      title: data?.title || "",
      actionType: "update",
    });
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onDelete = () => {
    setIsOpen(true);
    setModalType({
      title: data?.title || "",
      actionType: "delete",
    });
  };

  return (
    <>
      {isOpen && (
        <Modal actionType={modalType.actionType} title={modalType.title} />
      )}
      {isLoading ? (
        <p>...is loading</p>
      ) : (
        <>
          <div>
            <p>{data?.title}</p>
            <p>{data?.content}</p>
            <p>{data?.createdAt}</p>
            <p>{data?.updatedAt}</p>
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
                    defaultValue={data?.title}
                  />
                </p>
                <p>
                  <label htmlFor="content">content</label>
                  <input
                    type="text"
                    id="content"
                    name="content"
                    onChange={onChange}
                    defaultValue={data?.content}
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
