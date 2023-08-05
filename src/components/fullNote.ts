import { formatDate } from "../utils/util";
import { getNote } from "../utils/storage";
import newElement from "../utils/newElement";

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
      "top-25",
      "start-50",
      "translate-middle-x",
      "border",
      "border-dark",
      "rounded",
      //'hideable'
    ],
    // props: [["style", `background-color:${note ? note.color : "none"};`]],
  }) as HTMLDivElement;

  if (note) {
    const noteTitle: HTMLHeadingElement = newElement({
      type: "h3",
      id: "full-note-title",
      class: ["form-label", "text-center", "border-bottom", 'w-100'],
      content: `${note.title}`,
      props: [["style", `background-color:${note ? note.color : "none"};`]],
    }) as HTMLHeadingElement;

    fullNote.appendChild(noteTitle);

    const noteBackground: HTMLDivElement = newElement({
      type: "div",
      id: "full-note-bg",
      class: ['d-flex', 'flex-column', 'justify-content-between'],
      props: [["style", `background-color:white;`]],
    }) as HTMLDivElement;

    fullNote.appendChild(noteBackground);

    const noteBody: HTMLParagraphElement = newElement({
      type: "p",
      id: "full-note-body",
      class: ["overflow-scroll", "px-3", "border-bottom"],
      content: note.body,
    }) as HTMLParagraphElement;

    noteBackground.appendChild(noteBody);

    const dateContainer: HTMLDivElement = newElement({
      type: 'div',
      id: 'full-note-dates',
      class: []
    }) as HTMLDivElement

    noteBackground.appendChild(dateContainer)

    const noteCreated: HTMLParagraphElement = newElement({
      type: "p",
      id: "full-note-created",
      class: ["px-3", "border-bottom"],
      content: `Created on: ${note.createDate}`,
    }) as HTMLParagraphElement;

    dateContainer.appendChild(noteCreated);

    if (note.targetDate) {
      const noteTarget: HTMLParagraphElement = newElement({
        type: "p",
        id: "full-note-created",
        class: ["px-3", "border-bottom"],
        content: `Target date: ${formatDate(note.targetDate)}`,
      }) as HTMLParagraphElement;

      dateContainer.appendChild(noteTarget);

    }
  }

  return fullNote;
}

export { createFullNote };
