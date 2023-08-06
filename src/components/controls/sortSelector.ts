import directionToggle from "./directionToggle";
import { sortMethods } from "../../utils/util";
import { SortMethod } from "../../utils/types";
import { resetNoteContainer } from "../noteContainer";
import { getStoredNotes } from "../../utils/storage";
import sortNotes from "../../utils/sort";
import newElement from "../../utils/newElement";

function sortOption(option: SortMethod): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option.method;
  o.value = option.method;
  return o;
}

const selectContainer = newElement({
  type: "div",
  id: "sort-select-container",
}) as HTMLDivElement;

const sortSelect = newElement({
  type: "select",
  id: "sort-select",
  class: ["me-3"],
  props: [
    ["ariaLabel", "Default select element"],
    ["tabindex", "1"],
  ],
}) as HTMLSelectElement;

sortMethods.forEach((method: SortMethod) => {
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
