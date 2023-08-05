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
    "settings",
  ],
  props: [["style", "left: -25%"]],
}) as HTMLDivElement;

const toggleButton = newElement({
  type: "button",
  id: "settings-button",
  content: `-\n -\n -`,
  class: ["border", "border-dark", "rounded-end", "settings"],
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
    }
  }
}

settings.append(wipeButton, toggleButton);

export { settings, toggleSettings };
