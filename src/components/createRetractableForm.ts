function makeRetractableForm(idName: string): HTMLDivElement {
  const form: HTMLDivElement = document.createElement("div");
  form.id = idName;

  form.classList.add(
    "border",
    "rounded",
    "p-1",
    "d-flex",
    "flex-column",
    "bg-white",
    "hidden"
  );

  return form;
}

export default makeRetractableForm;
