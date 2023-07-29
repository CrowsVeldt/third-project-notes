function addNoteButton(): HTMLButtonElement {
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "+";
  btn.style.width = "50px";
  btn.style.height = "50px";
  btn.id = `toggle-add-note`;
  btn.classList.add(
    "position-fixed", 
    "end-0", 
    "bottom-0",
    'fs-1'
    );

  btn.addEventListener("click", () => {
    const form = document.getElementById("note-form")!;
    form.classList.toggle("d-flex");
  });

  return btn;
}

export default addNoteButton;
