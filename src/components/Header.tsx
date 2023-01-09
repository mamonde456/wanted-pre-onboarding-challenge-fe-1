import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { errorMsg, isLogged } from "../atom";

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

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogged);
  const msg = useRecoilValue(errorMsg);

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  return (
    <Wrapper>
      {msg && <Notification>{msg}</Notification>}
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
