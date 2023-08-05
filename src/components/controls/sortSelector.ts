import directionToggle from "./directionToggle";
import { sortMethods } from "../../utils/util";
import { SortMethod } from "../../utils/types";
import { resetNoteContainer } from "../noteContainer";
import { getStoredNotes } from "../../utils/storage";
import sortNotes from "../../utils/sort";

function sortOption(option: SortMethod): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option.method;
  o.value = option.method;
  return o;
}

const selectContainer: HTMLDivElement = document.createElement("div");
selectContainer.id = "sort-select-container";
selectContainer.classList.add("d-flex", "align-items-center");
const sortSelect: HTMLSelectElement = document.createElement("select");
sortSelect.id = "sort-select";
sortSelect.classList.add("me-3");
sortSelect.ariaLabel = "Default select element";

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
