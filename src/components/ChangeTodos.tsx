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
  const params = useParams();
  const setChangeTodo = useSetRecoilState(isChange);
  const [todo, setTodo] = useState<ITodo>({
    title: "",
    content: "",
  });

  useEffect(() => {
    setIsDisabled(false);
  }, [params.id]);

  useEffect(() => {
    if (isModalChoosen && modalType.actionType === "delete") {
      const config = {
        id: id || "",
        token: token || "",
      };
      deleteTodoFn.mutate(config);
    } else if (isModalChoosen && modalType.actionType === "update") {
      const newTodo = {
        ...todo,
        id: id || "",
        token: token || "",
      };
      updateTodoFn.mutate(newTodo);
    }
    setIsModalChoosen(false);
  }, [isModalChoosen]);

  const id = useRecoilValue(todoId);
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery<ITodos>(["todo", id], () =>
    getTodoByIdApi(token || "", id || "")
  );

  const updateTodoFn = useMutation(
    (newTodo: INewTodo) => updateTodoApi(newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todo", id]);
        setChangeTodo((prev) => !prev);
      },
      onError: () => {
        console.log("실패");
      },
    }
  );

  const deleteTodoFn = useMutation((config: IDelete) => deleteTodoApi(config), {
    onSuccess: () => {
      console.log("성공");
      queryClient.invalidateQueries(["todo", id]);
      setChangeTodo((prev) => !prev);
    },
  });

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
