import { useRecoilState } from "recoil";
import { userAtom } from "../../atom";
import SignInView from "./views/SignInView";
import useAuth from "../../hook/auth/useAuth";
import { IAuth } from "../../types/auth/auth";
import { useRef } from "react";

export default function SignIn() {
  const [user, setUser] = useRecoilState(userAtom);
  const auth = useAuth();
  const signInRef = useRef<HTMLFormElement>(null);
  const signInProps: IAuth = {
    onSubmit: (e) => {
      e.preventDefault();
      auth.signIn(user);
      if (!signInRef) return;
      signInRef?.current?.reset();
    },
    onChange: (e) => {
      const {
        currentTarget: { name, value },
      } = e;
      setUser({ ...user, [name]: value });
    },
    user,
    signInRef,
  };
  return <SignInView {...signInProps} />;
}
