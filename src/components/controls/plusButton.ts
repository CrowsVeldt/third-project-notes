import { formHandler } from "../noteForm";
import newElement from "../../utils/newElement";
import l18n from "../../utils/l18n";
import { getCurrentLanguage } from "../../utils/language";
import { L18nLangOption } from "../../utils/types";

const plusButton = newElement({
  type: "button",
  id: "plus-button",
  class: ["toggle-button", "button-color", "border", "border-dark", "rounded"],
  props: [
    ["tabindex", "4"],
    ["data-bs-toggle", "tooltip"],
    ["data-bs-placement", "left"],
    [
      "title",
      l18n.getToolTip(getCurrentLanguage() as L18nLangOption, "plus-button"),
    ],
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
