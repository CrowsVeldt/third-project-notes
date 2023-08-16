import newNote from "./note";
import { Note } from "../utils/types";
import { getNote, getStoredNotes, storageExists } from "../utils/noteStorage";
import newElement from "../utils/newElement";
import { tih } from "../main";

const noteContainer = newElement({
  type: "div",
  id: "note-container",
  class: ["container-fluid"],
}) as HTMLDivElement;

function populateNoteContainer(noteArray?: Note[]): void {
  const container: HTMLElement | null =
    document.getElementById("note-container");

  if (container) {
    container.innerHTML = "";
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
  tih.listTabIndexes();
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

function getDisplayedNotes(): Note[] {
  const childNodes: HTMLCollection =
    document.getElementById("note-container")!.children;
  const noteArray: Note[] = [];
  if (childNodes) {
    for (let node in childNodes) {
      const noteId: string = childNodes[node].id;
      const note: Note | void = getNote(noteId);
      if (note) {
        noteArray.push(note);
      }
    }
  }
  return noteArray;
}

export {
  noteContainer,
  getDisplayedNotes,
  populateNoteContainer,
  addNoteToContainer,
  wipeNoteContainer,
  resetNoteContainer,
};
