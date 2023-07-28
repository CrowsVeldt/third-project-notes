import { noteColors, sortMethods } from "../utils/util";
import { colorObject } from "../utils/types";
import directionToggle from "./directionToggle";

function createLabel(value: string, classes: string[]): HTMLLabelElement {
  const l = document.createElement("label");
  DOMTokenList.prototype.add.apply(l.classList, classes);
  l.innerText = value;
  return l;
}

function createInput(
  type: string,
  id: string,
  classes: string[],
  required: boolean,
  other?: string[][]
): HTMLInputElement {
  const inp = document.createElement("input");
  inp.type = type;
  inp.id = id;
  DOMTokenList.prototype.add.apply(inp.classList, classes);
  inp.required = required;
  if (other) {
    other.forEach((attr) => {
      inp.setAttribute(attr[0], attr[1]);
    });
  }
  return inp;
}

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

function sortOption (option: string): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option;
  o.value = option;
  return o;
};

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


export { createInput, createLabel, colorSelect, sortSelect };
