import React from "react";

import { Outlet } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { noticeMsgAtom, userAtom } from "../../atom";
import SignInView from "./views/SignInView";
import useAuth from "../../hook/auth/useAuth";
import { IAuth } from "../../types/auth";
import { emailMatch, passwordMatch } from "../../until";

export default function SignIn() {
  const [user, setUser] = useRecoilState(userAtom);
  const auth = useAuth();

  const signInProps: IAuth = {
    onSubmit: (e) => {
      e.preventDefault();
      auth.signIn(user);
    },
    onChange: (e) => {
      const {
        currentTarget: { name, value },
      } = e;
      setUser({ ...user, [name]: value });
    },
    user,
  };
  return <SignInView {...signInProps} />;
}
