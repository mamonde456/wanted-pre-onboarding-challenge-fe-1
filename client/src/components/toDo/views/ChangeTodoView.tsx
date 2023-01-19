import styled from "styled-components";
import { IChangeTodoProps } from "../../../types/toDo/todo";
import { Modal } from "../../common/Modal";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Btn = styled.div`
  padding: 10px;
  display: flex;
  justify-content: end;
  gap: 10px;
  button {
    border: none;
    background: none;
    font-size: 16px;
  }
`;

const Box = styled.div`
  max-height: 280px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  position: relative;
  p:first-child {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p:nth-child(2) {
    width: 100%;
    height: 230px;
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px;
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: black;
    }
  }
  small {
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
  }
`;
const Form = styled.form`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
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

export default function ChangeTodoView({
  onSubmit,
  onChange,
  onDelete,
  setIsDisabled,
  isDisabled,
  isOpen,
  actionType,
  isLoading,
  toDo,
  titleRef,
  contentRef,
}: IChangeTodoProps) {
  return (
    <>
      {isOpen && <Modal title={toDo?.title || ""} actionType={actionType} />}
      {isLoading ? (
        <p>...is loading</p>
      ) : (
        <Wrapper>
          <Btn>
            <button onClick={onDelete}>Delete</button>
            <button onClick={() => setIsDisabled((prev) => !prev)}>
              {isDisabled ? "Cancel" : "Edit Todo"}
            </button>
          </Btn>
          <Box>
            <p>{toDo?.title}</p>
            <p>{toDo?.content}</p>
            <small>생성 시간: {toDo?.createdAt.slice(0, 10)}</small>
            <small>변경 시간: {toDo?.updatedAt.slice(0, 10)}</small>
          </Box>
          {isDisabled && (
            <>
              <Form onSubmit={onSubmit}>
                <input id="button" type="submit" value="Update To do" />
                <p>
                  <label htmlFor="title">title</label>
                  <input
                    maxLength={28}
                    ref={titleRef}
                    type="text"
                    id="title"
                    name="title"
                    onChange={onChange}
                    data-set={toDo?.title}
                    defaultValue={toDo?.title}
                  />
                </p>
                <p>
                  <label htmlFor="content">content</label>
                  <input
                    maxLength={400}
                    ref={contentRef}
                    type="text"
                    id="content"
                    name="content"
                    onChange={onChange}
                    data-set={toDo?.content}
                    defaultValue={toDo?.content}
                  />
                </p>
              </Form>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
}
