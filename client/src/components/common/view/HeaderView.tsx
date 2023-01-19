import { Link } from "react-router-dom";
import styled from "styled-components";
import { IHeaderProps } from "../../../types/common/header";
import Notice from "../Notice";

const Wrapper = styled.header`
  width: 100vw;
  height: 50px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  nav {
    padding: 10px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;
export default function HeaderView({
  onLogout,
  isLoggedIn,
  noticeMsg,
}: IHeaderProps) {
  return (
    <Wrapper>
      {noticeMsg && <Notice />}
      <nav>
        <p>
          <Link to="/">home</Link>
        </p>
        {!isLoggedIn ? (
          <p>
            <Link to="auth">login</Link>
          </p>
        ) : (
          <p>
            <Link to="/" onClick={onLogout}>
              logout
            </Link>
          </p>
        )}
      </nav>
    </Wrapper>
  );
}
