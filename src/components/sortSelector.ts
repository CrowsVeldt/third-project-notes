import directionToggle from "./directionToggle";
import { sortMethods } from "../utils/util";
import { SortMethod } from "../utils/types";
import { resetNoteContainer } from "./noteContainer";
import { storedNotes } from "../utils/storage";
import sortNotes from "../utils/sort";

function sortOption(option: SortMethod): HTMLOptionElement {
  const o: HTMLOptionElement = document.createElement("option");
  o.innerText = option.method;
  o.value = option.method;
  return o;
}

function sortSelect(): HTMLDivElement {
  const selectContainer: HTMLDivElement = document.createElement("div");
  selectContainer.id = 'sort-select-container'
  selectContainer.classList.add(
    "d-flex",
    "align-items-center"
  );
  const sortSelect: HTMLSelectElement = document.createElement("select");
  sortSelect.id = "sort-select";
  sortSelect.classList.add('me-3')
  sortSelect.ariaLabel = "Default select element";

  sortMethods.forEach((method: SortMethod) => {
    sortSelect.appendChild(sortOption(method));
  });

  const sortToggle: HTMLDivElement = directionToggle

  sortSelect.addEventListener("change", () => {
    const target = document.getElementById("sort-select") as HTMLSelectElement;
    resetNoteContainer(sortNotes(storedNotes()!, target.value));
  });
  sortToggle.addEventListener("click", () => {
    const target = document.getElementById("sort-select") as HTMLSelectElement;
    resetNoteContainer(sortNotes(storedNotes()!, target.value));
  });

  selectContainer.appendChild(sortSelect);
  selectContainer.appendChild(sortToggle);
  return selectContainer;
}

export default sortSelect;
