import newElement from "../utils/newElement";
import wipeButton from "./controls/wipeButton";

const settings = newElement({
  type: "div",
  id: "settings",
  class: [
    "h-75",
    "w-25",
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
  props: [["style", "left: -25%"]],
}) as HTMLDivElement;

const settingsTitle = newElement({
  type: "h3",
  id: "settings-title",
  content: "Settings",
  class: ["border-bottom", "border-dark", "settings"],
}) as HTMLHeadingElement;

const toggleButton = newElement({
  type: "button",
  id: "toggle-settings",
  content: `-\n -\n -`,
  class: ["border", "border-dark", "settings", "btn", "btn-light"],
  props: [
    ["data-bs-toggle", "tooltip"],
    ["data-bs-placement", "right"],
    ["title", "Toggle settings menu"],
  ],
  eventListener: {
    eventType: "click",
    listener: toggleSettings,
  },
}) as HTMLButtonElement;

function toggleSettings(): void {
  const target = settings;
  // const children = document.querySelectorAll('.settings-child')
  // console.log(children)
  if (target) {
    if (settingsIsOpen()) {
      wipeButton.tabIndex = -1;
      target.style.left = "-25%";
    } else {
      target.style.left = "0%";
      wipeButton.tabIndex = 5;
    }
  }
}

function settingsIsOpen(): boolean {
  const settings: HTMLElement | null = document.getElementById("settings");

  if (settings && settings.style.left === "0%") return true;

  return false;
}

settings.append(wipeButton, settingsTitle, toggleButton);

export { settings, settingsIsOpen, toggleSettings };
