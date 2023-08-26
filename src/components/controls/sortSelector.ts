import directionToggle from "./directionToggle";
import { getDisplayedNotes, resetNoteContainer } from "../noteContainer";
import newElement from "../../utils/newElement";
import { Note } from "../../utils/types";
import sortNotes from "../../utils/sort";

const selectContainer = newElement({
  type: "div",
  id: "sort-select-container",
  class: ["me-3", "d-flex", "align-items-center"],
}) as HTMLDivElement;

const sortSelect = newElement({
  type: "select",
  id: "sort-select",
  class: ["me-1", "button-color", "form-control", "text-center"],
  props: [
    ["ariaLabel", "Default select element"],
    ["tabindex", "1"],
  ],
}) as HTMLSelectElement;

const sortToggle: HTMLDivElement = directionToggle;

function sortEventListener() {
  const target = document.getElementById("sort-select") as HTMLSelectElement;
  const displayedNotes: Note[] = getDisplayedNotes();

  const notes: Note[] | void = sortNotes(displayedNotes, target.value);
  if (notes) {
    resetNoteContainer(notes);
  }
}

sortSelect.addEventListener("change", sortEventListener);
sortToggle.addEventListener("click", sortEventListener);

selectContainer.append(sortSelect, sortToggle);

export default selectContainer;
