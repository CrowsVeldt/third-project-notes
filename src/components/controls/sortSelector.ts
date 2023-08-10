import directionToggle from "./directionToggle";
import { getDisplayedNotes, resetNoteContainer } from "../noteContainer";
import newElement from "../../utils/newElement";
import { Note, SortMethodType } from "../../utils/types";
import { sortMethods } from "../../utils/util";
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
  class: ["me-1", 'button-color', 'form-control', 'border-dark'],
  props: [
    ["ariaLabel", "Default select element"],
    ["tabindex", "1"],
  ],
}) as HTMLSelectElement;

sortMethods.forEach((method: SortMethodType) => {
  sortSelect.append(sortOption(method));
});

const sortToggle: HTMLDivElement = directionToggle;

sortSelect.addEventListener("change", sortEventListener);
sortToggle.addEventListener("click", sortEventListener);

selectContainer.append(sortSelect, sortToggle);

function sortEventListener() {
  const target = document.getElementById("sort-select") as HTMLSelectElement;
  const displayedNotes: Note[] = getDisplayedNotes();

  const notes: Note[] | void = sortNotes(displayedNotes, target.value);
  if (notes) {
    resetNoteContainer(notes);
  }
}

export default selectContainer;
