import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isLogged, noticeMsgAtom, todoId } from "../../atom";
import { IHeaderProps } from "../../types/common/header";
import HeaderView from "./view/HeaderView";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogged);
  const setId = useSetRecoilState(todoId);
  const noticeMsg = useRecoilValue(noticeMsgAtom);

  const onLogout = () => {
    setIsLoggedIn(false);
    setId(null);
    localStorage.removeItem("token");
  };

  const headerProps: IHeaderProps = {
    onLogout,
    isLoggedIn,
    noticeMsg,
  };
  return <HeaderView {...headerProps} />;
}
