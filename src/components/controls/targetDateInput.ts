import { createInput } from "../labelAndInput";
import { padTo2Digits } from "../../utils/util";

const date = new Date();
const targetDateInput: HTMLInputElement = createInput(
  "date",
  "tDate-input",
  ["form-control", "form-child", "mb-2"],
  false,
  [
    [
      "min",
      `${date.getFullYear()}-${padTo2Digits(
        date.getMonth() + 1
      )}-${date.getDate()}`,
    ],
    ["max", "9999-12-31"],
  ]
);

export default targetDateInput