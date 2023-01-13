import React from "react";
import { Link, useMatch } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userAPi } from "../api";
import { isLogged, noticeMsgAtom, userAtom } from "../atom";
import { emailMatch, passwordMatch } from "../until";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    padding: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 10px;
    #button {
      border-radius: 10px;
      border: solid 1px rgba(0, 0, 0, 0.5);
      padding: 10px;
    }
    p {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;

export default function SignIn() {
  const [user, setUser] = useRecoilState(userAtom);
  const seIstLogged = useSetRecoilState(isLogged);
  const setNoticeMSg = useSetRecoilState(noticeMsgAtom);
  const navigator = useNavigate();
  const signUpMatch = useMatch("/auth/sign-up");

  const handleToken = (token?: string, message?: string, details?: string) => {
    if (!token) {
      console.clear();
      return setNoticeMSg(details || null);
    }
    seIstLogged(true);
    setNoticeMSg(message || null);
    localStorage.setItem("token", token);
    navigator("/");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user, signUpMatch);
    const { password, confirmPassword } = user;
    if (password !== confirmPassword)
      return setNoticeMSg("비밀번호가 같지 않습니다.");

    if (signUpMatch) {
      const { token, message, details } = await userAPi(user, "create");
      return handleToken(token, message, details);
    }
    // login api
    const { token, message, details } = await userAPi(user, "login");
    handleToken(token, message, details);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;

    setUser({ ...user, [name]: value });
  };
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="id">email</label>
          <Input
            type="text"
            id="id"
            name="email"
            onChange={onChange}
            value={user.email}
          />
        </p>
        <p>
          <label htmlFor="pw">password</label>
          <Input
            type="text"
            id="pw"
            name="password"
            onChange={onChange}
            value={user.password}
          />
        </p>
        <Outlet context={setUser} />
        <input
          type="submit"
          value="Login / Sing up"
          id="button"
          disabled={
            passwordMatch(user.password) && emailMatch(user.email)
              ? false
              : true
          }
        />
        <hr />
        <Link to="sign-up">Sign Up</Link>
      </form>
    </Wrapper>
  );
}
