import newElement from "../../utils/newElement";
import { resetNoteContainer } from "../noteContainer";
import { storageExists, wipeStorage } from "../../utils/storage";
import { toggleSettings } from "../settings";
import l18n from "../../utils/l18n";
import { getCurrentLanguage } from "../../utils/language";
import { L18nLangOption } from "../../utils/types";

const wipeButton: HTMLButtonElement = newElement({
  type: "button",
  id: "wipe-button",
  content: l18n.getTextContent(
    "id",
    getCurrentLanguage() as L18nLangOption,
    "wipe-button"
  ),
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
        confirm(
          l18n.getConfirmation(
            "id",
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
