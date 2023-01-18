import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { noticeMsgAtom } from "../../atom";

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

export default function Notice() {
  const [noticeMsg, setNoticeMsg] = useRecoilState(noticeMsgAtom);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoticeMsg(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [noticeMsg]);
  return <>{noticeMsg && <Notification>{noticeMsg}</Notification>}</>;
}
