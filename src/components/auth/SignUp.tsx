import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import useAuth from "../../hook/useAuth";
import { IAuth } from "../../types/auth";
import { noticeMsgAtom, userAtom } from "../../atom";
import SignUpView from "../views/auth/SignUpView";

export default function SignUp() {
  const [user, setUser] = useRecoilState(userAtom);
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const auth = useAuth();
  const signUpProps: IAuth = {
    onSubmit: (e) => {
      e.preventDefault();
      auth.signUp(user);
    },
    onChange: (e) => {
      const {
        currentTarget: { name, value },
      } = e;
      const { password, confirmPassword } = user;
      if (password !== confirmPassword)
        return setNoticeMsg("비밀번호가 같지 않습니다.");

      setUser({ ...user, [name]: value });
    },
    user,
  };

  return <SignUpView {...signUpProps} />;
}
