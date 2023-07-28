import { Note } from "./types";

const storageExists = (): boolean | undefined => {
  if (localStorage.length > 0) return true;
};

function storedNotes(): Note[] | undefined {
  if (storageExists()) {
    const notes = localStorage.getItem("notes");
    if (notes !== null) {
      const parsedNotes: Note[] = JSON.parse(notes);
      if (parsedNotes.length > 0) return parsedNotes;
    }
  }
}

function saveNote(note: Note): void {
  const notes = storedNotes();
  if (notes) {
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    const newNotes = JSON.stringify([note]);
    localStorage.setItem("notes", newNotes);
  }
}

function deleteNote(noteId: string) {
  const notes = storedNotes();
  if (notes) {
    notes.forEach((note: Note) => {
      if (note.id === noteId) {
        notes.splice(notes.indexOf(note), 1);
        if (notes.length > 0) {
          localStorage.setItem("notes", JSON.stringify(notes));
        } else {
          localStorage.removeItem("notes");
        }
      }
    });
  }
}

function wipeStorage(): void {
  if (storageExists()) localStorage.clear();
}

function searchNotes(query: string): Note[] | undefined {
  const notes = storedNotes();
  if (notes) {
    const results: Note[] = [];
    notes.forEach((note: Note) => {
      if (note.title.includes(query) || note.body.includes(query)) {
        results.push(note);
      }
    });
    return results;
  }
}

export {
  deleteNote,
  saveNote,
  searchNotes,
  storedNotes,
  storageExists,
  wipeStorage,
};
