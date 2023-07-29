import makeSearchBar from "./createSearchBar";
import { makeNoteContainer } from "./noteContainer";
import makeWipeButton from "./deleteAllButton";
import sortSelect from "../form components/sortSelector";

function makeMain(): HTMLDivElement {
  const mainContainer: HTMLDivElement = document.createElement("div");
  mainContainer.id = "main-page";

  const head: HTMLHeadElement = document.createElement("header");
  head.classList.add("container-fluid", "text-center", "border");
  const title: HTMLHeadingElement = document.createElement("h1");
  title.id = "title";
  title.innerText = "Notes";
  head.appendChild(title);

  // VVVVVV - in header for ease of testing - TODO move
  head.appendChild(makeWipeButton());
  head.appendChild(makeSearchBar());
  head.appendChild(sortSelect())
  // ^^^^^^ --------------------------------

  const noteContainer: HTMLDivElement = makeNoteContainer();

  const foot: HTMLElement = document.createElement("footer");
  foot.classList.add(
    "container-fluid",
    "border",
    "text-center",
    "bottom-0"
  );
  const footTitle: HTMLHeadingElement = document.createElement("h2");
  footTitle.innerText = "Footer";
  foot.appendChild(footTitle);

  mainContainer.appendChild(head);
  mainContainer.appendChild(noteContainer);
  mainContainer.appendChild(foot);

  return mainContainer;
}

export default makeMain;
