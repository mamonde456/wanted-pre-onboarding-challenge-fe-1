import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { deleteTodoApi } from "../../api/deleteTodo";
import { isChange, isChoosen, noticeMsgAtom, todoId } from "../../atom";
import { IDelete } from "../../types/todo";

export default function useDelete() {
  const queryClient = useQueryClient();
  const setChangeTodo = useSetRecoilState(isChange);
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const setIsModalSelete = useSetRecoilState(isChoosen);
  const setToDoId = useSetRecoilState(todoId);
  const id = useRecoilValue(todoId);
  const navigator = useNavigate();
  return useMutation((config: IDelete) => deleteTodoApi(config), {
    onSuccess: () => {
      setNoticeMsg("할 일을 삭제했습니다.");
      queryClient.invalidateQueries(["todo", id]);
      setChangeTodo((prev) => !prev);
      setIsModalSelete(false);
      setToDoId(null);
      navigator("/");
    },
    onError: () => {
      setNoticeMsg("할 일을 삭제하는 데 실패했습니다. 다시 시도해주세요.");
    },
  });
}
