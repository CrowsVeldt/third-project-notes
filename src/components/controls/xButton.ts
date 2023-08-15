import l18n from "../../utils/l18n";
import { getCurrentLanguage } from "../../utils/language";
import newElement from "../../utils/newElement";
import { L18nLangOption } from "../../utils/types";

function makeXButton(id: string, eventHandler: () => void): HTMLDivElement {
  const buttonContainer = newElement({
    type: "div",
    id: `${id}-container`,
    class: ["form-child", "x-button-container"],
    props: [
      ["data-bs-toggle", "tooltip"],
      ["data-bs-placement", "left"],
      ["title", l18n.getToolTip(getCurrentLanguage() as L18nLangOption, id)],
    ],
  }) as HTMLDivElement;

  const xButton = newElement({
    type: "i",
    id: id,
    class: ["form-child", "bi", "bi-x-square", "x-button"],
    eventListener: {
      eventType: "click",
      listener: () => eventHandler(),
    },
  }) as HTMLButtonElement;

  buttonContainer.append(xButton);

  return buttonContainer;
}

export default makeXButton;
