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

const langToggleLabel = createLabel(
  l18n.getTextContent(
    getCurrentLanguage() as L18nLangOption,
    "language-toggle"
  ),
  "lang-toggle-label",
  ["settings"]
);

function changeLanguage(): void {
  const currentLang: string | void | null = langStored()
    ? getLanguage()
    : languageToggle.getAttribute("data-language");
  if (currentLang) {
    const newLang: L18nLangOption = currentLang === "en-US" ? "he" : "en-US";
    setLanguage(newLang);
    languageToggle.setAttribute("data-language", newLang);
  }

  window.location.reload();
}

const languageToggle = newElement({
  type: "input",
  id: "language-toggle",
  class: ["settings-child", "settings"],
  props: [
    ["type", "checkbox"],
    ["data-language", "he"],
  ],
  eventListener: {
    eventType: "change",
    listener: () => {
      changeLanguage();
    },
  },
});

langToggleLabel.append(languageToggle);

export default langToggleLabel;
