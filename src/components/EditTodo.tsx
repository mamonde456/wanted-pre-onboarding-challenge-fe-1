import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { deleteTodoApi, IDelete, INewTodo, updateTodoApi } from "../api";
import { isChange, noticeMsgAtom, todoId } from "../atom";

export function UpdateTodo() {
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

export function DeleteTodo() {
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
      setNoticeMsg("할 일을 삭제하는 데 실패했습니다. 당신 잘못이 아니에요.");
    },
  });
}
