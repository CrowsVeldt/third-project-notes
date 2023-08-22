import { createLabel } from "../labelAndInput";
import newElement from "../../utils/newElement";
import { setTheme } from "../../utils/theme";
import { toggle, toggleContainer, setToggle } from "./toggle";

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
    "toggle-container"
  ],
  props: [["dir", "ltr"]],
}) as HTMLDivElement;

const themeToggleLabel1 = createLabel(
  "Light",
  "theme-toggle-light",
  ["settings", "settings-child", "form-check-label", "order-1"],
  "theme-toggle"
) as HTMLLabelElement;

const themeToggleLabel2 = createLabel(
  "Dark",
  "theme-toggle-dark",
  ["settings", "settings-child", "form-check-label", "order-3"],
  "theme-toggle"
) as HTMLLabelElement;

const themeToggle = toggleContainer(
  "theme-toggle",
  ["order-2"],
  [
    ["dir", "ltr"],
    ["type", "checkbox"],
    ["role", "switch"],
    ["data-theme", "light"],
  ]
) as HTMLDivElement;

themeToggle.addEventListener("click", () => {
  changeTheme();
});

function changeTheme(): void {
  // get theme if stored
  const currentTheme = themeToggle.getAttribute("data-theme");
  if (currentTheme) {
    if (currentTheme === "light") {
      setTheme("dark");
      themeToggle.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      themeToggle.setAttribute("data-theme", "light");
    }
  }
  setToggle("theme-toggle", "data-theme", "dark");
}

themeToggle.append(toggle("theme-toggle-switch"));
themeToggleContainer.append(themeToggleLabel1, themeToggle, themeToggleLabel2);

export default themeToggleContainer;
