import { noteContainer } from "./noteContainer";

function makeHeader(): HTMLHeadElement {
  const head: HTMLHeadElement = document.createElement("header");
  head.classList.add("container-fluid", "text-center", "border");
  const title: HTMLHeadingElement = document.createElement("h1");
  title.id = "title";
  title.innerText = "Notes";
  head.appendChild(title);

  return head;
}

function makeMain(): HTMLDivElement {
  const mainContainer: HTMLDivElement = document.createElement("div");
  mainContainer.id = "main-page";
  mainContainer.classList.add("flex-grow-1");

  const noteCon: HTMLDivElement = noteContainer();
  mainContainer.appendChild(noteCon);

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
