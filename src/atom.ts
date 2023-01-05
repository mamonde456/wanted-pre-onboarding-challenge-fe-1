import { atom } from "recoil";

export const isLogged = atom<boolean>({
  key: "isLogged",
  default: false,
});
