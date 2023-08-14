import newElement from "../../utils/newElement";
import { resetNoteContainer } from "../noteContainer";
import { storageExists, wipeStorage } from "../../utils/storage";
import { toggleSettings } from "../settings";
import langOptions from "../../utils/textContent";
import l18n from "../../utils/l18n";

const wipeButton: HTMLButtonElement = newElement({
  type: "button",
  id: "wipe-button",
  content: langOptions.english.elementText.wipeButton,
  class: [
    "btn",
    "border",
    "border-dark",
    "bg-danger",
    "mb-2",
    "settings-child",
  ],
  props: [["tabindex", "-1"]],
  eventListener: {
    eventType: "click",
    listener: () => {
      if (
        storageExists() &&
        confirm(l18n.getConfirmation('id', 'en-US', 'wipe-button'))
      ) {
        wipeStorage();
        resetNoteContainer();
        toggleSettings();
      }
    },
  },
}) as HTMLButtonElement;

export default wipeButton;
