import directionToggle from "../components/directionToggle";
import { sortMethods } from "../utils/util";


function sortOption (option: string): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option;
  o.value = option;
  return o;
};

function sortSelect (): HTMLDivElement {
  const selectContainer: HTMLDivElement = document.createElement('div')  
  selectContainer.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'w-25')
  const sortSelect: HTMLSelectElement = document.createElement("select");
  sortSelect.id = "color-select";
  sortSelect.required = true;
  sortSelect.ariaLabel = "Default select element";

  sortMethods.forEach((method) => {
    sortSelect.appendChild(sortOption(method));
  });

  const sortToggle: HTMLDivElement = directionToggle()

  selectContainer.appendChild(sortSelect)
  selectContainer.appendChild(sortToggle)
  return selectContainer;
};

export default sortSelect

