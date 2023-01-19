import { useRecoilState } from "recoil";
import useAuth from "../../hook/auth/useAuth";
import { IAuth } from "../../types/auth/auth";
import { userAtom } from "../../atom";
import SignUpView from "./views/SignUpView";
import { useRef, useState } from "react";

export default function SignUp() {
  const [user, setUser] = useRecoilState(userAtom);
  const [passwordNotice, setPasswordNotice] = useState<string | null>(null);
  const [confirmNotice, setConfirmNotice] = useState<string | null>(null);
  const auth = useAuth();
  const signUpRef = useRef<HTMLFormElement>(null);
  const signUpProps: IAuth = {
    onSubmit: (e) => {
      e.preventDefault();
      auth.signUp(user);
      if (!signUpRef) return;
      signUpRef?.current?.reset();
    },
    onChange: (e) => {
      const {
        currentTarget: { name, value },
      } = e;
      const password = name === "password" && value;
      const confirmPassword = name === "confirmPassword" && value;

      if (password && password.length < 8) {
        setPasswordNotice("비밀번호는 8자리 이상 작성해주세요.");
      } else {
        setPasswordNotice(null);
      }
      if (confirmPassword && password !== confirmPassword) {
        setConfirmNotice("비밀번호가 같지 않습니다.");
      } else {
        setConfirmNotice(null);
      }
      setUser({ ...user, [name]: value });
    },
    user,
    passwordNotice,
    confirmNotice,
    signUpRef,
  };

  return <SignUpView {...signUpProps} />;
}
