 import l18n from "../../utils/l18n";
import {
   getCurrentLanguage,
  getLanguage,
  langStored,
  setLanguage,
} from "../../utils/language";
import newElement from "../../utils/newElement";
import { L18nLangOption } from "../../utils/types";

import { createLabel } from "../labelAndInput";
// import { resetNoteContainer } from "../noteContainer";

const languageToggleContainer = newElement({
  type: "div",
  id: "lang-toggle-container",
  class: ["settings", "settings-child", 'form-check', 'form-switch'],
}) as HTMLDivElement;

const langToggleLabel = createLabel(
  l18n.getTextContent(
    getCurrentLanguage() as L18nLangOption,
    "language-toggle"
  ),
  "lang-toggle-label",
  ["settings", 'settings-child', 'form-check-label']
);

const languageToggle = newElement({
  type: "input",
  id: "language-toggle",
  class: ["settings-child", "settings", 'form-check-input'],
  props: [
    ["type", "checkbox"],
    ["role", "switch"],
    ["data-language", "he"],
  ],
  eventListener: {
    eventType: "change",
    listener: () => {
      changeLanguage();
      window.location.reload();
    },
  },
});

function changeLanguage(): void {
  const currentLang: string | void | null = langStored()
    ? getLanguage()
    : languageToggle.getAttribute("data-language");
  if (currentLang) {
    const newLang: L18nLangOption = currentLang === "en-US" ? "he" : "en-US";
    setLanguage(newLang);
    languageToggle.setAttribute("data-language", newLang);
  }

  // window.location.reload();
  // resetNoteContainer()
}

langToggleLabel.append(languageToggle)
languageToggleContainer.append(langToggleLabel);
export default languageToggleContainer;
