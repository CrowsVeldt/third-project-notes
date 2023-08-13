import newElement from "../../utils/newElement";
import langOptions from "../../utils/textContent";

function makeXButton(id: string, eventHandler: () => void): HTMLDivElement {
  const buttonContainer = newElement({
    type: "div",
    id: `${id}-container`,
    class: ["form-child", "x-button-container"],
    props: [
      ["data-bs-toggle", "tooltip"],
      ["data-bs-placement", "left"],
      ["title", langOptions.english.tooltips.xButton],
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
