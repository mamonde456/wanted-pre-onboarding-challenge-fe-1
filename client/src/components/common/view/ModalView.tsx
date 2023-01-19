import styled from "styled-components";
import { IModalViewProps } from "../../../types/common/modal";

const Wrapper = styled.div`
  width: 320px;
  height: 230px;
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
  word-break: break-all;
  span {
    font-weight: 700;
  }
`;

export default function ModalView({
  setIsSelete,
  setIsModalOpen,
  toDoTitle,
  actionType,
}: IModalViewProps) {
  return (
    <Wrapper>
      <div>
        {actionType === "delete" ? (
          <>
            <Title>
              <span>{toDoTitle}</span>을(를) 삭제할까요?
            </Title>
            <p>이 동작은 복구할 수 없습니다. 할 일에서 영구히 삭제됩니다.</p>
          </>
        ) : (
          <>
            <Title>{toDoTitle}을(를) 변경할까요?</Title>
            <p>이 동작은 복구할 수 없습니다. 할 일이 변경됩니다.</p>
          </>
        )}
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
