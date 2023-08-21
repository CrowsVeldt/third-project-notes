import colorSelect from "./controls/colorSelector";
import { createInput, createLabel } from "./labelAndInput";
import { FormElement, l10nLangOption, Note } from "../utils/types";
import FormObject from "../classes/InputForm";
import { getNote, updateNote } from "../utils/noteStorage";
import { hideClasses, notesDifferent, removeTag } from "../utils/util";
import newElement from "../utils/newElement";
import NoteObj from "../classes/Note";
import { resetNoteContainer } from "./noteContainer";
import { textCounter, setCounter } from "./textCounter";
import { tih } from "../main";
import makeXButton from "./controls/xButton";
import targetDateInput from "./controls/targetDateInput";
import { errorMessage, updateErrorMessage } from "./errorMessage";
import l10n from "../utils/l10n";
import { getCurrentLanguage } from "../utils/languageFunctions";

const form: FormObject = new FormObject(
  l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "form-heading:add"
  ),
  "",
  "",
  "",
  "none",
  l10n.getTextContent(getCurrentLanguage() as l10nLangOption, "form-button:add")
);

function formIsOpen(): boolean | void {
  const form: HTMLElement | null = document.getElementById("input-form");
  if (form && form.classList.contains("d-flex")) return true;
}

function accessFormElement(): FormElement {
  const heading = document.getElementById("form-heading") as HTMLHeadingElement;
  const title = document.getElementById("title-input") as HTMLInputElement;
  const body = document.getElementById("body-input") as HTMLInputElement;
  const date = document.getElementById("tDate-input") as HTMLInputElement;
  const color = document.getElementById("color-select") as HTMLSelectElement;
  const button = document.getElementById("form-button") as HTMLButtonElement;
  return {
    heading: heading,
    title: title,
    body: body,
    date: date,
    color: color,
    button: button,
  };
}

function populateFormElement(): Note {
  const { heading, title, body, date, color, button } = accessFormElement();
  heading.innerText = form.getHead();
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
      l10n.getTextContent(
        getCurrentLanguage() as l10nLangOption,
        "form-heading:update"
      ),
      note.title,
      note.body,
      note.targetDate ? note.targetDate : "",
      note.color,
      l10n.getTextContent(
        getCurrentLanguage() as l10nLangOption,
        "form-button:update"
      ),
      "edit-" + note.id
    );

    populateFormElement();
  }
}

function openForm(): void {
  const form = document.getElementById("input-form");
  tih.removeTabIndexes();
  if (form !== null) {
    form.classList.add("d-flex");
  }
}

function closeForm(): void {
  const form = document.getElementById("input-form");
  tih.resetTabIndexes();
  if (form !== null) {
    form.classList.remove("d-flex");
    updateErrorMessage("", "");
    resetForm();
  }
}

function formHandler(): void;
function formHandler(evt: Event): void;
function formHandler(evt: Event, id: string): void;
function formHandler(evt: Event | void, id: string | void): void {
  const inputForm: HTMLElement | null = document.getElementById("input-form");
  const formTitle: HTMLElement | null = document.getElementById("form-heading");
  if (arguments.length === 0 && inputForm) {
    closeForm();
    return;
  }

  if (evt) {
    const target = evt.target as HTMLElement;
    const callerId: string = target.id;

    if (inputForm && formTitle) {
      const isFormNewNote: boolean =
        formTitle.textContent ===
        l10n.getTextContent(
          getCurrentLanguage() as l10nLangOption,
          "form-heading:add"
        );
      if (callerId === "plus-button") {
        if (!formIsOpen()) {
          openForm();
        } else {
          if (isFormNewNote) {
            closeForm();
          } else {
            resetForm();
          }
        }
      } else if (id) {
        if (!formIsOpen()) {
          editNote(id);
          openForm();
        } else if (formIsOpen()) {
          if (callerId === form.getNoteId()) {
            closeForm();
          } else {
            editNote(id);
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

const formHead = newElement({
  type: "div",
  id: "input-form-head",
  class: [
    "d-flex",
    "justify-content-between",
    "align-items-start",
    "form-child",
  ],
}) as HTMLDivElement;

const formheading = newElement({
  type: "h2",
  id: "form-heading",
  class: ["form-label", "form-child", "mb-2", "mt-2"],
  content: form.getHead(),
}) as HTMLHeadingElement;

const closeFormButton = makeXButton("close-form-button", closeForm);

const titleLabel: HTMLLabelElement = createLabel(
  l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "note-title-label"
  ),
  "note-title-label",
  ["form-label", "form-child"],
  "title-input"
);
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
titleCount.classList.add("form-child");

const bodyLabel: HTMLLabelElement = createLabel(
  l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "note-body-label"
  ),
  "note-body-label",
  ["form-label", "form-child"],
  "body-input"
);
const bodyInput = newElement({
  type: "textarea",
  id: "body-input",
  class: ["form-control", "form-child", "flex-grow-1"],
  props: [
    ["maxLength", "2000"],
    ["required", "true"],
    ["value", form.getBody()],
  ],
}) as HTMLTextAreaElement;

const bodyCount: HTMLParagraphElement = textCounter(bodyInput);
bodyCount.classList.add("form-child");

const dateAndColorContainer = newElement({
  type: "div",
  id: "date-and-color-container",
  class: ["form-child", "d-flex", "w-100"],
});

const dateContainer = newElement({
  type: "div",
  id: "date-container",
  class: ["form-child", "d-flex", "flex-column", "w-50", "px-2"],
});

const colorContainer = newElement({
  type: "div",
  id: "color-container",
  class: ["form-child", "d-flex", "flex-column", "w-50", "px-2"],
});

const tDateLabel: HTMLLabelElement = createLabel(
  l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "note-target-date-label"
  ),
  "note-target-date-label",
  ["form-label", "form-child"],
  "tDate-input"
);

const tDateInput = targetDateInput;
const dateError = errorMessage;

const colorLabel = createLabel(
  l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "note-color-label"
  ),
  "note-color-label",
  ["form-label", "form-child"],
  "color-select"
);
const cSelect: HTMLSelectElement = colorSelect;

const actionButton: HTMLButtonElement = newElement({
  type: "button",
  id: "form-button",
  class: [
    "form-control",
    "form-child",
    "button-color",
    "mb-2",
    "align-self-center",
    "w-50",
  ],
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

formHead.append(formheading, closeFormButton);
dateContainer.append(tDateLabel, tDateInput, dateError);
colorContainer.append(colorLabel, cSelect);
dateAndColorContainer.append(dateContainer, colorContainer);

formElement.append(
  formHead,
  titleLabel,
  titleInput,
  titleCount,
  bodyLabel,
  bodyInput,
  bodyCount,
  dateAndColorContainer,
  actionButton
);

export { editNote, formElement, formIsOpen, formHandler, resetForm };
