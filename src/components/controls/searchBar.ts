import { createInput } from "../labelAndInput";
import { Note } from "../../utils/types";
import { resetNoteContainer, wipeNoteContainer } from "../noteContainer";
import { searchNotes } from "../../utils/storage";

const searchBarContainer: HTMLDivElement = document.createElement("div");

const searchBar: HTMLInputElement = createInput(
  "text",
  "search-bar",
  ["ms-3"],
  false,
  [
    ["placeholder", "Search"],
    ["tabindex", "3"],
  ]
);
searchBar.addEventListener("input", (event: Event) => {
  const searchBarInput = event.target as HTMLInputElement;
  const response: Note[] = searchNotes(searchBarInput.value);
  if (response.length > 0) {
    resetNoteContainer(response);
  } else if (searchBarInput.value === "") {
    resetNoteContainer();
  } else {
    wipeNoteContainer();
  }
});

searchBarContainer.append(searchBar);

export default searchBarContainer;
