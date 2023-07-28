import { colorObject } from "../utils/types";
import { noteColors } from "../utils/util";

const colorOption = (color: colorObject): HTMLOptionElement => {
  const o = document.createElement("option");
  o.innerText = color.name;
  o.value = color.value;
  return o;
};

const colorSelect = (): HTMLSelectElement => {
  const colorSelect = document.createElement("select");
  colorSelect.id = "color-select";
  colorSelect.required = true;
  colorSelect.ariaLabel = "Default select element";

  noteColors.forEach((color) => {
    colorSelect.appendChild(colorOption(color));
  });

  return colorSelect;
};

export default colorSelect