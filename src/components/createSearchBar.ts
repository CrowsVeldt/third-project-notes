import { createInput } from "./labelAndInput";
import { resetNoteContainer } from "./noteContainer";
import { searchNotes } from "../utils/storage";

function makeSearchBar(): HTMLDivElement {
  const barContainer: HTMLDivElement = document.createElement("div");

  const searchBar: HTMLInputElement = createInput(
    "text",
    "search-bar",
    [],
    false,
    [["placeholder", "Search"]]
  );
  searchBar.addEventListener("input", (event: Event) => {
    const barInput = event.target as HTMLInputElement;
    resetNoteContainer(searchNotes(barInput.value)!);
  });

  barContainer.appendChild(searchBar);

  return barContainer;
}

export default makeSearchBar;
