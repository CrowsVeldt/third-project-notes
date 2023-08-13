import { createInput } from "../labelAndInput";
import { Note } from "../../utils/types";
import { resetNoteContainer, wipeNoteContainer } from "../noteContainer";
import { searchNotes } from "../../utils/storage";
import langOptions from "../../utils/textContent";

const searchBarContainer: HTMLDivElement = document.createElement("div");

const searchBar: HTMLInputElement = createInput(
  "text",
  "search-bar",
  ["form-control", "border", "border-dark"],
  false,
  [
    ["placeholder", langOptions.english.placeholders.searchBar],
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
