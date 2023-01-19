import styled from "styled-components";
import { ICreateToDoProps } from "../../../types/toDo/todo";

const Form = styled.form`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0px;
  #button {
    padding: 10px;
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    position: absolute;
    top: -30px;
    right: 10px;
  }
  p {
    input {
      width: 100%;
    }
  }
`;

export default function CreateTodoView({
  formRef,
  onSubmit,
  onChange,
}: ICreateToDoProps) {
  return (
    <Form ref={formRef} onSubmit={onSubmit}>
      <input id="button" type="submit" value="Create To do" />
      <p>
        <label htmlFor="title">title</label>
        <input
          maxLength={28}
          type="text"
          id="title"
          name="title"
          onChange={onChange}
        />
      </p>
      <p>
        <label htmlFor="content">content</label>
        <input
          maxLength={400}
          type="text"
          id="content"
          name="content"
          onChange={onChange}
        />
      </p>
    </Form>
  );
}
