import makeSearchBar from "./createSearchBar";
import { makeNoteContainer, removeNoteContainer } from "./noteContainer";
import { storageExists, wipeStorage } from "../utils/storage";
import { sortSelect } from "./labelAndInput";

function makeMain(): HTMLDivElement {
  const container: HTMLDivElement = document.createElement("div");
  container.id = "main-page";

  const head: HTMLHeadElement = document.createElement("header");
  head.classList.add("container-fluid", "text-center", "border");
  const title: HTMLHeadingElement = document.createElement("h1");
  title.id = "title";
  title.innerText = "Notes";
  head.appendChild(title);

  // VVVVVV - in header for ease of testing - TODO move
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
      removeNoteContainer();
      container.appendChild(makeNoteContainer());
    }
  });
  head.appendChild(wipeButton);

  const searchbar: HTMLDivElement = makeSearchBar();
  head.appendChild(searchbar);

  const sortMethodSelect: HTMLDivElement = sortSelect()
  head.appendChild(sortMethodSelect)
  // ^^^^^^ --------------------------------

  const noteContainer: HTMLDivElement = makeNoteContainer();

  const foot: HTMLElement = document.createElement("footer");
  foot.classList.add(
    "container-fluid",
    "border",
    "text-center",
    "position-absolute",
    "bottom-0"
  );
  const footTitle: HTMLHeadingElement = document.createElement("h2");
  footTitle.innerText = "Footer";
  foot.appendChild(footTitle);

  container.appendChild(head);
  container.appendChild(noteContainer);
  container.appendChild(foot);

  return container;
}

export default makeMain;
