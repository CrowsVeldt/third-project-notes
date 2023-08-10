import { deleteNote } from "../utils/storage";
import { formatDate } from "../utils/util";
import { formHandler } from "./noteForm";
import newElement from "../utils/newElement";
import { Note } from "../utils/types";
import NoteObj from "../classes/Note";
import { toggleFullNote } from "./fullNote";

function newNote(n: Note | undefined): HTMLDivElement {
  const note = n
    ? new NoteObj(n.title, n.body, n.color, n.id, n.createDate, n.targetDate)
    : new NoteObj();

  const id = note.getId()
  const deleteId: string = "delete: " + id
  const editId: string = "edit: " + id

  const noteDiv: HTMLDivElement = newElement({
    type: "div",
    id: id,
    class: [
      "border",
      "rounded",
      "border-dark",
      "ms-1",
      "p-2",
      "d-flex",
      "flex-column",
      "overflow-hidden",
      "note",
    ],
    props: [
      ["style", `background-color: ${note.getColor()}`],
      ["tabindex", "0"],
    ],
  }) as HTMLDivElement;

  const noteHead = newElement({
    type: 'div',
    class: ['note-head', 'd-flex', 'justify-content-between']
  }) as HTMLDivElement

  const noteTitle = newElement({
    type: "h3",
    class:['note-title'],
    content: note.getTitle(),
  }) as HTMLHeadingElement;

  const noteBody = newElement({
    type: "p",
    class: ["overflow-hidden", "border-top", "border-bottom", 'note-body'],
    content: note.getBody(),
  }) as HTMLParagraphElement;

  const noteCDate = newElement({
    type: "p",
    class: ["mt-auto", "mb-1", 'note-create-date'],
    content: `Created on ${note.getCreateDate()}`,
  }) as HTMLParagraphElement;

  const noteTDate = newElement({
    type: "p",
    class: ["mb-2", 'note-target-date'],
    content: note.getTargetDate()
      ? `Targate date ${formatDate(note.getTargetDate())}`
      : "",
  }) as HTMLParagraphElement;

  const deleteButton = newElement({
    type: "button",
    id: deleteId,
    class: ["align-self-start"],
    eventListener: {
      eventType: "click",
      listener: () => {
        deleteNote(note.getId());
        document.getElementById(note.getId())?.remove();
      },
    },
  }) as HTMLButtonElement;

  const editButton = newElement({
    type: "button",
    id: editId,
    class: [
     "align-self-end", 
    "toggle-button"],
    eventListener: {
      eventType: "click",
      listener: (evt) => {
        formHandler(evt!, note.getId());
      },
    },
  }) as HTMLButtonElement;

  const deleteIcon = newElement({
    type: 'i',
    class: ['bi-trash']
  })

  const editIcon= newElement({
    type: 'i',
    class: ['bi-pencil']
  })

  deleteButton.append(deleteIcon)
  editButton.append(editIcon)

  noteHead.append(noteTitle, deleteButton)

  noteDiv.append(
    noteHead,
    noteBody,
    noteCDate,
    noteTDate,
    editButton
  );

  noteDiv.addEventListener("dblclick", (evt) => {
    const target = evt.target as HTMLElement;

    if (target && target.id !== deleteId && target.id !== editId) {
      toggleFullNote(note.getId());
    }
  });

  return noteDiv;
}

export default newNote;
