import "./style.css";
import { foot, head, main } from "./components/pageLayout";
import noteDisplayControls from "./components/controls/noteDisplayControls";
import toggleFormButton from "./components/controls/toggleFormButton";
import {
  noteContainer,
  populateNoteContainer,
} from "./components/noteContainer";
import {
  formElement,
  openFormButtonHandler,
  resetForm,
} from "./components/noteForm";
import { fullNote, toggleFullNote } from "./components/fullNote";
import { settings, toggleSettings } from "./components/settings";
declare var bootstrap: any;

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.height = "100vh";

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"')
);
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltop(tooltipTriggerEl);
});

const container = document.createElement("div");
container.classList.add("d-flex", "flex-column", "h-100");
container.append(
  head,
  noteDisplayControls,
  main,
  settings,
  noteContainer,
  formElement,
  fullNote,
  toggleFormButton,
  foot
);
container.addEventListener("click", handleTouchEventsForm);
container.addEventListener("click", handleTouchEventsNote);
container.addEventListener("click", handleTouchEventsSettings);
document.addEventListener("keydown", handleKeydownEvents);

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

function handleTouchEventsSettings(evt: Event): void {
  const target = evt.target as HTMLElement;
  const settings = document.getElementById("settings");
  if (settings) {
    if (!target.classList.contains("settings")) {
      if (settings.style.left === "0%") toggleSettings();
    }
  }
}

function handleKeydownEvents(evt: KeyboardEvent) {
  const inputForm = document.getElementById("input-form");
  const settings = document.getElementById("settings");
  const note = document.getElementById('full-note')

  const active = document.activeElement as HTMLElement;

  if (evt.key === "Escape") {
    if (active) {
      if (active.classList.contains("form-control")) {
        active.blur();
      } else if (!active.classList.contains("form-control")) {
        if (inputForm) {
          openFormButtonHandler();
        }
      }
    }

    if (note && note.classList.contains('d-flex')) {
      toggleFullNote()
    }

    if (settings && settings.style.left === "0%") {
      toggleSettings();
    }
  }
}

app.appendChild(container);
populateNoteContainer();
