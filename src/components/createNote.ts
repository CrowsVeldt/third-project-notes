import { deleteNote } from "../utils/storage";
import { formatDate } from "../utils/util";
import newElement from "../utils/newElement";
import { Note } from "../utils/types";
import NoteObj from "../classes/Note";
import { openFormButtonHandler } from "./createNoteForm";
import { toggleFullNote } from "./fullNote";

function newNote(n: Note | undefined): HTMLDivElement {
  const note = n
    ? new NoteObj(n.title, n.body, n.color, n.id, n.createDate, n.targetDate)
    : new NoteObj();

  const deleteId: string = "delete-" + note.getId();
  const editId: string = "edit-" + note.getId();

  const noteDiv: HTMLDivElement = newElement({
    type: "div",
    id: note.getId(),
    class: [
      "border",
      "rounded",
      "ms-1",
      "p-2",
      "d-flex",
      "flex-column",
      "overflow-hidden",
      "note",
    ],
    props: [["style", `background-color: ${note.getColor()}`]],
  }) as HTMLDivElement;

  const noteTitle: HTMLHeadingElement = newElement({
    type: "h3",
    content: note.getTitle(),
  }) as HTMLHeadingElement;

  const noteBody: HTMLParagraphElement = newElement({
    type: "p",
    class: [
      'overflow-hidden',
      "border-top",
      "border-bottom"],
    content: note.getBody(),
  }) as HTMLParagraphElement;

  const noteCDate: HTMLParagraphElement = newElement({
    type: "p",
    class: ['mt-auto'],
    content: `Created on ${note.getCreateDate()}`,
  }) as HTMLParagraphElement;

  const noteTDate: HTMLParagraphElement = newElement({
    type: "p",
    content: note.getTargetDate()
      ? `Targate date ${formatDate(note.getTargetDate())}`
      : "",
  }) as HTMLParagraphElement;

  const deleteButton: HTMLButtonElement = newElement({
    type: "button",
    id: deleteId,
    class: ["w-50", "align-self-center"],
    content: "Delete",
    eventListener: {
      eventType: "click",
      listener: () => {
        deleteNote(note.getId());
        document.getElementById(note.getId())?.remove();
      },
    },
  }) as HTMLButtonElement;

  const editButton: HTMLButtonElement = newElement({
    type: "button",
    id: editId,
    class: ["w-50", "align-self-center", "toggle-button"],
    content: "Edit",
    eventListener: {
      eventType: "click",
      listener: (evt) => {
        if (evt) {
          openFormButtonHandler(evt, note.getId());
        }
      },
    },
  }) as HTMLButtonElement;

  noteDiv.appendChild(noteTitle);
  noteDiv.appendChild(noteBody);
  noteDiv.appendChild(noteCDate);
  noteDiv.appendChild(noteTDate);
  noteDiv.appendChild(deleteButton);
  noteDiv.appendChild(editButton);

  noteDiv.addEventListener("dblclick", () => {
    toggleFullNote(note.getId())
  })

  return noteDiv;
}

export { newNote };
