import { newNote } from "./note";
import { Note } from "../utils/types";
import { getStoredNotes, storageExists } from "../utils/storage";
import newElement from "../utils/newElement";
import { tih } from "../main";


const noteContainer: HTMLDivElement = newElement({
  type: "div",
  id: "note-container",
  class: [
    "container-fluid",
  ],
}) as HTMLDivElement;

function populateNoteContainer(noteArray?: Note[]): void {
  const container: HTMLElement | null =
    document.getElementById("note-container");

  if (container) {
    if (noteArray) {
      noteArray.forEach((note: Note) => {
        container.append(newNote(note));
      });
    } else if (storageExists()) {
      const notes: void | Note[] = getStoredNotes();
      if (notes) {
        localStorage.clear;
        notes.forEach((note: Note) => {
          container.append(newNote(note));
        });
      }
    }
  }
  tih.listTabIndexes()
}

function addNoteToContainer(note: Note): void {
  const container: HTMLElement | null =
    document.getElementById("note-container");
  if (container) {
    container.append(newNote(note));
  }
}

function wipeNoteContainer(): void {
  const container: HTMLElement | null =
    document.getElementById("note-container");
  if (container) {
    container.innerHTML = "";
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
