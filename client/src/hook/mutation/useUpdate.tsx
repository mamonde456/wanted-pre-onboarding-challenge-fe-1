import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { updateTodoApi } from "../../api/todo/updateTodo";
import { isChange, isChoosen, noticeMsgAtom, todoId } from "../../atom";
import { INewTodo } from "../../types/toDo/todo";

export default function useUpdate() {
  const queryClient = useQueryClient();
  const setChangeTodo = useSetRecoilState(isChange);
  const setIsModalSelete = useSetRecoilState(isChoosen);
  const setNoticeMsg = useSetRecoilState(noticeMsgAtom);
  const id = useRecoilValue(todoId);

  return useMutation((newTodo: INewTodo) => updateTodoApi(newTodo), {
    onSuccess: () => {
      setNoticeMsg("할 일을 변경하였습니다.");
      queryClient.invalidateQueries(["todo", id]);
      setChangeTodo((prev) => !prev);
      setIsModalSelete(false);
    },
    onError: () => {
      setNoticeMsg("할 일을 변경하는 데 실패했습니다. 당신 잘못이 아니에요.");
    },
  });
}
