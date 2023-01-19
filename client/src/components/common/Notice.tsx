import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { noticeMsgAtom } from "../../atom";
import { IProps } from "../../types/common/notice";
import NoticeView from "./view/NoticeView";

export default function Notice() {
  const [noticeMsg, setNoticeMsg] = useRecoilState(noticeMsgAtom);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoticeMsg(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [noticeMsg]);

  const props: IProps = {
    noticeMsg,
  };
  return <NoticeView {...props} />;
}
