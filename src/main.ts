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
  formIsOpen,
  openFormButtonHandler,
} from "./components/noteForm";
import { fullNote, noteIsOpen, toggleFullNote } from "./components/fullNote";
import {
  settings,
  settingsIsOpen,
  toggleSettings,
} from "./components/settings";
import TabIndexHandler from "./classes/tabIndexHandler";
declare var bootstrap: any;

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.height = "100vh";

const tooltipTriggerList: never[] = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"')
);
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltop(tooltipTriggerEl);
});

const container: HTMLDivElement = document.createElement("div");
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
  if (!target.classList.contains("form-child")) {
    if (!target.classList.contains("toggle-button")) {
      const form: HTMLElement | null = document.getElementById("input-form");
      if (form && formIsOpen()) {
        openFormButtonHandler();
      }
    }
  }
}

function handleTouchEventsNote(evt: Event): void {
  const target = evt.target as HTMLElement;
  if (!target.classList.contains("full-note-child") && noteIsOpen()) {
    toggleFullNote();
  }
}

function handleTouchEventsSettings(evt: Event): void {
  const target = evt.target as HTMLElement;
  if (!target.classList.contains("settings") && settingsIsOpen()) {
    toggleSettings();
  }
}

function handleKeydownEvents(evt: KeyboardEvent) {
  const active = document.activeElement as HTMLElement;

  if (evt.key === "Escape") {
    if (active) {
      if (active.classList.contains("form-control")) {
        active.blur();
      } else if (!active.classList.contains("form-control")) {
        if (formIsOpen()) {
          openFormButtonHandler();
        }
      }
    }

    if (noteIsOpen()) {
      toggleFullNote();
    }

    if (settingsIsOpen()) {
      toggleSettings();
    }
  }
}

app.appendChild(container);
populateNoteContainer();
const tih = new TabIndexHandler();

export { tih };
