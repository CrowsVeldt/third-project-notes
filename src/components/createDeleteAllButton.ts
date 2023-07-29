import { storageExists, wipeStorage } from "../utils/storage";
import { resetNoteContainer } from "./noteContainer";

function makeWipeButton(): HTMLButtonElement {
  const wipeButton: HTMLButtonElement = document.createElement("button");
  wipeButton.innerText = "Delete all notes";
  wipeButton.addEventListener("click", () => {
    if (
      storageExists() &&
      confirm(
        "Are you sure you want to delete all notes? This cannot be undone."
      )
    ) {
      wipeStorage();
      resetNoteContainer();
    }
  });

  return wipeButton;
}

export default makeWipeButton;
