import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutesInputValue = get(minuteState);
    return minutesInputValue / 60;
  },
  set: ({ set }, hoursValue) => {
    const minutesHoursInput = Number(hoursValue) * 60;
    set(minuteState, minutesHoursInput);
  },
});
