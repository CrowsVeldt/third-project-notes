import newNote from "./createNote";
import { colorSelect, createInput, createLabel } from "./labelAndInput";
import { BackgroundColor } from "../utils/types";
import { formatDate } from "../utils/util";

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

export default makeNoteForm;
