import { Note } from "./utils";

const storageExists = () => {
  if (localStorage.length > 0) return true;
};

function storedNotes() {
  if (storageExists()) {
    const notes = localStorage.getItem("notes");
    if (notes !== null) {
      const parsedNotes = JSON.parse(notes);
      if (parsedNotes.length > 0) return parsedNotes;
    }
  }
}

function storeNote(note: Note) {
  const notes = storedNotes();
  if (notes) {
    notes.push(note);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    const newNotes = JSON.stringify([note])
    localStorage.setItem('notes', newNotes)
  }
}

function removeNote (noteId: string) {
    // const notes = storedNotes()
    // notes.forEach((note: Note) => {
    //     if (note.id === noteId) {
    //         notes.indexOf(note)  
    //     }
    // })
}

export {
  storeNote,
  removeNote,
  storageExists,
  storedNotes
};
