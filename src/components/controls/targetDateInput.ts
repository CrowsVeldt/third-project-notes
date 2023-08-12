import newElement from "../../utils/newElement";
import { padTo2Digits } from "../../utils/util";
import { updateErrorMessage } from "../errorMessage";

const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

const toInputDateFormat = (
  year: number,
  month: number,
  day: number
): string => {
  return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`;
};

function validDate(date: string): string {
  const inputDate: string[] = date.split("-");
  const inputYear: number = parseInt(inputDate[0]);
  const inputMonth: number = parseInt(inputDate[1]);
  const inputDay: number = parseInt(inputDate[2]);

    if (inputYear < currentYear) {
      updateErrorMessage('Year given too early', 'red')
      return "";
    } else if (inputMonth < currentMonth && inputYear === currentYear) {
      updateErrorMessage('Month given too early', 'red')
      return "";
    } else if (
      inputDay < currentDay + 1 &&
      inputMonth === currentMonth &&
      inputYear === currentYear
    ) {
      updateErrorMessage('Day given too early', 'red')
      return "";
    }
    updateErrorMessage('Valid date', 'black')
  return toInputDateFormat(inputYear, inputMonth, inputDay);
}

const targetDateInput: HTMLInputElement = newElement({
  type: "input",
  id: "tDate-input",
  class: ["form-control", "form-child", "mb-2"],
  props: [
    ["type", "date"],
    ["required", "false"],
    ["min", toInputDateFormat(currentYear, currentMonth, currentDay + 1)],
    ["max", "9999-12-31"],
    ["data-bs-toggle", "tooltip"],
    ["data-bs-placement", "left"],
    [
      "title",
      `Target date must be after ${`${padTo2Digits(currentDay)}-${padTo2Digits(
        currentMonth
      )}-${currentYear}`}`,
    ],
  ],
  eventListener: {
    eventType: "blur",
    listener: () => {
      const element = document.getElementById(
        "tDate-input"
      ) as HTMLInputElement;
      const value = element.value;
      if (value !== "") {
        element.value = validDate(value);
      }
    },
  },
}) as HTMLInputElement;

export default targetDateInput;
