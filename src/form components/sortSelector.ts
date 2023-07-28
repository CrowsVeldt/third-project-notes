import directionToggle from "../components/directionToggle";
import { sortMethods } from "../utils/util";
import { SortMethod } from "../utils/types";
import { resetNoteContainer } from "../components/noteContainer";
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
  selectContainer.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "w-25"
  );
  const sortSelect: HTMLSelectElement = document.createElement("select");
  sortSelect.id = "color-select";
  sortSelect.required = true;
  sortSelect.ariaLabel = "Default select element";
  sortSelect.addEventListener('change', (evt) => {
    const target = evt.target! as HTMLSelectElement
    resetNoteContainer(sortNotes(storedNotes()!, target.value))
  })

  sortMethods.forEach((method: SortMethod) => {
    sortSelect.appendChild(sortOption(method));
  });

  const sortToggle: HTMLDivElement = directionToggle();

  selectContainer.appendChild(sortSelect);
  selectContainer.appendChild(sortToggle);
  return selectContainer;
}

export default sortSelect;
