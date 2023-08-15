import { createInput } from "../labelAndInput";
import { L18nLangOption, Note } from "../../utils/types";
import { resetNoteContainer, wipeNoteContainer } from "../noteContainer";
import { searchNotes } from "../../utils/noteStorage";
import l18n from "../../utils/l18n";
import { getCurrentLanguage } from "../../utils/language";

const searchBarContainer: HTMLDivElement = document.createElement("div");

const searchBar: HTMLInputElement = createInput(
  "text",
  "search-bar",
  ["form-control", "border", "border-dark"],
  false,
  [
    [
      "placeholder",
      l18n.getTextContent(
        "id",
        getCurrentLanguage() as L18nLangOption,
        "search-bar"
      ),
    ],
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
