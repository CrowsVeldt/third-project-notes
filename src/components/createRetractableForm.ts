function makeRetractableForm() {
  const form = document.createElement("div");

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
