import newNote from "./createNote";

function makeNoteForm() {
  const date = new Date();
  const minDate: string = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  const formContainer = document.createElement("form");
  formContainer.id = "add-note-form";

  const titleLabel = document.createElement("label");
  titleLabel.classList.add("form-label");
  titleLabel.innerText = "Note title";
  const titleInput = document.createElement("input");

  titleInput.type = "text";
  titleInput.id = "title-input";
  titleInput.classList.add("form-control");
  titleInput.required = true;
  formContainer.appendChild(titleLabel);
  formContainer.appendChild(titleInput);

  const bodyLabel = document.createElement("label");
  bodyLabel.classList.add("form-label");
  bodyLabel.innerText = "Note body";

  const bodyInput = document.createElement("textarea");
  bodyInput.id = "body-input";
  bodyInput.classList.add("form-control");
  bodyInput.required = true;
  formContainer.appendChild(bodyLabel);
  formContainer.appendChild(bodyInput);

  const tDateLabel = document.createElement("label");
  tDateLabel.classList.add("form-label");
  tDateLabel.innerText = "Target date";

  const tDateInput = document.createElement("input");
  tDateInput.type = "date";
  tDateInput.min = minDate;
  tDateInput.id = "tDate-input";
  tDateInput.classList.add("form-control");
  formContainer.appendChild(tDateLabel);
  formContainer.appendChild(tDateInput);

  const colorLabel = document.createElement("label");
  colorLabel.classList.add("form-label");
  colorLabel.innerText = "Select color";

  const colorSelect = document.createElement("select");
  colorSelect.id = "color-select";
  colorSelect.required = true;
  colorSelect.ariaLabel = "Default select element";

  const colorOption = (color: string) => {
    const o = document.createElement("option");
    o.innerText = color;
    o.value = color;
    return o;
  };

  const optionNone = colorOption("none");
  optionNone.selected = true;
  const optionRed = colorOption("red");
  const optionBlue = colorOption("blue");
  const optionGreen = colorOption("green");
  const optionYellow = colorOption("yellow");
  const optionBrown = colorOption("brown");

  colorSelect.appendChild(optionNone);
  colorSelect.appendChild(optionRed);
  colorSelect.appendChild(optionBlue);
  colorSelect.appendChild(optionGreen);
  colorSelect.appendChild(optionYellow);
  colorSelect.appendChild(optionBrown);

  formContainer.appendChild(colorLabel);
  formContainer.appendChild(colorSelect);

  const createButton = document.createElement("button");
  createButton.innerText = "Add note";
  createButton.type = "submit";
  createButton.id = "form-button";
  createButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    document
      .getElementById("note-container")
      ?.appendChild(
        newNote(
          titleInput.value,
          bodyInput.value,
          tDateInput.value,
          colorSelect.value
        )
      );
  });

  formContainer.appendChild(createButton);

  return formContainer;
}

export default makeNoteForm;
