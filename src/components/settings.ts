import newElement from "../utils/newElement";
import langOptions from "../utils/textContent";
import languageToggle from "./controls/languageToggle";
import wipeButton from "./controls/wipeButton";

const settings = newElement({
  type: "div",
  id: "settings",
  class: [
    "h-75",
    "position-fixed",
    "top-50",
    "translate-middle-y",
    "bg-light",
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
  content: langOptions.english.elementText.settings.title,
  class: ["border-bottom", "border-dark", 'settings'],
}) as HTMLHeadingElement;

const languageToggleContainer = newElement({
  type: "div",
  id: "lang-toggle-container",
  class: ['settings', 'settings-child']
}) as HTMLDivElement;

const toggleButton = newElement({
  type: "button",
  id: "toggle-settings",
  content: `-\n -\n -`,
  class: ["border", "border-dark", "button-color", "no-select"],
  props: [
    ["data-bs-toggle", "tooltip"],
    ["data-bs-placement", "right"],
    ["title", langOptions.english.tooltips.settings],
  ],
  eventListener: {
    eventType: "click",
    listener: toggleSettings,
  },
}) as HTMLButtonElement;

function toggleSettings(): void {
  const target = document.getElementById("settings");
  const style = getComputedStyle(target!);
  const children = document.querySelectorAll(".settings-child");
  if (target) {
    if (settingsIsOpen()) {
      children.forEach((child) => {
        const c = child as HTMLElement;
        c.tabIndex = -1;
      });
      // wipeButton.tabIndex = -1;
      target.style.left = `-${style.minWidth}`;
    } else {
      // wipeButton.tabIndex = 5;
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

languageToggleContainer.append(languageToggle);
settings.append(
  wipeButton,
  languageToggleContainer,
  settingsTitle,
  toggleButton
);

export { settings, settingsIsOpen, toggleSettings };
