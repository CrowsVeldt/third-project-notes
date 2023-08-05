import "./style.css";
import { foot, head, main } from "./components/pageLayout";
import noteDisplayControls from "./components/controls/noteDisplayControls";
import toggleFormButton from "./components/controls/toggleFormButton";
import {
  noteContainer,
  populateNoteContainer,
} from "./components/noteContainer";
import { formElement, resetForm } from "./components/noteForm";
import { fullNote } from "./components/fullNote";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.height = "100vh";

const container = document.createElement("div");
container.classList.add("d-flex", "flex-column", "h-100");
container.append(
  head,
  noteDisplayControls,
  main,
  noteContainer,
  formElement,
  fullNote,
  toggleFormButton,
  foot
);
container.addEventListener("click", handleTouchEventsForm);
container.addEventListener("click", handleTouchEventsNote);

function handleTouchEventsForm(evt: Event): void {
  const target = evt.target as HTMLElement;
  if (
    !target.classList.contains("form") &&
    !target.classList.contains("form-control") &&
    !target.classList.contains("form-label")
  ) {
    if (!target.classList.contains("toggle-button")) {
      const formOpen: HTMLElement | null =
        document.getElementById("input-form");
      if (formOpen && formOpen.classList.contains("d-flex")) {
        formOpen.classList.remove("d-flex");
        resetForm();
      }
    }
  }
}

function handleTouchEventsNote(evt: Event): void {
  const target = evt.target as HTMLElement;
  const note = document.getElementById("full-note");
  if (note) {
    if (
      !target.classList.contains("full-note-child") &&
      note.classList.contains("d-flex")
    ) {
      note.classList.remove("d-flex");
    }
  }
}

app.appendChild(container);
populateNoteContainer();
