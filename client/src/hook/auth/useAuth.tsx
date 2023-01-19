import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userAPi } from "../../api/auth/auth";
import { isLogged, noticeMsgAtom } from "../../atom";
import { IUser } from "../../types/auth/auth";

export default function useAuth() {
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const navigator = useNavigate();
  const seIstLogged = useSetRecoilState(isLogged);

  const handleToken = (token?: string, message?: string, details?: string) => {
    if (!token) {
      return setNoticeMsg(details || null);
    }
    seIstLogged(true);
    setNoticeMsg(message || null);
    localStorage.setItem("token", token);
    navigator("/");
  };

  async function signIn(user: IUser) {
    const { token, message, details } = await userAPi(user, "login");
    return handleToken(token, message, details);
  }
  async function signUp(user: IUser) {
    const { token, message, details } = await userAPi(user, "create");
    return handleToken(token, message, details);
  }
  const auth = {
    signIn,
    signUp,
  };

  return auth;
}
