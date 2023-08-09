import colorSelect from "./controls/colorSelector";
import { createInput, createLabel } from "./labelAndInput";
import { FormElement, Note } from "../utils/types";
import FormObject from "../classes/InputForm";
import { getNote, updateNote } from "../utils/storage";
import { hideClasses, notesDifferent, removeTag } from "../utils/util";
import newElement from "../utils/newElement";
import NoteObj from "../classes/Note";
import { resetNoteContainer } from "./noteContainer";
import { textCounter, setCounter } from "./textCounter";
import { tih } from "../main";

const form: FormObject = new FormObject(
  "New Note",
  "",
  "",
  "",
  "none",
  "Add Note"
);

function formIsOpen(): boolean | void {
  const form: HTMLElement | null = document.getElementById("input-form");
  if (form && form.classList.contains("d-flex")) return true;
}

function accessFormElement(): FormElement {
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

function populateFormElement(): Note {
  const { header, title, body, date, color, button } = accessFormElement();
  header.innerText = form.getHead();
  title.value = form.getTitle();
  body.value = form.getBody();
  date.value = form.getTDate();
  color.value = form.getColor();
  button.innerText = form.getButtonName();

  setCounter(title, titleCount);
  setCounter(body, bodyCount);

  return form.getDetails();
}

function resetForm(): void {
  form.resetAll();
  populateFormElement();
}

function editNote(noteId: string): void {
  const note: Note | void = getNote(noteId);

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
    populateFormElement();
  }
}

function openForm(element: HTMLElement): void {
  tih.removeTabIndexes();
  if (element !== null) {
    element.classList.add("d-flex");
  }
}

function closeForm(element: HTMLElement): void {
  tih.resetTabIndexes();
  if (element !== null) {
    element.classList.remove("d-flex");
    resetForm();
  }
}

function formHandler(evt: Event, id: string): void;
function formHandler(evt: Event): void;
function formHandler(): void;
function formHandler(evt: Event | void, id: string | void): void {
  const inputForm: HTMLElement | null = document.getElementById("input-form");

  if (arguments.length === 0 && inputForm) {
    closeForm(inputForm);
    return;
  }

  if (evt) {
    const target = evt.target as HTMLElement;
    const callerId: string = target.id;

    if (inputForm && inputForm.firstChild) {
      const formTitleIsNewNote: boolean =
        inputForm.firstChild.textContent === "New Note";

      if (callerId === "plus-button") {
        // if plus button pressed
        if (!formIsOpen()) {
          // and form is closed
          openForm(inputForm);
        } else {
          // else if form is open
          if (formTitleIsNewNote) {
            // if form title is 'New Note'
            closeForm(inputForm);
          } else {
            // else if form title is not 'New Note'
            resetForm(); // reset form
          }
        }
        // if edit button pressed
      } else if (id) {
        // and form is closed
        if (!formIsOpen()) {
          editNote(id); // populate form with details from note(id)
          openForm(inputForm); //open form
          // else if form is open
        } else {
          if (callerId === form.getNoteId()) {
            // if form is already populated with details from note(id)
            closeForm(inputForm);
          } else {
            editNote(id); // populate form with details from note(id)
          }
        }
      }
    }
  }
}

const formElement = newElement({
  type: "div",
  id: "input-form",
  class: [...hideClasses, "px-2", "form", "form-child"],
}) as HTMLDivElement;

const formHeader = newElement({
  type: "h3",
  id: "input-form-title",
  class: ["form-label", "form-child"],
  content: form.getHead(),
}) as HTMLHeadingElement;

const titleLabel: HTMLLabelElement = createLabel("Note title", [
  "form-label",
  "form-child",
]);
const titleInput: HTMLInputElement = createInput(
  "text",
  "title-input",
  ["form-control", "form-child"],
  true,
  [
    ["maxlength", "50"],
    ["required", "true"],
  ]
);
const titleCount: HTMLParagraphElement = textCounter(titleInput);

const bodyLabel: HTMLLabelElement = createLabel("Note body", [
  "form-label",
  "form-child",
]);
const bodyInput = newElement({
  type: "textarea",
  id: "body-input",
  class: ["form-control", "form-child"],
  props: [
    ["maxLength", "1000"],
    ["required", "true"],
    ["value", form.getBody()],
  ],
}) as HTMLTextAreaElement;

const bodyCount: HTMLParagraphElement = textCounter(bodyInput);

const tDateLabel: HTMLLabelElement = createLabel("Target date", [
  "form-label",
  "form-child",
]);
const tDateInput: HTMLInputElement = createInput(
  "date",
  "tDate-input",
  ["form-control", "form-child"],
  false,
  []
);

const colorLabel = createLabel("Select color", [
  "form-label",
  "form-child",
]);
const cSelect: HTMLSelectElement = colorSelect;
// figure out how to set color from FormObject

const actionButton: HTMLButtonElement = newElement({
  type: "button",
  id: "form-button",
  class: ["form-control", "form-child"],
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

      if (form && form !== undefined) {
        if (form.getNoteId()) {
          // receive noteId from form, and slice off the first five chars to get the original note id
          const cleanId: string = form.getNoteId()!.slice(5);

          // get originalNote
          const originalNote: Note | void = getNote(cleanId);

          // merge original note with the values from the form
          const newNote: Note = {
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
          formHandler();
        } else {
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
          formHandler();
        }
      }
    },
  },
}) as HTMLButtonElement;

formElement.append(
  formHeader,
  titleLabel,
  titleInput,
  titleCount,
  bodyLabel,
  bodyInput,
  bodyCount,
  tDateLabel,
  tDateInput,
  colorLabel,
  cSelect,
  actionButton
);

export { editNote, formElement, formIsOpen, formHandler, resetForm };
