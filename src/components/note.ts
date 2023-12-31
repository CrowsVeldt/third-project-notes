import { deleteNote } from "../utils/noteStorage";
import { formatDate } from "../utils/util";
import { formHandler } from "./noteForm";
import newElement from "../utils/newElement";
import { L10nLangOption, Note } from "../utils/types";
import NoteObj from "../classes/Note";
import { toggleFullNote } from "./fullNote";
import l10n from "../utils/l10n";
import { getCurrentLanguage } from "../utils/languageFunctions";
import getColor from "../utils/colors";
import { retrieveTheme } from "../utils/theme";

function newNote(n: Note | undefined): HTMLDivElement {
  const note = n
    ? new NoteObj(n.title, n.body, n.color, n.id, n.createDate, n.targetDate)
    : new NoteObj();

  const id = note.getId();
  const deleteId: string = "delete-" + id;
  const editId: string = "edit-" + id;

  const noteDiv: HTMLDivElement = newElement({
    type: "div",
    id: id,
    class: [
      "border",
      "rounded",
      "ms-1",
      "p-2",
      "d-flex",
      "flex-column",
      "overflow-hidden",
      "note",
      retrieveTheme() === "dark" ? "border-light" : "border-dark",
    ],
    props: [
      [
        "style",
        `background-color: ${getColor(retrieveTheme(), note.getColor())}`,
      ],
      ["tabindex", "0"],
    ],
  }) as HTMLDivElement;

  const noteHead = newElement({
    type: "div",
    class: ["note-head", "d-flex", "justify-content-between", "mb-1"],
  }) as HTMLDivElement;

  const noteTitle = newElement({
    type: "h4",
    class: ["note-title", "overflow-hidden", "align-self-center", "text-break"],
    content: note.getTitle(),
  }) as HTMLHeadingElement;

  const noteBody = newElement({
    type: "p",
    class: [
      "overflow-hidden",
      "border-top",
      "border-bottom",
      "flex-grow-1",
      "note-body",
    ],
    content: note.getBody(),
  }) as HTMLParagraphElement;

  const noteFoot = newElement({
    type: "div",
    class: [
      "note-foot",
      "d-flex",
      "align-self-stretch",
      "justify-content-between",
    ],
  }) as HTMLDivElement;

  const noteDatesContainer = newElement({
    type: "div",
    class: ["dates-container", "d-flex", "flex-column", "justify-content-end"],
  }) as HTMLDivElement;

  const noteCDate = newElement({
    type: "p",
    class: ["mb-0", "note-create-date", "align-self-start"],
    content:
      l10n.getTextContent(
        getCurrentLanguage() as L10nLangOption,
        "note-create-date"
      ) + note.getCreateDate(),
  }) as HTMLParagraphElement;

  const noteTDate = newElement({
    type: "p",
    class: ["mb-0", "note-target-date", "align-self-start"],
    content: note.getTargetDate()
      ? l10n.getTextContent(
          getCurrentLanguage() as L10nLangOption,
          "note-target-date"
        ) + formatDate(note.getTargetDate())
      : "-",
    // if no target date, turn value clear to keep the layout consistant
    props: [["style", `color:${note.getTargetDate() ? "" : "transparent"};`]],
  }) as HTMLParagraphElement;

  const deleteButton = newElement({
    type: "button",
    id: deleteId,
    class: [
      "align-self-center",
      "btn",
      "note-button",
      "note-delete-button",
      retrieveTheme() === "dark" ? "text-light" : "text-dark",
    ],
    eventListener: {
      eventType: "click",
      listener: () => {
        if (
          confirm(
            l10n.getConfirmation(
              getCurrentLanguage() as L10nLangOption,
              "note-delete-button"
            )
          )
        ) {
          deleteNote(note.getId());
          document.getElementById(note.getId())?.remove();
        }
      },
    },
  }) as HTMLButtonElement;

  const editButton = newElement({
    type: "button",
    id: editId,
    class: [
      "align-self-start",
      "toggle-button",
      "btn",
      "note-button",
      retrieveTheme() === "dark" ? "text-light" : "text-dark",
    ],
    eventListener: {
      eventType: "click",
      listener: (evt) => {
        formHandler(evt!, note.getId());
      },
    },
  }) as HTMLButtonElement;

  deleteButton.addEventListener("mouseenter", toggleDeleteIcon);
  deleteButton.addEventListener("mouseleave", toggleDeleteIcon);
  editButton.addEventListener("mouseenter", toggleEditIcon);
  editButton.addEventListener("mouseleave", toggleEditIcon);

  function toggleDeleteIcon(): void {
    const button: HTMLElement = deleteIcon;
    button.classList.toggle("bi-trash");
    button.classList.toggle("bi-trash-fill");
  }

  function toggleEditIcon(): void {
    const button: HTMLElement = editIcon;
    button.classList.toggle("bi-pencil");
    button.classList.toggle("bi-pencil-fill");
  }

  const deleteIcon = newElement({
    type: "i",
    class: ["bi", "bi-trash"],
  }) as HTMLElement;
  deleteButton.append(deleteIcon);

  const editIcon = newElement({
    type: "i",
    class: ["bi-pencil"],
  });
  editButton.append(editIcon);

  noteHead.append(noteTitle, editButton);
  noteDatesContainer.append(noteTDate, noteCDate);
  noteFoot.append(noteDatesContainer, deleteButton);
  noteDiv.append(noteHead, noteBody, noteFoot);

  noteDiv.addEventListener("dblclick", (evt) => {
    const target = evt.target as HTMLElement;
    if (target && target.id !== deleteId && target.id !== editId) {
      toggleFullNote(note.getId());
    }
  });

  noteDiv.addEventListener("mouseenter", () => {
    noteDiv.classList.add("border-2");
  });

  noteDiv.addEventListener("mouseleave", () => {
    noteDiv.classList.remove("border-2");
  });

  return noteDiv;
}

export default newNote;
