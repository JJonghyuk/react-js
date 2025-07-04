import { atom, selector } from "recoil";

export const toDoStats = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
});
