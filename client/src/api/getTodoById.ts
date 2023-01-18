import { useSetRecoilState } from "recoil";
import { noticeMsgAtom } from "../atom";

export const getTodoByIdApi = async (token: string, id: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  if (response.status !== 200) throw Error("찾을 수 없습니다.");
  const { data } = await response.json();
  return data;
};
