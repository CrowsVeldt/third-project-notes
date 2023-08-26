import sortOption from "../components/sortOption";
import colorOption from "../components/colorOption";
import l10n from "./l10n";
import { getCurrentLanguage } from "./languageFunctions";
import { SortMethodType } from "./types";
import { populateNoteContainer } from "../components/noteContainer";

function setSortMethods(): void {
  const sortSelect = document.getElementById(
    "sort-select"
  ) as HTMLSelectElement;
  sortSelect.innerHTML = "";
  l10n
    .getSortMethods(getCurrentLanguage())
    .forEach((method: SortMethodType) => {
      sortSelect.append(sortOption(method));
    });
}

function setColors(): void {
  const colorSelect = document.getElementById(
    "color-select"
  ) as HTMLSelectElement;
  colorSelect.innerHTML = "";
  l10n.getColors(getCurrentLanguage()).forEach((color: any) => {
    colorSelect.append(colorOption(color));
  });
}

function setToolTips(): void {
  const targets: { [index: string]: string } = l10n.getToolTips(
    getCurrentLanguage()
  );
    for (let key in targets) {
      const target = document.getElementById(key) as HTMLElement;
      if (target !== null) target.setAttribute("title", targets[key]);
    }
}

function setTextContent(): void {
  const targets: { [index: string]: string } = l10n.getAllTextContents(
    getCurrentLanguage()
  );
  const getId: (a: string) => HTMLElement = (a: string) =>
    document.getElementById(a) as HTMLElement;
  for (let key in targets) {
    if (key === "search-bar") {
      getId(key).setAttribute("placeholder", targets[key]);
    } else if (key === "form-heading:add" || key === "form-heading:update") {
      getId("form-heading").textContent = targets["form-heading:add"];
    } else if (key === "form-button:add" || key === "form-button:update") {
      getId("form-button").textContent = targets["form-button:add"];
    } else if (key === "note-target-date" || key === "note-create-date") {
      populateNoteContainer();
    } else {
      getId(key).textContent = targets[key];
    }
  }
}

function setText() {
  setColors();
  setSortMethods();
  setToolTips();
  // confirmation messages are set when their buttons are clicked
  setTextContent();
}

export { setText };
