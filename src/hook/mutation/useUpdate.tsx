import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { updateTodoApi } from "../../api/updateTodo";
import { isChange, noticeMsgAtom, todoId } from "../../atom";
import { INewTodo } from "../../types/todo";

export default function useUpdate() {
  const queryClient = useQueryClient();
  const setChangeTodo = useSetRecoilState(isChange);
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const id = useRecoilValue(todoId);
  return useMutation((newTodo: INewTodo) => updateTodoApi(newTodo), {
    onSuccess: () => {
      setNoticeMsg("할 일을 변경하였습니다.");
      queryClient.invalidateQueries(["todo", id]);
      setChangeTodo((prev) => !prev);
    },
    onError: () => {
      setNoticeMsg("할 일을 변경하는 데 실패했습니다. 당신 잘못이 아니에요.");
    },
  });
}
