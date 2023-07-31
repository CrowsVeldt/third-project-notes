import newElement from "../utils/newElement";
import { storageExists, wipeStorage } from "../utils/storage";
import { resetNoteContainer } from "./noteContainer";

const wipeButton: HTMLButtonElement = newElement({
  type: 'button',
  content: 'Delete all notes',
  eventListener: {
    eventType: 'click',
    listener: () => {
      if (storageExists() && confirm("Delete all notes? This cannot be undone.")) {
        wipeStorage()
        resetNoteContainer()
      }
    }
  }
}) as HTMLButtonElement

export default wipeButton;
