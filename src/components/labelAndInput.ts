import newElement from "../utils/newElement";

function createLabel(value: string, classes: string[]): HTMLLabelElement {
  const label: HTMLLabelElement = newElement({
    type: "label",
    class: [...classes],
    content: value,
  }) as HTMLLabelElement;

  return label;
}

function createInput(
  type: string,
  id: string,
  classes: string[],
  required: boolean,
  other?: string[][]
): HTMLInputElement {
  const inp: HTMLInputElement = newElement({
    type: "input",
    id: id,
    class: [...classes],
    props: [
      ["type", type],
      ["required", required.toString()],
    ].concat(other!),
  }) as HTMLInputElement;

  return inp;
}

export { createInput, createLabel };
