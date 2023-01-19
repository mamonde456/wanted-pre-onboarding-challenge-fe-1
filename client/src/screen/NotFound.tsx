import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: 100px;
  font-weight: 700;
  margin: 0;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Title>404</Title>
      <p>페이지를 찾을 수 없습니다.</p>
    </Wrapper>
  );
}
