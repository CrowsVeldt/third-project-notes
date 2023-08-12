import newElement from "../../utils/newElement";
import { padTo2Digits } from "../../utils/util";

const date = new Date();

function validDate (date: string): boolean {
    // make regex for a valid target date
    const valid = new RegExp('')
    if (date !== undefined) {
        if (date.match(valid)) {
            return true
        }
    }
    return false
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
    eventType: 'keydown',
    listener: (evt?) => {
        const event = evt as KeyboardEvent
        // if (!validDate(inputTDate.value)) preventDefault && return
        // else continue
    }
  }
}) as HTMLInputElement;

export default targetDateInput;
