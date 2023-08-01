import { Note } from "./types";
import { lowerCase } from "./util";

// Storage layout: [
//  [id, Note{}],
//  [id1, Note{}]
// ]

const storageExists = (): boolean | undefined => {
  if (localStorage.length > 0) return true;
};

function getStoredNotes(): Note[] | void {
  if (storageExists()) {
    const notes: string | null = localStorage.getItem("notes");
    if (notes !== null) {
      const parsedNotes: Note[] = JSON.parse(notes);
      if (parsedNotes.length > 0) return parsedNotes;
    }
  }
}

function getNote(id: string): Note | void {
    const notes = getStoredNotes()
    if (notes) {
        const data = notes.find(el => el.id === id)
        if (data) return data
    }
}

function saveNote(note: Note): void {
  const notes: Note[] | void = getStoredNotes();
  if (notes) {
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    const newNotes = JSON.stringify([note]);
    localStorage.setItem("notes", newNotes);
  }
}

function deleteNote(noteId: string): void {
  const notes: Note[] | void = getStoredNotes();
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
  const notes: Note[] | void = getStoredNotes();
  const lowQuery: string = lowerCase(query);

  if (notes) {
    const results: Note[] = [];
    notes.forEach((note: Note) => {
      if (
        lowerCase(note.title).includes(lowQuery) ||
        lowerCase(note.body).includes(lowQuery)
      ) {
        results.push(note);
      }
    });
    return results;
  }
}

export {
  deleteNote,
  getNote,
  saveNote,
  searchNotes,
  getStoredNotes,
  storageExists,
  wipeStorage,
};
