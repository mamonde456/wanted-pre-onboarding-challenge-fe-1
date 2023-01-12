import React from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../atom";

export default function SignUp() {
  const [user, setUser] = useRecoilState(userAtom);
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <p>
        <label htmlFor="confirmPassword">confirm password</label>
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          onChange={onChange}
        />
      </p>
      <p>
        <label htmlFor="username">user name</label>
        <input type="text" id="username" name="username" onChange={onChange} />
      </p>
      <p>
        <label htmlFor="location">location</label>
        <input type="text" id="location" name="location" onChange={onChange} />
      </p>
    </>
  );
}
