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

export { createInput, createLabel };
