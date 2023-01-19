import { Link } from "react-router-dom";
import styled from "styled-components";
import { IAuth } from "../../../types/auth/auth";
import { emailMatch, passwordMatch } from "../../../until";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
      span {
        color: #f93939;
        font-size: 14px;
      }
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;
export default function SignUpView({
  onChange,
  onSubmit,
  user,
  passwordNotice,
  confirmNotice,
  signUpRef,
}: IAuth) {
  return (
    <Wrapper>
      <form ref={signUpRef} onSubmit={onSubmit}>
        <p>
          <label htmlFor="username">user name</label>
          <Input
            required
            type="text"
            id="username"
            name="username"
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="id">email</label>
          <Input
            required
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
            required
            type="text"
            id="pw"
            name="password"
            onChange={onChange}
            value={user.password}
          />
          {passwordNotice && <span>{passwordNotice}</span>}
        </p>
        <p>
          <label htmlFor="confirmPassword">confirm password</label>
          <Input
            required
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onInput={onChange}
          />
          <span>{confirmNotice}</span>
        </p>

        <p>
          <label htmlFor="location">location</label>
          <Input
            type="text"
            id="location"
            name="location"
            value={user.location}
            onInput={onChange}
          />
        </p>
        <input
          type="submit"
          value="Sing up"
          id="button"
          disabled={
            passwordMatch(user.password) && emailMatch(user.email)
              ? false
              : true
          }
        />
        <hr style={{ width: "100%" }} />
        <Link style={{ padding: "0px 10px" }} to="/auth">
          Sign In
        </Link>
      </form>
    </Wrapper>
  );
}
