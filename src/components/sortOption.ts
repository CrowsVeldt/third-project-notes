import { SortMethodType } from "../utils/types";

// TODO: refactor to use newElement?
function sortOption(option: SortMethodType): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option.method;
  o.value = option.method;
  return o;
}

export default sortOption;
