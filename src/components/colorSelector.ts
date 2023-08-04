import { colorObject } from "../utils/types";
import newElement from "../utils/newElement";
import { noteColors } from "../utils/util";

function colorOption(color: colorObject): HTMLOptionElement {
  return newElement({
    type: "option",
    class: ["form-control"],
    content: color.name,
    props: [["value", color.value]],
  }) as HTMLOptionElement;
}

function colorSelect(): HTMLSelectElement {
  const colorSelect: HTMLSelectElement = newElement({
    type: "select",
    id: "color-select",
    class: ["form-control"],
    props: [
      ["required", "true"],
      ["ariaLabel", "Default select element"],
    ],
  }) as HTMLSelectElement;

  noteColors.forEach((color) => {
    colorSelect.appendChild(colorOption(color));
  });

  return colorSelect;
}

export default colorSelect;
