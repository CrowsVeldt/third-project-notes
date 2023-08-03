import colorSelect from "./colorSelector";
import { createInput, createLabel } from "./labelAndInput";
import newElement from "../utils/newElement";
import { getNote } from "../utils/storage";
import FormObject from "../classes/NoteForm";

const form = new FormObject("New Note", "", "", "", "none", "Add Note");

function accessFormElement() {
  const header = document.getElementById(
    "input-form-title"
  ) as HTMLHeadingElement;
  const title = document.getElementById("title-input") as HTMLInputElement;
  const body = document.getElementById("body-input") as HTMLInputElement;
  const date = document.getElementById("tDate-input") as HTMLInputElement;
  const color = document.getElementById("color-select") as HTMLSelectElement;
  const button = document.getElementById("form-button") as HTMLButtonElement;
  return {
    header: header,
    title: title,
    body: body,
    date: date,
    color: color,
    button: button,
  };
}

function populateFormElement() {
  const { header, title, body, date, color, button } = accessFormElement();
  header.innerText = form.getHead();
  title.value = form.getTitle();
  body.value = form.getBody();
  date.value = form.getTDate();
  color.value = form.getColor();
  button.innerText = form.getButtonName();

  return form.getDetails();
}

function wipeForm() {
  form.resetForm();
  populateFormElement();
}

function editNote(noteId: string) {
  form.resetForm();
  const note = getNote(noteId);

  if (note) {
    form.setForm(
      "Edit Note",
      note.title,
      note.body,
      note.targetDate ? note.targetDate : "",
      note.color,
      "Update Note"
    );
    populateFormElement();
  }
}

function formButtonHandler(evt: Event, id: string): void;
function formButtonHandler(evt: Event): void;
function formButtonHandler(evt: Event, id: string | void): void {
  const inputForm: HTMLElement | null = document.getElementById("input-form");
  const inputFormTitle = inputForm?.firstChild?.textContent;
  const target = evt.target as HTMLElement;

  // If FORM is closed
  if (inputForm && !inputForm.classList.contains("d-flex")) {
    // Display FORM
    inputForm.classList.add("d-flex");
    // if plus button was pressed
    if (target.id === "plus-button") {
      wipeForm();
      // else
    } else if (id) {
      editNote(id);
    }
    // If FORM is open
  } else if (inputForm && inputForm.classList.contains("d-flex")) {
    // FORM title id 'New Note'
    if (inputForm && inputFormTitle === "New Note") {
      // if plus button was pressed
      if (target.id === "plus-button") {
        wipeForm();
        inputForm.classList.remove("d-flex");
        // else
      } else if (id) {
        editNote(id);
      }
    } else if (inputForm && inputFormTitle === "Edit Note") {
      // if plus button was pressed
      if (target.id === "plus-button") {
        wipeForm();
        // else
      } else if (id) {
        editNote(id);
      }
    }
  }
}

function createNoteForm(): HTMLDivElement {
  const formElement: HTMLDivElement = newElement({
    type: "div",
    id: "input-form",
    class: [
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
      "hideable",
      "form",
    ],
  }) as HTMLDivElement;

  const formHeader: HTMLHeadingElement = newElement({
    type: "h3",
    id: "input-form-title",
    class: ["form-label"],
    content: form.getHead()!,
  }) as HTMLHeadingElement;

  formElement.appendChild(formHeader);

  const titleLabel: HTMLLabelElement = createLabel("Note title", [
    "form-label",
  ]);
  const titleInput: HTMLInputElement = createInput(
    "text",
    "title-input",
    ["form-control"],
    true,
    [
      ["maxlength", "50"],
      ["required", "true"],
    ]
  );
  formElement.appendChild(titleLabel);
  formElement.appendChild(titleInput);

  const bodyLabel: HTMLLabelElement = createLabel("Note body", ["form-label"]);
  const bodyInput: HTMLTextAreaElement = newElement({
    type: "textarea",
    id: "body-input",
    class: ["form-control"],
    props: [
      ["maxLength", "1000"],
      ["required", "true"],
      ["value", form.getBody()!],
    ],
  }) as HTMLTextAreaElement;
  formElement.appendChild(bodyLabel);
  formElement.appendChild(bodyInput);

  const tDateLabel: HTMLLabelElement = createLabel("Target date", [
    "form-label",
  ]);
  const tDateInput: HTMLInputElement = createInput(
    "date",
    "tDate-input",
    ["form-control"],
    false,
    []
  );
  formElement.appendChild(tDateLabel);
  formElement.appendChild(tDateInput);

  const colorLabel: HTMLLabelElement = createLabel("Select color", [
    "form-label",
  ]);
  const cSelect: HTMLSelectElement = colorSelect();
  // figure out how to set color from FormObject
  formElement.appendChild(colorLabel);
  formElement.appendChild(cSelect);

  const actionButton: HTMLButtonElement = newElement({
    type: "button",
    id: "form-button",
    class: ["form-control"],
    content: form.getButtonName()!,
    props: [["type", "submit"]],
    eventListener: {
      eventType: "click",
      listener: (evt?: Event) => {
        if (evt) evt.preventDefault();

        if (titleInput.value === "") {
          titleInput.reportValidity();
          return;
        } else if (bodyInput.value === "") {
          bodyInput.reportValidity();
          return;
        }

        // const note = new NoteObj(
        //   titleInput.value.replace(removeTag, ""),
        //   bodyInput.value.replace(removeTag, ""),
        //   cSelect.value,
        //   noteDetails ? noteDetails.id : undefined,
        //   noteDetails ? noteDetails.createDate : undefined,
        //   tDateInput.value
        // );

        // if (!note.existsInStorage()) {
        //   note.saveToStorage();
        // } else if (noteDetails) {
        //   updateNote(noteDetails.id as string, note.getDetails());
        // }

        // addNoteToContainer(note.getDetails());
        // resetNoteContainer();
        // if (formElement.classList.contains("d-flex")) {
        //   formElement.classList.toggle("d-flex");
        // }

        wipeForm();
      },
    },
  }) as HTMLButtonElement;

  formElement.appendChild(actionButton);

  return formElement;
}

// function addNoteHandler(
//   form: HTMLDivElement,
//   noteDetails: Note,
//   titleInput: HTMLInputElement,
//   bodyInput: HTMLTextAreaElement,
//   tDateInput: HTMLInputElement,
//   cSelect: HTMLSelectElement
// ) {
//   const note = new NoteObj(
//     titleInput.value.replace(removeTag, ""),
//     bodyInput.value.replace(removeTag, ""),
//     cSelect.value,
//     noteDetails ? noteDetails.id : undefined,
//     noteDetails ? noteDetails.createDate : undefined,
//     tDateInput.value
//   );

//   titleInput.value = "";
//   bodyInput.value = "";
//   tDateInput.value = "";
//   cSelect.value = "none";
// }

export { createNoteForm, formButtonHandler, editNote, wipeForm };
