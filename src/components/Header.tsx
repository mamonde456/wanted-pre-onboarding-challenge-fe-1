import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLogged } from "../atom";

const Wrapper = styled.header`
  width: 100vw;
  height: 50px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.5);
  position: relative;
  nav {
    padding: 10px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogged);

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  return (
    <Wrapper>
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
