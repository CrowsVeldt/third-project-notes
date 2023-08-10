import { formatDate, hideClasses } from "../utils/util";
import { getNote } from "../utils/storage";
import newElement from "../utils/newElement";
import { Note } from "../utils/types";

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

  const note: Note | void = getNote(id);

  if (note) {
    title.innerText = note.title;
    title.style.backgroundColor = note.color === "none" ? "white" : note.color;
    body.innerText = note.body;
    created.innerText = `Created on: ${note.createDate}`;
    if (note.targetDate) {
      target.style.display = "inline-block";
      target.innerText = `Target date: ${formatDate(note.targetDate)}`;
    } else {
      target.innerHTML = "";
      target.style.display = "none";
    }
  }
}

function noteIsOpen(): boolean {
  const fullNote: HTMLElement | null = document.getElementById("full-note");
  if (fullNote && fullNote.classList.contains("d-flex")) return true;

  return false;
}

function toggleFullNote(): void;
function toggleFullNote(id: string): void;
function toggleFullNote(id: string | void): void {
  const fullNote: HTMLElement | null = document.getElementById("full-note");

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
  class: [...hideClasses, "full-note-child"],
}) as HTMLDivElement;

const noteTitle = newElement({
  type: "h4",
  id: "full-note-title",
  class: [
    "form-label",
    "text-center",
    "lh-lg",
    "border-bottom",
    "w-100",
    "full-note-child",
  ],
}) as HTMLHeadingElement;

const noteBackground = newElement({
  type: "div",
  id: "full-note-bg",
  class: [
    "d-flex",
    "flex-column",
    "justify-content-between",
    "full-note-child",
  ],
  props: [["style", `background-color:white;`]],
}) as HTMLDivElement;

const noteBody = newElement({
  type: "p",
  id: "full-note-body",
  class: ["overflow-scroll", "px-3", "full-note-child"],
}) as HTMLParagraphElement;

const dateContainer = newElement({
  type: "div",
  id: "full-note-dates",
  class: ["full-note-child", "d-flex", "justify-content-center"],
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

fullNote.append(noteTitle, noteBackground);
noteBackground.append(noteBody, dateContainer);
dateContainer.append(noteCreated, noteTarget);

export { fullNote, noteIsOpen, toggleFullNote };
