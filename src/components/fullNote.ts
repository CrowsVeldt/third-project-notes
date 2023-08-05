import { getNote } from "../utils/storage";
import newElement from "../utils/newElement";
import NoteObj from "../classes/Note";
import { resetNoteContainer } from "./noteContainer";
import { createLabel } from "./labelAndInput";
import { formatDate } from "../utils/util";

function createFullNote(id: string): HTMLDivElement {
  const note = getNote(id);

  const fullNote: HTMLDivElement = newElement({
    type: "div",
    id: "full-note",
    class: [
      "position-fixed",
      "bg-light",
      "w-75",
      "h-75",
      "flex-column",
      "justify-content-between",
      "px-2",
      "top-25",
      "start-50",
      "translate-middle-x",
      "border",
      "border-dark",
      "rounded",
    ],
  }) as HTMLDivElement;

  if (note) {
    const noteTitle: HTMLHeadingElement = newElement({
      type: "h3",
      id: "full-note-title",
      class: ["form-label", "text-center", "border-bottom", "py-2"],
      content: `${note.title}`,
    }) as HTMLHeadingElement;

    fullNote.appendChild(noteTitle);

    const noteBody: HTMLParagraphElement = newElement({
      type: "p",
      id: "full-note-body",
      class: ["overflow-scroll", "px-3", "border-bottom"],
      content: note.body,
    }) as HTMLParagraphElement;

    fullNote.appendChild(noteBody);

    const noteCreated: HTMLParagraphElement = newElement({
      type: "p",
      id: "full-note-created",
      class: ["px-3", "border-bottom"],
      content: `Created on: ${note.createDate}`
    }) as HTMLParagraphElement;

    fullNote.appendChild(noteCreated);

    if (note.targetDate) {
      const noteTarget: HTMLParagraphElement = newElement({
        type: "p",
        id: "full-note-created",
        class: ["px-3", "border-bottom"],
        content: `Target date: ${formatDate(note.targetDate)}` 
      }) as HTMLParagraphElement;

    fullNote.appendChild(noteTarget);
    }

  }

  return fullNote;
}

export { createFullNote };
