import styled from "styled-components";
import { IModal } from "../../../types/modal";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  padding: 10px;
  background-color: white;
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding: 10px;
  }
  p {
    padding: 10px;
  }
`;
const Title = styled.p`
  font-size: 18px;
`;

export default function ModalView({
  setIsSelete,
  setIsModalOpen,
  toDo,
}: IModal) {
  return (
    <Wrapper>
      <div>
        <Title>{toDo.title}</Title>
        <p>{toDo.content}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setIsSelete(true);
            setIsModalOpen(false);
          }}
        >
          예
        </button>
        <button
          onClick={() => {
            setIsSelete(false);
            setIsModalOpen(false);
          }}
        >
          아니오
        </button>
      </div>
    </Wrapper>
  );
}
