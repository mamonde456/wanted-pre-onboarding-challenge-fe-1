import { atom } from "recoil";

export const isLogged = atom<boolean>({
  key: "isLogged",
  default: false,
});

export const todoId = atom<string | undefined>({
  key: "todoId",
  default: "",
});

export const isChange = atom<boolean>({
  key: "isChange",
  default: false,
});

export const errorMsg = atom<String | null>({
  key: "errorMsg",
  default: null,
});
