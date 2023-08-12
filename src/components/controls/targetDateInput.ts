import newElement from "../../utils/newElement";
import { padTo2Digits } from "../../utils/util";

const date = new Date();

function validDate(date: string): boolean {
  const current = new Date();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth() + 1;
  const currentDay = current.getDate();

  const splitDate = date.split("-");
  const dateYear = parseInt(splitDate[0]);
  const dateMonth = parseInt(splitDate[1]);
  const dateDay = parseInt(splitDate[2]);

  if (date !== undefined) {
    if (dateYear > currentYear) {
      return true;
    } else if (dateYear >= currentYear && dateMonth > currentMonth) {
      return true;
    } else if (
      dateYear >= currentYear &&
      dateMonth >= currentMonth &&
      dateDay > currentDay
    ) {
      return true;
    }
  }
  return false;
}

const targetDateInput: HTMLInputElement = newElement({
  type: "input",
  id: "tDate-input",
  class: ["form-control", "form-child", "mb-2"],
  props: [
    ["type", "date"],
    ["required", "false"],
    [
      "min",
      `${date.getFullYear()}-${padTo2Digits(
        date.getMonth() + 1
      )}-${date.getDate()}`,
    ],
    ["max", "9999-12-31"],
  ],
  eventListener: {
    eventType: "keydown",
    listener: (evt?) => {
      const event = evt as KeyboardEvent;
      const element = document.getElementById(
        "tDate-input"
      ) as HTMLInputElement;
      if (element) {
        const value = element.value;
        if (value !== "" && !validDate(value)) {
          evt?.preventDefault();
          return false;
        }
      }
    },
  },
}) as HTMLInputElement;

export default targetDateInput;
