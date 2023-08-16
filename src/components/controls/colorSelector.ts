import newElement from "../../utils/newElement";

const colorSelect = newElement({
  type: "select",
  id: "color-select",
  class: ["form-control", "form-child", "mb-2", "button-color"],
  props: [
    ["required", "true"],
    ["ariaLabel", "Default select element"],
  ],
}) as HTMLSelectElement;

export default colorSelect;
