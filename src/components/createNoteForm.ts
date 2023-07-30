import { newNote } from "./createNote";
import { createInput, createLabel } from "../form components/labelAndInput";
import colorSelect from "../form components/colorSelector";
import { formatDate, formatMinDate } from "../utils/util";
// import { Note } from "../utils/types";

function noteForm(): HTMLDivElement {
  const date: Date = new Date();
  const minDate = formatMinDate(date);

  const form = formContainer("note-form", "New Note");

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
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const bodyLabel: HTMLLabelElement = createLabel("Note body", ["form-label"]);
  const bodyInput: HTMLTextAreaElement = document.createElement("textarea");
  bodyInput.id = "body-input";
  bodyInput.classList.add("form-control");
  // // VVVVVVV -WORK IN PROGRESS-
  // bodyInput.value = edit ? edit.body : ''
  // // ^^^^^^^
  bodyInput.maxLength = 100;
  bodyInput.required = true;
  form.appendChild(bodyLabel);
  form.appendChild(bodyInput);

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
  form.appendChild(tDateLabel);
  form.appendChild(tDateInput);

  const colorLabel: HTMLLabelElement = createLabel("Select color", [
    "form-label",
  ]);
  const cSelect: HTMLSelectElement = colorSelect();
  form.appendChild(colorLabel);
  form.appendChild(cSelect);

  const addButton: HTMLButtonElement = document.createElement("button");
  addButton.innerText = "Add note";
  addButton.type = "submit";
  addButton.id = "form-button";

  addButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (titleInput.value === "") {
      titleInput.reportValidity();
      return;
    } else if (bodyInput.value === "") {
      bodyInput.reportValidity();
      return;
    }

    if (form.classList.contains("d-flex")) {
      form.classList.toggle("d-flex");
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

    titleInput.value = "";
    bodyInput.value = "";
    tDateInput.value = "";
    cSelect.value = "None";
  });

  form.appendChild(addButton);

  return form;
}

function formContainer(id: string, title: string): HTMLDivElement {
  const formContainer: HTMLDivElement = document.createElement("div");
  formContainer.id = id;
  formContainer.classList.add(
    "position-fixed",
    "bg-light",
    "w-75",
    "h-75",
    "flex-column",
    "justify-content-between",
    "px-2",
    "top-25",
    "start-50",
    "translate-middle-x",
    "border",
    "border-dark",
    "rounded",
    "hidden"
  );

  const formHeader: HTMLHeadingElement = document.createElement("h3");
  formHeader.innerText = title;
  formContainer.appendChild(formHeader);

  return formContainer;
}

function toggleForm(id: string) {
  const form: HTMLElement = document.getElementById(id)!;
  form.classList.toggle("d-flex");
}

export { noteForm, toggleForm };
