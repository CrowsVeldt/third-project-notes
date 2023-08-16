import sortOption from "../components/sortOption";
import colorOption from "../components/colorOption";
import l18n from "./l18n";
import { getCurrentLanguage } from "./language";
import { SortMethodType } from "./types";

function setSortMethods() {
  const sortSelect = document.getElementById("sort-select")!;
  sortSelect.innerHTML = "";
  l18n
    .getSortMethods(getCurrentLanguage())
    .forEach((method: SortMethodType) => {
      sortSelect.append(sortOption(method));
    });
}

function setColors() {
  const colorSelect = document.getElementById("color-select")!;
  colorSelect.innerHTML = "";
  l18n
    .getColors(getCurrentLanguage())
    .forEach((color: any) => {
      colorSelect.append(colorOption(color));
    });
}

function setToolTips () {
    console.log(l18n.getToolTips(getCurrentLanguage()))
    const targets = l18n.getToolTips(getCurrentLanguage())
    // loop over targets: id(target[key]).setAttribute('title', target[value])
}

function resetText() {
  setColors();
  setSortMethods();
  setToolTips()
  // set confirmations
  // set textContent
}

export { resetText };
