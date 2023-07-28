import { searchNotes } from "../utils/storage";
import { makeNoteContainer, removeNoteContainer } from "./noteContainer";

function makeSearchBar(): HTMLInputElement {
  const bar = document.createElement("input");
  bar.type = "text";
  bar.addEventListener("input", () => {
    const page: HTMLElement | null = document.getElementById("main-page");
    if (page) {
      removeNoteContainer();
      page.append(makeNoteContainer(searchNotes(bar.value)));
    }
  });
  return bar;
}

export default makeSearchBar;
