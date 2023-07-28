import makeNoteForm from "./createNoteForm";
import createPlusButton from "./openFormButton";
import newNote from "./createNote";
import { Note } from "../utils/types";
import { storedNotes, storageExists } from "../utils/storage";

function makeNoteContainer(noteArray?: Note[]) {
  const noteContainer = document.createElement("div");
  noteContainer.id = "note-container";
  noteContainer.classList.add(
    "container",
    "d-flex",
    "flex-wrap",
    "space-between"
  );
  noteContainer.appendChild(makeNoteForm());
  noteContainer.appendChild(createPlusButton());

  if (noteArray) {
    noteArray.forEach((note: Note) => {
      noteContainer.appendChild(newNote(note, true));
    });
  } else if (storageExists()) {
    const notes = storedNotes();
    if (notes) {
      localStorage.clear;
      notes.forEach((note: Note) => {
        noteContainer.appendChild(newNote(note, true));
      });
    }
  }
  return noteContainer;
}

function removeNoteContainer() {
  const con = document.getElementById("note-container");
  if (con) {
    con.remove();
  }
}

function resetNoteContainer(notes: Note[]) {
  const page = document.getElementById("main-page");
  removeNoteContainer();
  page?.appendChild(makeNoteContainer(notes));
}

export { makeNoteContainer, removeNoteContainer, resetNoteContainer };
