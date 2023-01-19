import { atom } from "recoil";
import { IUser } from "./types/auth/auth";

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

export const todoId = atom<string | null>({
  key: "todoId",
  default: null,
});

export const isChange = atom<boolean>({
  key: "isChange",
  default: false,
});

export const isChoosen = atom<boolean>({
  key: "isModalChoosen",
  default: false,
});

export const isDisabledAtom = atom<boolean>({
  key: "isDisabled",
  default: false,
});

export const isModalOpenAtom = atom<boolean>({
  key: "ismodalOpen",
  default: false,
});

export const noticeMsgAtom = atom<string | null>({
  key: "errorMsg",
  default: null,
});
