import { newNote } from "./note";
import { Note } from "../utils/types";
import { getStoredNotes, storageExists } from "../utils/storage";
import newElement from "../utils/newElement";

const noteContainer: HTMLDivElement = newElement({
  type: "div",
  id: "note-container",
  class: [
    "container-fluid",
    "d-flex",
    "flex-wrap",
    "justify-content-center",
    "justify-content-lg-start",
  ],
}) as HTMLDivElement;

function populateNoteContainer(noteArray?: Note[]): void {
  const container: HTMLElement | null =
    document.getElementById("note-container");

  if (container) {
    if (noteArray) {
      noteArray.forEach((note: Note) => {
        container.appendChild(newNote(note));
      });
    } else if (storageExists()) {
      const notes: void | Note[] = getStoredNotes();
      if (notes) {
        localStorage.clear;
        notes.forEach((note: Note) => {
          container.appendChild(newNote(note));
        });
      }
    }
  }
}

function addNoteToContainer(note: Note): void {
  const con: HTMLElement | null = document.getElementById("note-container");
  if (con) {
    con.appendChild(newNote(note));
  }
}

function wipeNoteContainer(): void {
  const con: HTMLElement | null = document.getElementById("note-container");
  if (con) {
    con.innerHTML = "";
  }
}

function resetNoteContainer(notes: Note[] | void): void {
  wipeNoteContainer();
  const page: HTMLElement | null = document.getElementById("main-page");
  if (page && notes) {
    populateNoteContainer(notes);
  } else if (page) {
    populateNoteContainer();
  }
}

export {
  noteContainer,
  populateNoteContainer,
  addNoteToContainer,
  wipeNoteContainer,
  resetNoteContainer,
};
