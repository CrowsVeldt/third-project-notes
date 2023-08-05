import { formatDate } from "../utils/util";
import { getNote } from "../utils/storage";
import newElement from "../utils/newElement";
import { Note } from "../utils/types";

function getFullNoteElements() {
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

function toggleFullNote(id: string): void {
  const fullNote = document.getElementById("full-note");

  if (fullNote) {
    if (fullNote.classList.contains("hideable")) {
      populateFullNote(id);
    }
    fullNote.classList.toggle("hideable");
  }
}

const fullNote: HTMLDivElement = newElement({
  type: "div",
  id: "full-note",
  class: [
    "position-fixed",
    "bg-light",
    "w-75",
    "h-75",
    "flex-column",
    "justify-content-between",
    "top-25",
    "start-50",
    "translate-middle-x",
    "border",
    "border-dark",
    "rounded",
    "hideable",
    "full-note-child",
  ],
}) as HTMLDivElement;

const noteTitle: HTMLHeadingElement = newElement({
  type: "h3",
  id: "full-note-title",
  class: [
    "form-label",
    "text-center",
    "border-bottom",
    "w-100",
    "full-note-child",
  ],
}) as HTMLHeadingElement;

const noteBackground: HTMLDivElement = newElement({
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

const noteBody: HTMLParagraphElement = newElement({
  type: "p",
  id: "full-note-body",
  class: ["overflow-scroll", "px-3", "border-bottom", "full-note-child"],
}) as HTMLParagraphElement;

const dateContainer: HTMLDivElement = newElement({
  type: "div",
  id: "full-note-dates",
  class: ["full-note-child"],
}) as HTMLDivElement;

const noteCreated: HTMLParagraphElement = newElement({
  type: "p",
  id: "full-note-created",
  class: ["px-3", "border-bottom", "full-note-child"],
}) as HTMLParagraphElement;

const noteTarget: HTMLParagraphElement = newElement({
  type: "p",
  id: "full-note-target",
  class: ["px-3", "border-bottom", "full-note-child"],
}) as HTMLParagraphElement;

fullNote.append(noteTitle, noteBackground);
noteBackground.append(noteBody, dateContainer);
dateContainer.append(noteCreated, noteTarget);

export { fullNote, toggleFullNote };
