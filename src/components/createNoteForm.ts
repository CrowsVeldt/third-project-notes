import newNote from "./createNote";
import { BackgroundColor } from "../types";
import { noteColors, formatDate } from "../util";

function makeNoteForm() {
  const date = new Date();
  const minDate: string = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  const formContainer = document.createElement("form");
  formContainer.id = "add-note-form";
  formContainer.style.display = "none";
  formContainer.style.position = "fixed";
  formContainer.style.left = "0%";
  formContainer.classList.add(
    "border",
    "rounded",
    "p-1",
    "flex-column",
    "bg-white"
  );

  const titleLabel = createLabel("Note title", ["form-label"]);
  const titleInput = createInput(
    "text",
    "title-input",
    ["form-control"],
    true,
    [["maxlength", "20"]]
  );
  formContainer.appendChild(titleLabel);
  formContainer.appendChild(titleInput);

  const bodyLabel = createLabel("Note body", ["form-label"]);
  const bodyInput = document.createElement("textarea");
  bodyInput.id = "body-input";
  bodyInput.classList.add("form-control");
  bodyInput.maxLength = 100;
  bodyInput.required = true;
  formContainer.appendChild(bodyLabel);
  formContainer.appendChild(bodyInput);

  const tDateLabel = createLabel("Target date", ["form-label"]);
  const tDateInput = createInput(
    "date",
    "tDate-input",
    ["form-control"],
    false,
    [["min", minDate]]
  );
  formContainer.appendChild(tDateLabel);
  formContainer.appendChild(tDateInput);

  const colorLabel = createLabel("Select color", ["form-label"]);
  const cSelect = colorSelect();
  formContainer.appendChild(colorLabel);
  formContainer.appendChild(cSelect);

  const createButton = document.createElement("button");
  createButton.innerText = "Add note";
  createButton.type = "submit";
  createButton.id = "form-button";
  createButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (titleInput.value === "") {
      titleInput.reportValidity();
      return;
    } else if (bodyInput.value === "") {
      bodyInput.reportValidity();
      return;
    } else if (cSelect.value === "") {
      cSelect.reportValidity();
      return;
    }
    document.getElementById("note-container")?.appendChild(
      newNote(
        {
          title: titleInput.value,
          body: bodyInput.value,
          targetDate: formatDate(tDateInput.value),
          color: cSelect.value as BackgroundColor,
        },
        false
      )
    );
  });

  formContainer.appendChild(createButton);

  return formContainer;
}

function createLabel(value: string, classes: string[]) {
  const l = document.createElement("label");
  DOMTokenList.prototype.add.apply(l.classList, classes);
  l.innerText = value;
  return l;
}

function createInput(
  type: string,
  id: string,
  classes: string[],
  required: boolean,
  other?: string[][]
) {
  const inp = document.createElement("input");
  inp.type = type;
  inp.id = id;
  DOMTokenList.prototype.add.apply(inp.classList, classes);
  inp.required = required;
  if (other) {
    other.forEach((attr) => {
      inp.setAttribute(attr[0], attr[1]);
    });
  }
  return inp;
}

const colorOption = (color: BackgroundColor) => {
  const o = document.createElement("option");
  o.innerText = color;
  o.value = color;
  return o;
};

const colorSelect = () => {
  const colorSelect = document.createElement("select");
  colorSelect.id = "color-select";
  colorSelect.required = true;
  colorSelect.ariaLabel = "Default select element";

  noteColors.forEach(color => {
    colorSelect.appendChild(colorOption(color))
  })

  return colorSelect;
};

export default makeNoteForm;
