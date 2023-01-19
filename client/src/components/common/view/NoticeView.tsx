import styled from "styled-components";
import { IProps } from "../../../types/common/notice";

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

export default function NoticeView({ noticeMsg }: IProps) {
  return <>{noticeMsg && <Notification>{noticeMsg}</Notification>}</>;
}
