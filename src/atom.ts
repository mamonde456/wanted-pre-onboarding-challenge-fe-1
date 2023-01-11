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

export const isChoosen = atom<boolean>({
  key: "isModalChoosen",
  default: false,
});

export const isModalOpen = atom<boolean>({
  key: "ismodalOpen",
  default: false,
});
