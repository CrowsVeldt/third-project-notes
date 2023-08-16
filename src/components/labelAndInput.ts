import newElement from "../utils/newElement";

function createLabel(
  value: string,
  id: string,
  classes: string[],
  target: string
): HTMLLabelElement {
  const label: HTMLLabelElement = newElement({
    type: "label",
    id: id,
    class: [...classes],
    content: value,
    props: [["for", target]],
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
  const inp = newElement({
    type: "input",
    id: id,
    class: [...classes, "mb-0"],
    props: [
      ["type", type],
      ["required", required.toString()],
    ].concat(other!),
  }) as HTMLInputElement;

  return inp;
}

export { createInput, createLabel };
