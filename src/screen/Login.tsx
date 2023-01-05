import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IUser, userAPi } from "../api";
import { isLogged } from "../atom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Notification = styled.p`
  width: 100vw;
  height: 30px;
  background-color: black;
  text-align: center;
  line-height: 30px;
  color: white;
  position: absolute;
  top: 0;
`;

interface IData {
  message: string;
  token: string;
  details?: string;
}

export default function Login() {
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState<string | undefined>();
  const seIstLogged = useSetRecoilState(isLogged);
  const navigator = useNavigate();

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const emailMatch = (email: string) => {
    return emailRegEx.test(email);
  };

  const passwordMatch = (password: string) => {
    return passwordRegEx.test(password);
  };

  const setLoginInit = ({ message, token }: IData) => {
    setMsg(message);
    seIstLogged(true);
    localStorage.setItem("token", token);
    navigator("/");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // login api
    const data = await userAPi(user, "login");
    if (data.token) {
      setLoginInit(data);
    } else {
      // signUp api
      const data = await userAPi(user);
      if (data.token) {
        setLoginInit(data);
      }
    }
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;

    setUser({ ...user, [name]: value });
  };
  return (
    <Wrapper>
      {msg && <Notification>{msg}</Notification>}
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="id">email</label>
          <input
            type="text"
            id="id"
            name="email"
            onChange={onChange}
            value={user.email}
          />
        </p>
        <p>
          <label htmlFor="pw">password</label>
          <input
            type="text"
            id="pw"
            name="password"
            onChange={onChange}
            value={user.password}
          />
        </p>
        <input
          type="submit"
          value="login"
          disabled={
            passwordMatch(user.password) && emailMatch(user.email)
              ? false
              : true
          }
        />
      </form>
    </Wrapper>
  );
}
