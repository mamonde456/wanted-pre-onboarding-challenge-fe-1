import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isChoosen, isModalOpen } from "../atom";

const Notification = styled.p`
  width: 100vw;
  height: 30px;
  background-color: black;
  text-align: center;
  line-height: 30px;
  color: white;
  position: absolute;
  bottom: -30px;
  left: 0;
`;

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

interface IProps {
  actionType: string;
  title: string;
}

export function Modal({ actionType, title: todoTitle }: IProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [is, setIsChoosen] = useRecoilState(isChoosen);
  //   const setIsChoosen = useSetRecoilState(isChoosen);
  const setIsModalOpen = useSetRecoilState(isModalOpen);
  useEffect(() => {
    if (actionType === "delete") {
      setTitle(`${todoTitle}을(를) 삭제할까요?`);
      setText(`이 동작은 복구할 수 없습니다. 할 일에서 영구히 삭제됩니다.`);
    } else {
      setTitle(`${todoTitle}을(를) 변경할까요?`);
      setText(`이 동작은 복구할 수 없습니다. 할 일이 변경됩니다.`);
    }
  }, []);
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        <p>{text}</p>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("Test", is);
            setIsChoosen((prev) => !prev);
            console.log("Test", is);
            setIsModalOpen(false);
          }}
        >
          예
        </button>
        <button
          onClick={() => {
            setIsChoosen(false);
            setIsModalOpen(false);
          }}
        >
          아니오
        </button>
      </div>
    </Wrapper>
  );
}
