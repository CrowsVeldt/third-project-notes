import { colorObject } from "../utils/types";
import newElement from "../utils/newElement";

function colorOption(color: colorObject): HTMLOptionElement {
  return newElement({
    type: "option",
    class: ["form-control", "form-child"],
    content: color.name,
    props: [["value", color.value]],
  }) as HTMLOptionElement;
}

export default colorOption;
