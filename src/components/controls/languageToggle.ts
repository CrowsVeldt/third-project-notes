import { getCurrentLanguage, getLanguage, langStored, setLanguage } from "../../utils/language";
import newElement from "../../utils/newElement";
import { createLabel } from "../labelAndInput";


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
  props: [['dir', 'ltr']]
}) as HTMLDivElement;

const langToggleLabel1 = createLabel("English", "lang-toggle-label", [
  "settings",
  "settings-child",
  "form-check-label",
  "order-1",
]);

const langToggleLabel2 = createLabel("עברית", "lang-toggle-label", [
  "settings",
  "settings-child",
  "form-check-label",
  "order-3",
]);

const languageToggle = newElement({
  type: "input",
  id: "language-toggle",
  class: ["settings-child", "settings", "form-check-input", "order-2"],
  props: [
    ["type", "checkbox"],
    ["role", "switch"],
    ["data-language", getCurrentLanguage() === 'en-US' ? 'en-US' : 'he'],
    [getCurrentLanguage() === 'he' ? 'checked' : 'notchecked']
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
    if (currentLang === "en-US") {
      setLanguage("he");
      languageToggle.setAttribute("data-language", 'he');
      languageToggle.setAttribute('checked', 'true')
    } else {
      setLanguage('en-US')
      languageToggle.setAttribute('data-language', 'en-US')
      languageToggle.removeAttribute('checked')
    }
  }
}

languageToggleContainer.append(
  langToggleLabel1,
  languageToggle,
  langToggleLabel2
);
export default languageToggleContainer;
