import { getCurrentLanguage } from "../utils/languageFunctions";
import l10n from "../utils/l10n";
import { l10nLangOption } from "../utils/types";
import languageToggle from "./controls/languageToggle";
import newElement from "../utils/newElement";
import wipeButton from "./controls/wipeButton";
import themeToggleContainer from "./controls/themeToggle";

const settings = newElement({
  type: "div",
  id: "settings",
  class: [
    "h-75",
    "position-fixed",
    "top-50",
    "translate-middle-y",
    "border",
    "border-dark",
    "rounded",
    "d-flex",
    "flex-column-reverse",
    "justify-content-between",
    "align-items-center",
    "settings",
  ],
}) as HTMLDivElement;

const settingsTitle = newElement({
  type: "h3",
  id: "settings-title",
  content: l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "settings-title"
  ),
  class: ["border-bottom", "border-dark", "settings", "settings-child"],
}) as HTMLHeadingElement;

const toggleButton = newElement({
  type: "button",
  id: "toggle-settings",
  content: `-\n -\n -`,
  class: [
    "border",
    "border-dark",
    "button-color",
    "no-select",
    "settings-child",
  ],
  props: [
    ["data-bs-toggle", "tooltip"],
    ["data-bs-placement", "right"],
    // title prop set via setText
  ],
  eventListener: {
    eventType: "click",
    listener: toggleSettings,
  },
}) as HTMLButtonElement;

function toggleSettings(): void {
  const target: HTMLElement | null = document.getElementById("settings");

  if (target) {
    const style: CSSStyleDeclaration = getComputedStyle(target);
    const children = document.querySelectorAll(".settings-child");
    if (settingsIsOpen()) {
      children.forEach((child) => {
        const c = child as HTMLElement;
        c.tabIndex = -1;
      });
      target.style.left = `-${style.minWidth}`;
    } else {
      children.forEach((child) => {
        const c = child as HTMLElement;
        c.tabIndex = 0;
      });
      target.style.left = "0%";
    }
  }
}

function settingsIsOpen(): boolean {
  const settings: HTMLElement = document.getElementById("settings")!;
  return settings && settings.style.left === "0%";
}

settings.append(
  wipeButton,
  languageToggle,
  themeToggleContainer,
  settingsTitle,
  toggleButton
);

export { settings, settingsIsOpen, toggleSettings };
