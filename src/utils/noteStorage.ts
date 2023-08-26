import search from "./search";
import { Note, NoteUpdate } from "./types";
import { storageExists } from "./util";

/* 
  For now notes are stored in one array, for simplicity of access. 
  This probably causes a performance bottleneck, since accessing one
  note requires fetching the whole array. May be worth redoing.
*/

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

function wipeStoredNotes(): void {
  if (storageExists()) localStorage.clear();
}

function searchNotes(query: string): Note[] {
  const notes: Note[] = getStoredNotes();
  return search(query, notes);
}

function updateNote(noteId: string, obj: NoteUpdate) {
  const oldNote: Note | void = getNote(noteId);
  if (oldNote) {
    const updates: NoteUpdate = {
      title: "",
      body: "",
      targetDate: "",
      color: 0,
    };

    for (let a in obj) {
      updates[a] = obj[a];
    }

    const newNote: Note = { ...oldNote, ...updates };

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
  wipeStoredNotes,
};
