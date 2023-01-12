import { atom } from "recoil";
import { IUser } from "./api";

export const userAtom = atom<IUser>({
  key: "user",
  default: {
    email: "",
    password: "",
  },
});

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

export const noticeMsgAtom = atom<string | null>({
  key: "errorMsg",
  default: null,
});
