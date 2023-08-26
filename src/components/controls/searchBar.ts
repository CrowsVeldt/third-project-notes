import { createInput } from "../labelAndInput";
import { L10nLangOption, Note } from "../../utils/types";
import { resetNoteContainer, wipeNoteContainer } from "../noteContainer";
import { searchNotes } from "../../utils/noteStorage";
import l10n from "../../utils/l10n";
import { getCurrentLanguage } from "../../utils/languageFunctions";

const searchBarContainer: HTMLDivElement = document.createElement("div");

const searchBar = createInput("text", "search-bar", ["form-control"], false, [
  [
    "placeholder",
    l10n.getTextContent(getCurrentLanguage() as L10nLangOption, "search-bar"),
  ],
  ["tabindex", "3"],
]) as HTMLInputElement;

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
