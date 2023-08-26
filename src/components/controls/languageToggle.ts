import { setText } from "../../utils/fillTextContent";
import {
  getCurrentLanguage,
  getLanguage,
  langStored,
  setLanguage,
} from "../../utils/languageFunctions";
import newElement from "../../utils/newElement";
import { createLabel } from "../labelAndInput";
import { toggleContainer, toggle, setToggle } from "./toggle";

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
    "toggle-container",
  ],
  props: [["dir", "ltr"]],
}) as HTMLDivElement;

const langToggleLabel1 = createLabel(
  "English",
  "lang-toggle-label",
  ["settings", "settings-child", "form-check-label", "order-1", "w-25"],
  "language-toggle"
) as HTMLLabelElement;

const langToggleLabel2 = createLabel(
  "עברית",
  "lang-toggle-label",
  [
    "settings",
    "settings-child",
    "form-check-label",
    "order-3",
    "w-25",
    "text-end",
  ],
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

// get current language: stored language if there is one, else get from languagetoggle directly
function currentLanguage(): string | void | null {
  return langStored()
    ? getLanguage()
    : languageToggle.getAttribute("data-language");
}

// toggle Language
function changeLanguage(): void {
  if (currentLanguage() === "en-US") {
    setLanguage("he");
    languageToggle.setAttribute("data-language", "he");
    setToggle("language-toggle", "right");
  } else {
    setLanguage("en-US");
    languageToggle.setAttribute("data-language", "en-US");
    setToggle("language-toggle", "left");
  }
}

// set initial direction
const initialDirection: string = currentLanguage() === "he" ? "right" : "left";

languageToggle.append(toggle("language-toggle-switch", initialDirection));
languageToggleContainer.append(
  langToggleLabel1,
  languageToggle,
  langToggleLabel2
);

export default languageToggleContainer;
