import { Link } from "react-router-dom";
import styled from "styled-components";
import { IAuth } from "../../../types/auth";
import { emailMatch, passwordMatch } from "../../../until";

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

export default function SignInView({ onChange, onSubmit, user }: IAuth) {
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
        <hr />
        <Link to="sign-up">Sign Up</Link>
      </form>
    </Wrapper>
  );
}
