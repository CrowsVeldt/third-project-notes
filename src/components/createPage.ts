// import makeSearchBar from "./createSearchBar";
// import makeWipeButton from "./createDeleteAllButton";
// import sortSelect from "../form components/sortSelector";
import { makeNoteContainer } from "./noteContainer";

function makeHeader(): HTMLHeadElement {
  const head: HTMLHeadElement = document.createElement("header");
  head.classList.add("container-fluid", "text-center", "border");
  const title: HTMLHeadingElement = document.createElement("h1");
  title.id = "title";
  title.innerText = "Notes";
  head.appendChild(title);

  // VVVVVV - in header for ease of testing - TODO move
  // head.appendChild(makeWipeButton());
  // head.appendChild(makeSearchBar());
  // head.appendChild(sortSelect())
  // ^^^^^^ --------------------------------

  return head;
}

function makeMain(): HTMLDivElement {
  const mainContainer: HTMLDivElement = document.createElement("div");
  mainContainer.id = "main-page";
  mainContainer.classList.add("flex-grow-1");

  const noteContainer: HTMLDivElement = makeNoteContainer();
  mainContainer.appendChild(noteContainer);

  return mainContainer;
}

function makeFooter(): HTMLElement {
  const foot: HTMLElement = document.createElement("footer");
  foot.classList.add("container-fluid", "border", "text-center");
  const footTitle: HTMLHeadingElement = document.createElement("h2");
  footTitle.innerText = "Footer";
  foot.appendChild(footTitle);

  return foot;
}

export { makeFooter, makeHeader, makeMain };
