import { Note } from "./types";
import { lowerCase } from "./util";

/* 
  For now notes are stored in one array, for simplicity of access. 
  This probably causes a performance bottleneck, since accessing one
  note requires fetching the whole array. May be worth redoing.
*/

const storageExists = (): boolean => {
  if (localStorage.length > 0) return true;
  return false;
};

function getStoredNotes(): Note[] {
  if (storageExists()) {
    const notes: string | null = localStorage.getItem("notes");
    if (notes !== null) {
      const parsedNotes: Note[] = JSON.parse(notes);
      if (parsedNotes.length > 0) return parsedNotes;
    }
  }
  return [];
}

function getNote(id: string): Note | void {
  const notes: Note[] = getStoredNotes();
  const foundNote: Note | undefined = notes.find((el) => el.id === id);
  if (foundNote) return foundNote;
}

function saveNote(note: Note): void {
  const notes: Note[] = storageExists() ? getStoredNotes() : [];
  notes.unshift(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(noteId: string): void {
  const notes: Note[] = getStoredNotes();
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

function wipeStorage(): void {
  if (storageExists()) localStorage.clear();
}

function searchNotes(query: string): Note[] {
  const notes: Note[] = getStoredNotes();
  const formattedQuery: string = lowerCase(query);
  const results: Note[] = [];

  notes.forEach((note: Note) => {
    if (
      lowerCase(note.title).includes(formattedQuery) ||
      lowerCase(note.body).includes(formattedQuery)
    ) {
      results.push(note);
    }
  });
  return results;
}

function updateNote(noteId: string, obj: {}) {
  const oldNote = getNote(noteId);
  if (oldNote) {
    const updates = {};

    for (let a in obj) {
      // TODO: figure out how to fix type error
      updates[a] = obj[a];
    }

    const newNote = { ...oldNote, ...updates };

    deleteNote(noteId);
    saveNote(newNote);
  }
}

export {
  deleteNote,
  getNote,
  saveNote,
  searchNotes,
  getStoredNotes,
  storageExists,
  updateNote,
  wipeStorage,
};
