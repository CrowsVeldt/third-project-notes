import { addNoteToContainer, resetNoteContainer } from "./noteContainer";
import colorSelect from "./colorSelector";
import { createInput, createLabel } from "./labelAndInput";
import { formatMinDate, removeTag } from "../utils/util";
import { getNote } from "../utils/storage";
import newElement from "../utils/newElement";
import { Note } from "../utils/types";
import NoteObj from "../classes/Note";

function noteForm(
  buttonName: string,
  formTitle: string,
  formId: string,
  noteDetails?: Note
): HTMLDivElement {
  let details = {} as Note;

  if (noteDetails) {
    details = { ...noteDetails };
  }

  const date: Date = new Date();
  const minDate = formatMinDate(date);

  const form = formContainer(formId, formTitle);

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
      ["value", details.title ? details.title : ""],
    ]
  );
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const bodyLabel: HTMLLabelElement = createLabel("Note body", ["form-label"]);
  const bodyInput: HTMLTextAreaElement = newElement({
    type: "textarea",
    id: "body-input",
    class: ["form-control"],
    props: [
      ["maxLength", "1000"],
      ["required", "true"],
    ],
  }) as HTMLTextAreaElement;
  // refactor to fit with other input values'?
  bodyInput.value = details.body ? details.body : "";
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
    [
      ["min", minDate],
      ["value", details.targetDate ? details.targetDate : ""],
    ]
  );
  form.appendChild(tDateLabel);
  form.appendChild(tDateInput);

  const colorLabel: HTMLLabelElement = createLabel("Select color", [
    "form-label",
  ]);
  const cSelect: HTMLSelectElement = colorSelect();
  cSelect.value = details.color ? details.color : "none";
  form.appendChild(colorLabel);
  form.appendChild(cSelect);

  const actionButton: HTMLButtonElement = newElement({
    type: "button",
    id: "form-button",
    class: ["form-control"],
    content: buttonName,
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

        const note = new NoteObj(
          titleInput.value.replace(removeTag, ""),
          bodyInput.value.replace(removeTag, ""),
          cSelect.value,
          noteDetails ? noteDetails.id : undefined,
          noteDetails ? noteDetails.createDate : undefined,
          tDateInput.value
        );

        if (form.classList.contains("d-flex")) {
          form.classList.toggle("d-flex");
        }

        if (!getNote(note.getId())) note.saveToStorage();

        addNoteToContainer(note.getDetails());
        resetNoteContainer();

        titleInput.value = "";
        bodyInput.value = "";
        tDateInput.value = "";
        cSelect.value = "none";
      },
    },
  }) as HTMLButtonElement;

  form.appendChild(actionButton);

  return form;
}

function formContainer(id: string, title: string): HTMLDivElement {
  const formContainer: HTMLDivElement = newElement({
    type: "div",
    id: id,
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
    class: ["form-label"],
    content: title,
  }) as HTMLHeadingElement;

  formContainer.appendChild(formHeader);
  return formContainer;
}

function toggleForm(id: string) {
  const form: HTMLElement = document.getElementById(id)!;
  form.classList.toggle("d-flex");
}

export { noteForm, toggleForm };
