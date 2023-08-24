import { createLabel } from "../labelAndInput";
import newElement from "../../utils/newElement";
import { retrieveTheme, setTheme } from "../../utils/theme";
import { setToggle, toggle, toggleContainer } from "./toggle";
import { populateNoteContainer } from "../noteContainer";

const themeToggleContainer = newElement({
  type: "div",
  id: "toggle-theme-container",
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

const themeToggleLabel1 = createLabel(
  "Light",
  "theme-toggle-light",
  ["settings", "settings-child", "form-check-label", "order-1", 'w-25'],
  "theme-toggle"
) as HTMLLabelElement;

const themeToggleLabel2 = createLabel(
  "Dark",
  "theme-toggle-dark",
  ["settings", "settings-child", "form-check-label", "order-3", 'w-25', 'text-end'],
  "theme-toggle"
) as HTMLLabelElement;

const themeToggle = toggleContainer(
  "theme-toggle",
  ["order-2"],
  [
    ["dir", "ltr"],
    ["type", "checkbox"],
    ["role", "switch"],
    ["data-theme", retrieveTheme()],
  ]
) as HTMLDivElement;

themeToggle.addEventListener("click", () => {
  changeTheme();
});

function currentTheme(): string {
  return themeToggle.getAttribute("data-theme")!;
}

function changeTheme(): void {
  if (currentTheme()) {
    if (currentTheme() === "light") {
      setTheme("dark");
      themeToggle.setAttribute("data-theme", "dark");
      setToggle("theme-toggle", "right");
    } else {
      setTheme("light");
      themeToggle.setAttribute("data-theme", "light");
      setToggle("theme-toggle", "left");
    }
  }
  populateNoteContainer()
}

const initialTheme: string = retrieveTheme() === "dark" ? "right" : "left";

themeToggle.append(toggle("theme-toggle-switch", initialTheme));
themeToggleContainer.append(themeToggleLabel1, themeToggle, themeToggleLabel2);

export default themeToggleContainer;
