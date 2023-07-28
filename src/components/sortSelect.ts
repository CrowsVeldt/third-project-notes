import { sortMethods } from "../utils/util";

function sortOption (option: string): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option;
  o.value = option;
  return o;
};

function directionToggle(): HTMLInputElement {
    const toggle: HTMLInputElement = document.createElement('input')
    toggle.type = 'checkbox'
    return toggle
}

function sortSelect (): HTMLDivElement {
  const selectContainer: HTMLDivElement = document.createElement('div')  
  const sortSelect: HTMLSelectElement = document.createElement("select");
  sortSelect.id = "color-select";
  sortSelect.required = true;
  sortSelect.ariaLabel = "Default select element";

  sortMethods.forEach((method) => {
    sortSelect.appendChild(sortOption(method));
  });

  const sortToggle: HTMLInputElement = directionToggle()

  selectContainer.appendChild(sortSelect)
  selectContainer.appendChild(sortToggle)
  return selectContainer;
};

export default sortSelect