import sortOption from "../components/sortOption";
import colorOption from "../components/colorOption";
import l18n from "./l18n";
import { getCurrentLanguage } from "./language";
import { L18nLangOption, SortMethodType } from "./types";

function setSortMethods() {
  const sortSelect = document.getElementById("sort-select")!;
  sortSelect.innerHTML = "";
  l18n
    .getSortMethods(getCurrentLanguage() as L18nLangOption)
    .forEach((method: SortMethodType) => {
      sortSelect.append(sortOption(method));
    });
}

function setColors() {
  const colorSelect = document.getElementById("color-select")!;
  colorSelect.innerHTML = "";
  l18n
    .getColors(getCurrentLanguage() as L18nLangOption)
    .forEach((color: any) => {
      colorSelect.append(colorOption(color));
    });
}

function resetText() {
  // const targetList = document.querySelectorAll(".l18n-target");
  setColors();
  setSortMethods();
  // set tooltips
  // set confirmations
  // set textContent
}

export { resetText };
