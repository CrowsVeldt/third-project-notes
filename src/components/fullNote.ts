import { formatDate, hideClasses } from "../utils/util";
import { getNote } from "../utils/noteStorage";
import newElement from "../utils/newElement";
import { L10nLangOption, Note } from "../utils/types";
import makeXButton from "./controls/xButton";
import l10n from "../utils/l10n";
import { getCurrentLanguage } from "../utils/languageFunctions";
import getColor from "../utils/colors";
import { retrieveTheme } from "../utils/theme";

function getFullNoteElements(): {
  title: HTMLHeadingElement;
  body: HTMLHeadingElement;
  created: HTMLHeadingElement;
  target: HTMLHeadingElement;
} {
  const title = document.getElementById(
    "full-note-title"
  ) as HTMLHeadingElement;
  const body = document.getElementById("full-note-body") as HTMLHeadingElement;
  const created = document.getElementById(
    "full-note-created"
  ) as HTMLHeadingElement;
  const target = document.getElementById(
    "full-note-target"
  ) as HTMLHeadingElement;
  return {
    title: title,
    body: body,
    created: created,
    target: target,
  };
}

function populateFullNote(id: string): void {
  const { title, body, created, target } = getFullNoteElements();

  const note = getNote(id) as Note;

  if (note) {
    title.innerText = note.title;
    noteHead.style.backgroundColor =
      note.color === 0 ? "" : getColor(retrieveTheme(), note.color);
    body.innerText = note.body;
    created.innerText =
      l10n.getTextContent(
        getCurrentLanguage() as L10nLangOption,
        "full-note-created"
      ) + note.createDate;
    if (note.targetDate) {
      target.style.display = "inline-block";
      target.innerText =
        l10n.getTextContent(
          getCurrentLanguage() as L10nLangOption,
          "full-note-target"
        ) + formatDate(note.targetDate);
    } else {
      target.innerHTML = "";
      target.style.display = "none";
    }
  }
}

function noteIsOpen(): boolean {
  const fullNote = document.getElementById("full-note") as HTMLDivElement;
  if (fullNote && fullNote.classList.contains("d-flex")) return true;
  return false;
}

function toggleFullNote(): void;
function toggleFullNote(id: string): void;
function toggleFullNote(id: string | void): void {
  const fullNote = document.getElementById("full-note") as HTMLDivElement;

  if (fullNote) {
    if (!noteIsOpen()) {
      if (id) {
        populateFullNote(id);
      }
      fullNote.classList.add("d-flex");
    } else {
      fullNote.classList.remove("d-flex");
    }
  }
}

const fullNote = newElement({
  type: "div",
  id: "full-note",
  class: [...hideClasses, "full-note-child", "justify-content-between"],
}) as HTMLDivElement;

const noteHead = newElement({
  type: "div",
  id: "full-note-head",
  class: ["px-5", "border-bottom"],
}) as HTMLDivElement;

const noteTitle = newElement({
  type: "h2",
  id: "full-note-title",
  class: [
    "form-label",
    "text-center",
    "lh-md",
    "w-100",
    "full-note-child",
    "text-break",
    "align-self-start",
  ],
}) as HTMLHeadingElement;

const xButton: HTMLDivElement = makeXButton("close-button", toggleFullNote);

const noteBackground = newElement({
  type: "div",
  id: "full-note-bg",
  class: [
    "d-flex",
    "flex-column",
    "justify-content-between",
    "full-note-child",
  ],
}) as HTMLDivElement;

const noteBody = newElement({
  type: "p",
  id: "full-note-body",
  class: ["overflow-scroll", "px-3", "full-note-child"],
}) as HTMLParagraphElement;

const dateContainer = newElement({
  type: "div",
  id: "full-note-dates",
  class: ["full-note-child", "d-flex", "justify-content-center", "text-center"],
}) as HTMLDivElement;

const noteCreated = newElement({
  type: "p",
  id: "full-note-created",
  class: ["px-3", "mb-0", "full-note-child"],
}) as HTMLParagraphElement;

const noteTarget = newElement({
  type: "p",
  id: "full-note-target",
  class: ["px-3", "mb-0", "full-note-child"],
}) as HTMLParagraphElement;

noteHead.append(xButton, noteTitle);
dateContainer.append(noteCreated, noteTarget);
noteBackground.append(noteBody, dateContainer);
fullNote.append(noteHead, noteBackground);

export { fullNote, noteIsOpen, toggleFullNote };
