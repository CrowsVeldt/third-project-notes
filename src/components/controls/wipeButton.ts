import newElement from "../../utils/newElement";
import { resetNoteContainer } from "../noteContainer";
import { storageExists, wipeStorage } from "../../utils/storage";
import { toggleSettings } from "../settings";
import langOptions from "../../utils/textContent";

const wipeButton: HTMLButtonElement = newElement({
  type: "button",
  id: "wipe-button",
  content: langOptions.english.elementText.wipeButton,
  class: [
    "settings-child",
    "btn",
    "border",
    "border-dark",
    "bg-danger",
    "mb-2",
  ],
  props: [["tabindex", "-1"]],
  eventListener: {
    eventType: "click",
    listener: () => {
      if (
        storageExists() &&
        confirm(langOptions.english.confirmations.wipeButton)
      ) {
        wipeStorage();
        resetNoteContainer();
        toggleSettings();
      }
    },
  },
}) as HTMLButtonElement;

export default wipeButton;
