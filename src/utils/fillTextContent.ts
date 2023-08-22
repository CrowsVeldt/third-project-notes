import sortOption from "../components/sortOption";
import colorOption from "../components/colorOption";
import l10n from "./l10n";
import { getCurrentLanguage } from "./languageFunctions";
import { SortMethodType } from "./types";
import { populateNoteContainer } from "../components/noteContainer";
import { setToggle } from "../components/controls/toggle";

function setSortMethods() {
  const sortSelect = document.getElementById("sort-select")!;
  sortSelect.innerHTML = "";
  l10n
    .getSortMethods(getCurrentLanguage())
    .forEach((method: SortMethodType) => {
      sortSelect.append(sortOption(method));
    });
}

function setColors() {
  const colorSelect = document.getElementById("color-select")!;
  colorSelect.innerHTML = "";
  l10n.getColors(getCurrentLanguage()).forEach((color: any) => {
    colorSelect.append(colorOption(color));
  });
}

function setToolTips() {
  const targets = l10n.getToolTips(getCurrentLanguage());
  for (let key in targets) {
    document.getElementById(key)?.setAttribute("title", targets[key]);
  }
}

function setTextContent() {
  const targets = l10n.getTextContents(getCurrentLanguage());
  const id = (a: string) => document.getElementById(a)!;
  for (let key in targets) {
    if (key === "search-bar") {
      id(key).setAttribute("placeholder", targets[key]);
    } else if (key === "form-heading:add" || key === "form-heading:update") {
      id("form-heading").textContent = targets["form-heading:add"];
    } else if (key === "form-button:add" || key === "form-button:update") {
      id("form-button").textContent = targets["form-button:add"];
    } else if (key === "note-target-date" || key === "note-create-date") {
      populateNoteContainer();
    } else {
      id(key).textContent = targets[key];
    }
  }
}

function setText() {
  setColors();
  setSortMethods();
  setToolTips();
  // confirmation messages are set when their buttons are clicked
  setTextContent();
  setToggle("language-toggle", "data-language", "he");
}

export { setText };
