import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { deleteTodoApi } from "../../api/deleteTodo";
import { isChange, noticeMsgAtom, todoId } from "../../atom";
import { IDelete } from "../../types/todo";

export default function useDelete() {
  const queryClient = useQueryClient();
  const setChangeTodo = useSetRecoilState(isChange);
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const id = useRecoilValue(todoId);
  return useMutation((config: IDelete) => deleteTodoApi(config), {
    onSuccess: () => {
      setNoticeMsg("할 일을 삭제했습니다.");
      queryClient.invalidateQueries(["todo", id]);
      setChangeTodo((prev) => !prev);
    },
    onError: () => {
      setNoticeMsg("할 일을 삭제하는 데 실패했습니다. 다시 시도해주세요.");
    },
  });
}
