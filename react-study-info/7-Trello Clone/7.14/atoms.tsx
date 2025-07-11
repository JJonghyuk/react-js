import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoStats = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    doing: [],
    done: [],
  },
});
