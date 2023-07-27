import makeNoteForm from "./createNoteForm";
import createPlusButton from "./openFormButton";
import newNote from "./createNote";
import { Note } from "../utils/types";
import { storedNotes, storageExists } from "../utils/storage";

function makeNoteContainer(): HTMLDivElement {
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

  if (storageExists()) {
    const notes = storedNotes();
    localStorage.clear;
    notes.forEach((note: Note) => {
      noteContainer.appendChild(newNote(note, true));
    });
  }
  return noteContainer;
}

function wipeNoteContainer() {
  document.getElementById("note-container")?.remove();
}

export { makeNoteContainer, wipeNoteContainer };
