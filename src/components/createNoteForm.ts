import { createInput, createLabel } from "./labelAndInput";
import colorSelect from "./colorSelector";
import { formatDate, formatMinDate, removeTag } from "../utils/util";
import newElement from "../utils/newElement";
import { addNoteToContainer } from "./noteContainer";

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
  const bodyInput: HTMLTextAreaElement = newElement({
    type: 'textarea',
    id: 'body-input',
    class: ['form-control'],
    props: [['maxLength', '100'], ['required', 'true']]
  }) as HTMLTextAreaElement
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

  const addButton: HTMLButtonElement = newElement({
    type: 'button',
    id: 'form-button',
    content: 'Create note',
    props: [['type', 'submit']],
    eventListener: {
      eventType: 'click',
      listener: (evt?: Event) => {
        if (evt) evt.preventDefault()

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
        addNoteToContainer({
          title: titleInput.value.replace(removeTag, ''),
          body: bodyInput.value.replace(removeTag, ''),
          targetDate: formatDate(tDateInput.value),
          color: cSelect.value
        },
          false
        )

        titleInput.value = "";
        bodyInput.value = "";
        tDateInput.value = "";
        cSelect.value = "none";
      }
    }
  }) as HTMLButtonElement

  form.appendChild(addButton);

  return form;
}

function formContainer(id: string, title: string): HTMLDivElement {
  const formContainer: HTMLDivElement = newElement({
    type: 'div',
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
      "hidden"
    ]
  }) as HTMLDivElement

  const formHeader: HTMLHeadingElement = newElement({
    type: 'h3',
    content: title
  }) as HTMLHeadingElement

  formContainer.appendChild(formHeader);
  return formContainer;
}

function toggleForm(id: string) {
  const form: HTMLElement = document.getElementById(id)!;
  form.classList.toggle("d-flex");
}

export { noteForm, toggleForm };
