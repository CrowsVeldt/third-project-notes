import newElement from "../../utils/newElement";
import { storageExists, wipeStorage } from "../../utils/storage";
import { resetNoteContainer } from "../noteContainer";

const wipeButton: HTMLButtonElement = newElement({
  type: "button",
  id: 'wipe-button',
  content: "Delete all?",
  class: ["settings", 'btn', 'border', 'border-dark', 'bg-danger', 'mb-2'],
  eventListener: {
    eventType: "click",
    listener: () => {
      if (
        storageExists() &&
        confirm("Delete all notes? This cannot be undone.")
      ) {
        wipeStorage();
        resetNoteContainer();
      }
    },
  },
}) as HTMLButtonElement;

export default wipeButton;
