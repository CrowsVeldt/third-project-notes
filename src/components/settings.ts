import newElement from "../utils/newElement";
import wipeButton from "./controls/wipeButton";

const settings = newElement({
  type: "div",
  id: "settings",
  class: [
    "h-75",
    "w-25",
    "position-absolute",
    "top-50",
    "translate-middle-y",
    "bg-light",
    "border",
    "border-dark",
    "rounded",
    'd-flex',
    'flex-column-reverse',
    'justify-content-between',
    'align-items-center',
    "settings",
  ],
    props: [["style", "left: -25%"]],
}) as HTMLDivElement;

const settingsTitle = newElement({
    type: 'h3',
    id: 'settings-title',
    content: 'Settings',
    class: ['border-bottom', 'border-dark']
}) as HTMLHeadingElement

const toggleButton = newElement({
  type: "button",
  id: "toggle-settings",
  content: `-\n -\n -`,
  class: ["border", "border-dark", "settings", 'btn', 'btn-secondary',],
  eventListener: {
    eventType: "click",
    listener: toggleSettings,
  },
}) as HTMLButtonElement;

function toggleSettings(): void {
  const target = settings;
  if (target) {
    if (target.style.left === "0%") {
      target.style.left = "-25%";
    } else {
      target.style.left = "0%";
      wipeButton.tabIndex = 5
    }
  }
}

settings.append(wipeButton, settingsTitle, toggleButton);

export { settings, toggleSettings };
