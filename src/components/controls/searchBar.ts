import { createInput } from "../labelAndInput";
import { resetNoteContainer } from "../noteContainer";
import { searchNotes } from "../../utils/storage";

const barContainer: HTMLDivElement = document.createElement("div");

const searchBar: HTMLInputElement = createInput(
  "text",
  "search-bar",
  [],
  false,
  [["placeholder", "Search"], ['tabindex', '3']]
);
searchBar.addEventListener("input", (event: Event) => {
  const barInput = event.target as HTMLInputElement;
  const response = searchNotes(barInput.value);
  if (response.length > 0) {
    resetNoteContainer(response);
  } else {
    resetNoteContainer();
  }
});

barContainer.append(searchBar);

export default barContainer;
