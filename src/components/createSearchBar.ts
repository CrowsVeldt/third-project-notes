import { createLabel } from "./labelAndInput";
import { makeNoteContainer, removeNoteContainer } from "./noteContainer";
import { searchNotes } from "../utils/storage";

function makeSearchBar(): HTMLDivElement {

  const barContainer: HTMLDivElement = document.createElement("div");
  const barLabel: HTMLLabelElement = createLabel("Search", []);

  const bar: HTMLInputElement = document.createElement("input");
  bar.type = "text";
  bar.addEventListener("input", (event: Event) => {
    const barInput: HTMLInputElement = event.target as HTMLInputElement
    const page: HTMLElement | null = document.getElementById("main-page");

    if (page) {
      removeNoteContainer();
      page.append(makeNoteContainer(searchNotes(barInput.value)));
    }
  });

  barContainer.appendChild(barLabel)
  barContainer.appendChild(bar)

  return barContainer;
}

export default makeSearchBar;
