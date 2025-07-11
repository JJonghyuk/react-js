import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoStats = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
