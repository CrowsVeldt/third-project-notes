import colorSelect from "./colorSelector";
import { createInput, createLabel } from "./labelAndInput";
import newElement from "../utils/newElement";
import { getNote, updateNote } from "../utils/storage";
import FormObject from "../classes/NoteForm";
import NoteObj from "../classes/Note";
import { notesDifferent, removeTag } from "../utils/util";
import { resetNoteContainer } from "./noteContainer";

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

function resetForm() {
  form.resetAll();
  populateFormElement();
}

function editNote(noteId: string) {
  form.resetAll();
  const note = getNote(noteId);

  if (note) {
    form.setAll(
      "Edit Note",
      note.title,
      note.body,
      note.targetDate ? note.targetDate : "",
      note.color,
      "Update Note",
      "edit-" + note.id
    );
    // console.log(form.getNoteId())
    populateFormElement();
  }
}

function openFormButtonHandler(evt: Event, id: string): void;
function openFormButtonHandler(evt: Event): void;
function openFormButtonHandler(): void;
function openFormButtonHandler(evt: Event | void, id: string | void): void {
  const inputForm: HTMLElement | null = document.getElementById("input-form");

  if (arguments.length === 0 && inputForm) {
    inputForm.classList.remove("d-flex");
    resetForm();
    return;
  }
  if (evt) {
    const target = evt.target as HTMLElement;
    const callerId = target.id;

    if (inputForm && inputForm.firstChild) {
      const formOpen = inputForm.classList.contains("d-flex");
      const formTitleIsNewNote =
        inputForm.firstChild.textContent === "New Note";

      if (callerId === "plus-button") {
        // if plus button pressed
        if (!formOpen) {
          // and form is closed
          inputForm.classList.add("d-flex"); // open form
        } else {
          // else if form is open
          if (formTitleIsNewNote) {
            // if form title is 'New Note'
            inputForm.classList.remove("d-flex"); // remove form
          } else {
            // else if form title is not 'New Note'
            resetForm(); // reset form
          }
        }
      } else if (id) {
        // if edit button pressed
        if (!formOpen) {
          // and form is closed
          editNote(id); // populate form with details from note(id)
          inputForm.classList.add("d-flex"); // and open form
        } else {
          // else if form is open
          if (callerId === form.getNoteId()) {
            // if form is already populated with details from note(id)
            inputForm.classList.remove("d-flex"); // close form
            resetForm(); // reset form
          } else {
            // else
            editNote(id); // populate form with details from note(id)
          }
        }
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
    content: form.getHead(),
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
      ["value", form.getBody()],
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
    content: form.getButtonName(),
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

        if (form) {
          if (form.getNoteId()) {
            // receive noteId from form, and slice off the first five chars to get the original note id
            // TODO: fix this type error
            const cleanId = form.getNoteId().slice(5);

            // get originalNote
            const originalNote = getNote(cleanId);

            // merge original note with the values from the form
            const newNote = {
              ...originalNote,
              ...{
                title: titleInput.value.replace(removeTag, ""),
                body: bodyInput.value.replace(removeTag, ""),
                color: cSelect.value,
                targetDate: tDateInput.value,
              },
            };

            // if originalNote !== newNote
            if (notesDifferent(originalNote, newNote)) {
              // update note with the new values
              updateNote(cleanId, {
                title: titleInput.value,
                body: bodyInput.value,
                targetDate: tDateInput.value,
                color: cSelect.value,
              });
              // and reset the note container
              resetNoteContainer();
            }

            // close form
            openFormButtonHandler();
          } else if (!form.getNoteId()) {
            const n = new NoteObj(
              titleInput.value.replace(removeTag, ""),
              bodyInput.value.replace(removeTag, ""),
              cSelect.value,
              undefined,
              undefined,
              tDateInput.value
            );
            n.saveToStorage();
            resetNoteContainer();
            openFormButtonHandler();
          }
        }
      },
    },
  }) as HTMLButtonElement;

  formElement.appendChild(actionButton);

  return formElement;
}

export { createNoteForm, openFormButtonHandler, editNote, resetForm };
