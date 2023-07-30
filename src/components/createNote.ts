import { saveNote, deleteNote, getNote } from "../utils/storage";
import { Note } from "../utils/types";
import { formatDate, makeHash } from "../utils/util";
// import { noteForm, toggleForm } from "./createNoteForm";

function newNote(deetz: Note, fromStorage: boolean): HTMLDivElement {
  const date: Date = new Date();
  const cDate: string = deetz.createDate ? deetz.createDate : formatDate(date);
  // if there is no id, set it to a Hash of current time + random characters
  const id: string = deetz.id ? deetz.id : makeHash(date.getTime().toString());

  if (!fromStorage) {
    saveNote({
      id: id,
      title: deetz.title,
      body: deetz.body,
      createDate: cDate,
      targetDate: deetz.targetDate,
      color: deetz.color,
    });
  }

  const buttonId: string = "button-" + id;

  const note: HTMLDivElement = document.createElement("div");
  note.id = id;
  note.style.backgroundColor = deetz.color;
  note.classList.add(
    "border",
    "rounded",
    "ms-1",
    "p-2",
    "d-flex",
    "flex-column",
    "note",
    "flex-fill"
  );

  const noteTitle: HTMLHeadingElement = document.createElement("h3");
  noteTitle.innerText = deetz.title;

  const noteBody: HTMLParagraphElement = document.createElement("p");
  noteBody.classList.add("mb-auto", "border-top", "border-bottom");
  noteBody.innerText = deetz.body;

  const noteCDate: HTMLParagraphElement = document.createElement("p");
  noteCDate.innerText = `Created on ${cDate}`;

  const noteTDate: HTMLParagraphElement = document.createElement("p");
  noteTDate.innerText = deetz.targetDate
    ? `Target date ${deetz.targetDate}`
    : "";

  const deleteButton: HTMLButtonElement = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.id = buttonId;
  deleteButton.classList.add("w-50", "align-self-center");
  deleteButton.addEventListener("click", () => {
    deleteNote(id);
    document.getElementById(id)?.remove();
  });

  const editButton: HTMLButtonElement = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("w-50", "align-self-center");

  editButton.addEventListener("click", () => {
    editNote(id);
  });

  note.appendChild(noteTitle);
  note.appendChild(noteBody);
  note.appendChild(noteCDate);
  note.appendChild(noteTDate);
  note.appendChild(deleteButton);
  note.appendChild(editButton);

  return note;
}

function editNote(noteId: string) {
  const note = getNote(noteId);
  console.log(note);
  // noteForm()
  // toggleForm()
}

export { newNote, editNote };
