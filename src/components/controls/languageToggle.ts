import { setText } from "../../utils/fillTextContent";
import {
  getCurrentLanguage,
  getLanguage,
  langStored,
  setLanguage,
} from "../../utils/language";
import newElement from "../../utils/newElement";
import { createLabel } from "../labelAndInput";
import { toggleContainer, toggle } from "./toggle";

const languageToggleContainer = newElement({
  type: "div",
  id: "lang-toggle-container",
  class: [
    "settings",
    "settings-child",
    "form-check",
    "form-switch",
    "align-self-center",
    "d-flex",
    "justify-content-between",
  ],
  props: [["dir", "ltr"]],
}) as HTMLDivElement;

const langToggleLabel1 = createLabel(
  "English",
  "lang-toggle-label",
  ["settings", "settings-child", "form-check-label", "order-1"],
  "language-toggle"
) as HTMLLabelElement;

const langToggleLabel2 = createLabel(
  "עברית",
  "lang-toggle-label",
  ["settings", "settings-child", "form-check-label", "order-3"],
  "language-toggle"
) as HTMLLabelElement;

const languageToggle = toggleContainer(
  "language-toggle",
  ["order-2"],
  [
    ["dir", "ltr"],
    ["type", "checkbox"],
    ["role", "switch"],
    ["data-language", getCurrentLanguage()],
  ]
) as HTMLDivElement;

languageToggle.addEventListener("click", () => {
  changeLanguage();
  setText();
});

function changeLanguage(): void {
  const currentLang: string | void | null = langStored()
    ? getLanguage()
    : languageToggle.getAttribute("data-language");
  if (currentLang) {
    if (currentLang === "en-US") {
      setLanguage("he");
      languageToggle.setAttribute("data-language", "he");
    } else {
      setLanguage("en-US");
      languageToggle.setAttribute("data-language", "en-US");
    }
  }
}

languageToggle.append(toggle);
languageToggleContainer.append(
  langToggleLabel1,
  languageToggle,
  langToggleLabel2
);

export default languageToggleContainer;
