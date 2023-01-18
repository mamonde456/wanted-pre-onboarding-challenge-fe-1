import { Outlet, useMatch } from "react-router-dom";
import SignIn from "../components/auth/SignIn";

export default function Login() {
  const signUpMatch = useMatch("/auth/sign-up");
  return signUpMatch ? <Outlet /> : <SignIn />;
}
