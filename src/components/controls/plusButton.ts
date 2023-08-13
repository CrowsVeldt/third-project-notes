import { formHandler } from "../noteForm";
import newElement from "../../utils/newElement";
import langOptions from "../../utils/textContent";

const plusButton = newElement({
  type: "button",
  id: "plus-button",
  class: ["toggle-button", "button-color", "border", "border-dark", "rounded"],
  props: [
    ["tabindex", "4"],
    ["data-bs-toggle", "tooltip"],
    ["data-bs-placement", "left"],
    ["title", langOptions.english.tooltips.plusButton],
  ],
  eventListener: {
    eventType: "click",
    listener: (evt) => {
      if (evt) {
        formHandler(evt);
      }
    },
  },
}) as HTMLButtonElement;

const plus = newElement({
  type: "p",
  id: "plus-icon",
  content: "+",
  class: ["toggle-button", "no-select"],
  props: [["style", "pointer-events:none;"]],
}) as HTMLParagraphElement;

plusButton.append(plus);

export default plusButton;
