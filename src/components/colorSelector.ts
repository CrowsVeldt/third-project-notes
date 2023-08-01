import newElement from "../utils/newElement";
import { colorObject } from "../utils/types";
import { noteColors } from "../utils/util";

function colorOption(color: colorObject): HTMLOptionElement {
  return newElement({
    type: 'option',
    content: color.name,
    props: [['value', color.value]]
  }) as HTMLOptionElement
}

function colorSelect(): HTMLSelectElement {
  const colorSelect = newElement({
    type: 'select',
    id: 'color-select',
    props: [['required', 'true'], ['ariaLabel', 'Default select element']]
  }) as HTMLSelectElement

  noteColors.forEach(color => {
    colorSelect.appendChild(colorOption(color))
  })

  return colorSelect
}
export default colorSelect