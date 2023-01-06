import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { createTodoApi, ITodo } from "../api";
import { isChange } from "../atom";

export default function CreateTodoList() {
  const setChangeTodo = useSetRecoilState(isChange);
  const [createTodo, setCreateTodo] = useState<ITodo>({
    title: "",
    content: "",
  });
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const data = await createTodoApi(createTodo, token || "");
    if (data) {
      console.log("성공", data);
      setChangeTodo((prev) => !prev);
      event.currentTarget.reset();
    }
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setCreateTodo({ ...createTodo, [name]: value });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="title">title</label>
          <input type="text" id="title" name="title" onChange={onChange} />
        </p>
        <p>
          <label htmlFor="content">content</label>
          <input type="text" id="content" name="content" onChange={onChange} />
        </p>
        <input type="submit" value="Create To do" />
      </form>
    </>
  );
}
