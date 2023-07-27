import { wipeStorage, storageExists } from "../utils/storage";
import { makeNoteContainer, wipeNoteContainer } from "./noteContainer";

function makeMain() {
  const container = document.createElement("div");
  container.id = "main-page";

  const head = document.createElement("header");
  head.classList.add("container-fluid", "text-center", "border");
  const title = document.createElement("h1");
  title.id = "title";
  title.innerText = "Notes";
  head.appendChild(title);

  const wipeButton = document.createElement("button");
  wipeButton.innerText = "Delete all notes";
  wipeButton.addEventListener("click", () => {
    if (
      storageExists() &&
      confirm(
        "Are you sure you want to delete all notes? This cannot be undone."
      )
    ) {
      wipeStorage();
      wipeNoteContainer();
      container.appendChild(makeNoteContainer());
    }
  });
  head.appendChild(wipeButton);

  const noteContainer = makeNoteContainer();

  const foot = document.createElement("footer");
  foot.classList.add(
    "container-fluid",
    "border",
    "text-center",
    "position-absolute",
    "bottom-0"
  );
  const footTitle = document.createElement("h2");
  footTitle.innerText = "Footer";
  foot.appendChild(footTitle);

  container.appendChild(head);
  container.appendChild(noteContainer);
  container.appendChild(foot);

  return container;
}

export default makeMain;
