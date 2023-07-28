import { createLabel } from "../form components/labelAndInput";
import { resetNoteContainer } from "./noteContainer";
import { searchNotes } from "../utils/storage";

function makeSearchBar(): HTMLDivElement {
  const barContainer: HTMLDivElement = document.createElement("div");
  const barLabel: HTMLLabelElement = createLabel("Search", []);

  const bar: HTMLInputElement = document.createElement("input");
  bar.type = "text";
  bar.addEventListener("input", (event: Event) => {
    const barInput: HTMLInputElement = event.target as HTMLInputElement;
    resetNoteContainer(searchNotes(barInput.value)!);
  });

  barContainer.appendChild(barLabel);
  barContainer.appendChild(bar);

  return barContainer;
}

export default makeSearchBar;
