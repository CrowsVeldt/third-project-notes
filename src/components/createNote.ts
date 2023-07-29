import { saveNote, deleteNote } from "../utils/storage";
import { Note } from "../utils/types";
import { formatDate } from "../utils/util";

function newNote(deetz: Note, fromStorage: boolean) {
  // create Hash from s
  const hashCode = (s: string) =>
    s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  const date = new Date();
  const cDate = deetz.createDate ? deetz.createDate : formatDate(date);
  // set id to Hash of current time + random characters
  const id = deetz.id
    ? deetz.id
    : hashCode(
        date.getTime().toString() +
          (Math.random() + 1).toString(36).substring(7)
      ).toString();

  if (!fromStorage) {
    saveNote({
      id: id,
      title: deetz.title,
      body: deetz.body,
      createDate: cDate,
      targetDate: deetz.targetDate,
      color: deetz.color,
    });
  }

  const buttonId = "button-" + id;

  const note = document.createElement("div");
  note.id = id;
  note.style.backgroundColor = deetz.color;
  note.classList.add(
    "border",
    "rounded",
    "ms-1",
    "p-2",
    "d-flex",
    "flex-column",
    'note'
  );

  const noteTitle = document.createElement("h3");
  noteTitle.innerText = deetz.title;

  const noteBody = document.createElement("p");
  noteBody.classList.add("mb-auto", "border-top", "border-bottom");
  noteBody.innerText = deetz.body;

  const noteCDate = document.createElement("p");
  noteCDate.innerText = `Created on ${cDate}`;

  const noteTDate = document.createElement("p");
  noteTDate.innerText = deetz.targetDate ? `Target date ${deetz.targetDate}` : ''

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.id = buttonId;
  deleteButton.addEventListener("click", () => {
    deleteNote(id);
    document.getElementById(id)?.remove();
  });

  note.appendChild(noteTitle);
  note.appendChild(noteBody);
  note.appendChild(noteCDate);
  note.appendChild(noteTDate);
  note.appendChild(deleteButton);

  return note;
}

export default newNote;
