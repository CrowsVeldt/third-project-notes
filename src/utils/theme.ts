import { populateNoteContainer } from "../components/noteContainer";
import { ThemeName } from "./types";

function themeStored(): boolean {
  if (localStorage.getItem("themePref")) return true;
  return false;
}

function saveTheme(theme: ThemeName): void {
  localStorage.setItem("themePref", JSON.stringify(theme));
}

function retrieveTheme(): ThemeName {
  const theme: string | null = localStorage.getItem("themePref");
  if (theme && themeStored() !== null) {
    return JSON.parse(theme);
  }
  return "light";
}

const themeElements: string[] = [
  "app",
  "settings",
  "input-form",
  "full-note",
  "search-bar",
  "sort-select",
  "footer",
  "page-head",
  "note-container",
  "body-input",
  "title-input",
  "tDate-input",
  "color-select",
  "form-button",
  "full-note-title",
];

function setTheme(theme: ThemeName): void {
  themeElements.forEach((id) => {
    const element: HTMLElement | null = document.getElementById(id);

    if (element !== null) {
      if (theme === "dark") {
        element.classList.add(...themes["dark"]);
        element.classList.remove(...themes["light"]);
        saveTheme("dark");
      } else if (theme === "light") {
        element.classList.add(...themes["light"]);
        element.classList.remove(...themes["dark"]);
        saveTheme("light");
      }
    }
  });
  populateNoteContainer();
}

const themes = {
  dark: ["bg-dark", "text-light", "border-light"],
  light: ["bg-light", "text-dark", "border-dark"],
};

export { setTheme, retrieveTheme };
