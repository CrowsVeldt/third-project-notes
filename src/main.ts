import "./style.css";
import { foot, head, main } from "./components/pageLayout";
import noteDisplayControls from "./components/controls/searchAndSort";
import toggleFormButton from "./components/controls/newFormButton";
import {
  noteContainer,
  populateNoteContainer,
} from "./components/noteContainer";
import { formElement, formIsOpen, formHandler } from "./components/noteForm";
import { fullNote, noteIsOpen, toggleFullNote } from "./components/fullNote";
import {
  settings,
  settingsIsOpen,
  toggleSettings,
} from "./components/settings";
import TabIndexHandler from "./classes/tabIndexHandler";

declare var bootstrap: any;

const app: HTMLDivElement = document.querySelector<HTMLDivElement>("#app")!;

const tooltipTriggerList: never[] = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"')
);
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltop(tooltipTriggerEl);
});

main.append(settings, noteContainer, formElement, fullNote, toggleFormButton);

app.append(head, noteDisplayControls, main, foot);
app.addEventListener("mousedown", handleTouchEventsForm);
app.addEventListener("mousedown", handleTouchEventsNote);
app.addEventListener("mousedown", handleTouchEventsSettings);
document.addEventListener("keydown", handleKeydownEvents);

function handleTouchEventsForm(evt: Event): void {
  const target = evt.target as HTMLElement;
  if (!target.classList.contains("form-child")) {
    if (!target.classList.contains("toggle-button")) {
      const form: HTMLElement | null = document.getElementById("input-form");
      if (form && formIsOpen()) {
        formHandler();
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
          formHandler();
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

const tih = new TabIndexHandler();
populateNoteContainer();

export { tih };
