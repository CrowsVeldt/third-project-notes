import newElement from "../../utils/newElement";
import { resetNoteContainer } from "../noteContainer";
import { storageExists, wipeStorage } from "../../utils/noteStorage";
import { toggleSettings } from "../settings";
import l18n from "../../utils/l18n";
import { getCurrentLanguage } from "../../utils/language";
import { L18nLangOption } from "../../utils/types";

const wipeButton: HTMLButtonElement = newElement({
  type: "button",
  id: "wipe-button",
  content: l18n.getTextContent(
    getCurrentLanguage() as L18nLangOption,
    "wipe-button"
  ),
  class: [
    "btn",
    "border",
    "border-dark",
    "bg-danger",
    "mb-2",
    'settings', 
    "settings-child",
  ],
  props: [["tabindex", "-1"]],
  eventListener: {
    eventType: "click",
    listener: () => {
      // listener not even being called?
      if (
        storageExists() &&
        confirm(
          l18n.getConfirmation(
            getCurrentLanguage() as L18nLangOption,
            "wipe-button"
          )
        )
      ) {
        wipeStorage();
        resetNoteContainer();
        toggleSettings();
      }
    },
  },
}) as HTMLButtonElement;

export default wipeButton;
