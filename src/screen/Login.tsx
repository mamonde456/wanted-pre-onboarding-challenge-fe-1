import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IUser, userAPi } from "../api";
import { isLogged } from "../atom";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    padding: 10px;
    display: flex;
    flex-direction: column;
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
  const setLoginInit = ({ token }: IData) => {
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
      } else {
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
      </form>
    </Wrapper>
  );
}
