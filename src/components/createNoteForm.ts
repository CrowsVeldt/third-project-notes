import newNote from "./createNote";
import { createInput, createLabel } from "../form components/labelAndInput";
import colorSelect from "../form components/colorSelector";
import { formatDate } from "../utils/util";
import { Note } from "../utils/types";

function noteForm(noteValues?: Note): HTMLDivElement {
  const date: Date = new Date();
  const minDate: string = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  const formContainer: HTMLDivElement = document.createElement("div");
  formContainer.id = "note-form";
  formContainer.classList.add(
    "position-fixed",
    "bg-light",
    "w-75",
    "h-75",
    "flex-column",
    'justify-content-between',
    'px-2',
    'top-25',
    'start-50',
    'translate-middle-x',
    'border',
    'border-dark',
    'rounded',
    'hidden'
  );

  const titleLabel: HTMLLabelElement = createLabel("Note title", [
    "form-label",
  ]);
  const titleInput: HTMLInputElement = createInput(
    "text",
    "title-input",
    ["form-control"],
    true,
    [["maxlength", "20"]]
  );
  formContainer.appendChild(titleLabel);
  formContainer.appendChild(titleInput);

  const bodyLabel: HTMLLabelElement = createLabel("Note body", ["form-label"]);
  const bodyInput: HTMLTextAreaElement = document.createElement("textarea");
  bodyInput.id = "body-input";
  bodyInput.classList.add("form-control");
  bodyInput.maxLength = 100;
  bodyInput.required = true;
  formContainer.appendChild(bodyLabel);
  formContainer.appendChild(bodyInput);

  const tDateLabel: HTMLLabelElement = createLabel("Target date", [
    "form-label",
  ]);
  const tDateInput: HTMLInputElement = createInput(
    "date",
    "tDate-input",
    ["form-control"],
    false,
    [["min", minDate]]
  );
  formContainer.appendChild(tDateLabel);
  formContainer.appendChild(tDateInput);

  const colorLabel: HTMLLabelElement = createLabel("Select color", [
    "form-label",
  ]);
  const cSelect: HTMLSelectElement = colorSelect();
  formContainer.appendChild(colorLabel);
  formContainer.appendChild(cSelect);

  const addButton: HTMLButtonElement = document.createElement("button");
  addButton.innerText = "Add note";
  addButton.type = "submit";
  addButton.id = "form-button";

  if (noteValues) {
    titleInput.value = noteValues.title;
    bodyInput.value = noteValues.body;
    tDateInput.value = noteValues.targetDate as string;
    cSelect.value = noteValues.color;
  }

  addButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (titleInput.value === "") {
      titleInput.reportValidity();
      return;
    } else if (bodyInput.value === "") {
      bodyInput.reportValidity();
      return;
    }

    if (formContainer.classList.contains('d-flex')) {
      formContainer.classList.toggle('d-flex')
    }

    document.getElementById("note-container")?.appendChild(
      newNote(
        {
          title: titleInput.value,
          body: bodyInput.value,
          targetDate: formatDate(tDateInput.value),
          color: cSelect.value,
        },
        false
      )
    );

    titleInput.value = ''
    bodyInput.value = ''
    tDateInput.value = ''
    cSelect.value = 'None'
  });

  formContainer.appendChild(addButton);

  return formContainer;
}

export default noteForm;
