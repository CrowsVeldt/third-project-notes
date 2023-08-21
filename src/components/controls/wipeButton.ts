import newElement from "../../utils/newElement";
import { resetNoteContainer } from "../noteContainer";
import { storageExists, wipeStorage } from "../../utils/noteStorage";
import { toggleSettings } from "../settings";
import l10n from "../../utils/l10n";
import { getCurrentLanguage } from "../../utils/languageFunctions";
import { l10nLangOption } from "../../utils/types";

const wipeButton: HTMLButtonElement = newElement({
  type: "button",
  id: "wipe-button",
  content: l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "wipe-button"
  ),
  class: [
    "btn",
    "border",
    "border-dark",
    "bg-danger",
    "mb-2",
    "settings",
    "settings-child",
  ],
  props: [["tabindex", "-1"]],
  eventListener: {
    eventType: "click",
    listener: () => {
      if (
        storageExists() &&
        confirm(
          l10n.getConfirmation(
            getCurrentLanguage() as l10nLangOption,
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
