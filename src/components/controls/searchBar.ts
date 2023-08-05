import { createInput } from "../labelAndInput";
import { resetNoteContainer } from "../noteContainer";
import { searchNotes } from "../../utils/storage";

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
    const response = searchNotes(barInput.value)
    if (response.length > 0) {
      resetNoteContainer(response);
    } else {
      resetNoteContainer()
    }
  });

  barContainer.appendChild(searchBar);

  return barContainer;
}

export default makeSearchBar;
