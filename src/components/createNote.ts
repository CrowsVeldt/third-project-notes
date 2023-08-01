import { saveNote, deleteNote, getNote } from "../utils/storage";
import { Note } from "../utils/types";
import { formatDate, makeHash } from "../utils/util";
import newElement from "../utils/newElement";

function newNote(deetz: Note, fromStorage: boolean): HTMLDivElement {
  const date: Date = new Date();
  const cDate: string = deetz.createDate ? deetz.createDate : formatDate(date);
  // if there is no id, set it to a Hash of current time + random characters
  const id: string = deetz.id ? deetz.id : makeHash(date.getTime().toString());
  const buttonId: string = "button-" + id;

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

  const note: HTMLDivElement = newElement({
    type: "div",
    id: id,
    class: [
      "border",
      "rounded",
      "ms-1",
      "p-2",
      "d-flex",
      "flex-column",
      "flex-fill",
      "note",
    ],
    props: [["style", `background-color: ${deetz.color}`]],
  }) as HTMLDivElement;

  const noteTitle: HTMLHeadingElement = newElement({
    type: "h3",
    content: deetz.title,
  }) as HTMLHeadingElement;

  const noteBody: HTMLParagraphElement = newElement({
    type: "p",
    class: ["mb-auto", "border-top", "border-bottom"],
    content: deetz.body,
  }) as HTMLParagraphElement;

  const noteCDate: HTMLParagraphElement = newElement({
    type: "p",
    content: `Created on ${cDate}`,
  }) as HTMLParagraphElement;

  const noteTDate: HTMLParagraphElement = newElement({
    type: "p",
    content: deetz.targetDate ? `Targate date ${deetz.targetDate}` : "",
  }) as HTMLParagraphElement;

  const deleteButton: HTMLButtonElement = newElement({
    type: 'button',
    id: buttonId,
    class: ['w-50', 'align-self-center'],
    content: 'Delete',
    eventListener: {
      eventType: 'click',
      listener: () => {
        deleteNote(id)
        document.getElementById(id)?.remove()
      }
    }
  }) as HTMLButtonElement

  const editButton: HTMLButtonElement = newElement({
    type: 'button',
    class: ['w-50', 'align-self-center'],
    content: 'Edit', 
    eventListener: {
      eventType: 'click',
      listener: () => {
        editNote(id)
      }
    }
  }) as HTMLButtonElement

  note.appendChild(noteTitle);
  note.appendChild(noteBody);
  note.appendChild(noteCDate);
  note.appendChild(noteTDate);
  note.appendChild(deleteButton);
  note.appendChild(editButton);

  return note;
}

function editNote(noteId: string) {
  const note = getNote(noteId);
  // console.log(note);
  // noteForm()
  // toggleForm()
}

export { newNote, editNote };
