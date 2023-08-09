import directionToggle from "./directionToggle";
import { getStoredNotes } from "../../utils/storage";
import newElement from "../../utils/newElement";
import { resetNoteContainer } from "../noteContainer";
import { sortMethods } from "../../utils/util";
import { SortMethodType } from "../../utils/types";
import sortNotes from "../../utils/sort";

function sortOption(option: SortMethodType): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option.method;
  o.value = option.method;
  return o;
}

const selectContainer = newElement({
  type: "div",
  id: "sort-select-container",
  class: ["me-3", "d-flex", "align-items-center"],
}) as HTMLDivElement;

const sortSelect = newElement({
  type: "select",
  id: "sort-select",
  class: ["me-1"],
  props: [
    ["ariaLabel", "Default select element"],
    ["tabindex", "1"],
  ],
}) as HTMLSelectElement;

sortMethods.forEach((method: SortMethodType) => {
  sortSelect.append(sortOption(method));
});

sortSelect.addEventListener("change", () => {
  const target = document.getElementById("sort-select") as HTMLSelectElement;
  resetNoteContainer(sortNotes(getStoredNotes()!, target.value));
});

const sortToggle: HTMLDivElement = directionToggle;

sortToggle.addEventListener("click", () => {
  const target = document.getElementById("sort-select") as HTMLSelectElement;
  resetNoteContainer(sortNotes(getStoredNotes()!, target.value));
});

selectContainer.append(sortSelect, sortToggle);

export default selectContainer;
