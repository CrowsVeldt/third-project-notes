import { L18nLangOption, colorObject } from "../../utils/types";
import newElement from "../../utils/newElement";
import l18n from "../../utils/l18n";
import { getCurrentLanguage } from "../../utils/language";

function colorOption(color: colorObject): HTMLOptionElement {
  return newElement({
    type: "option",
    class: ["form-control", "form-child"],
    content: color.name,
    props: [["value", color.value]],
  }) as HTMLOptionElement;
}

const colorSelect = newElement({
  type: "select",
  id: "color-select",
  class: ["form-control", "form-child", "mb-2", "button-color"],
  props: [
    ["required", "true"],
    ["ariaLabel", "Default select element"],
  ],
}) as HTMLSelectElement;

l18n.getColors(getCurrentLanguage() as L18nLangOption).forEach((color: any) => {
  colorSelect.append(colorOption(color));
});

export default colorSelect;
