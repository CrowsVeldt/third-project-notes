import noteForm from "./createNoteForm";
import newNote from "./createNote";
import { Note } from "../utils/types";
import { storedNotes, storageExists } from "../utils/storage";

function makeNoteContainer(noteArray?: Note[]): HTMLDivElement {
  const noteContainer: HTMLDivElement = document.createElement("div");
  noteContainer.id = "note-container";
  noteContainer.classList.add(
    "container",
    "d-flex",
    "flex-wrap",
    "space-between"
  );
  noteContainer.appendChild(noteForm());
  // noteContainer.appendChild(createPlusButton());

  if (noteArray) {
    noteArray.forEach((note: Note) => {
      noteContainer.appendChild(newNote(note, true));
    });
  } else if (storageExists()) {
    const notes: void | Note[] = storedNotes();
    if (notes) {
      localStorage.clear;
      notes.forEach((note: Note) => {
        noteContainer.appendChild(newNote(note, true));
      });
    }
  }
  return noteContainer;
}

function removeNoteContainer(): void {
  const con: HTMLElement | null = document.getElementById("note-container");
  if (con) {
    con.remove();
  }
}

function resetNoteContainer(notes: Note[] | void = []): void {
  if (!notes) return
  const page: HTMLElement | null = document.getElementById("main-page");
  removeNoteContainer();
  page?.appendChild(makeNoteContainer(notes));
}

export { makeNoteContainer, removeNoteContainer, resetNoteContainer };
