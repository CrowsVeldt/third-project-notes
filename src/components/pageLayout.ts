import newElement from "../utils/newElement";

// header
const head: HTMLHeadingElement = newElement({
  type: "header",
  id: 'page-head',
  class: ["container-fluid", "text-center", "border"],
}) as HTMLHeadingElement;

const headTitle: HTMLHeadElement = newElement({
  type: "h1",
  id: "title",
  content: "Notes",
}) as HTMLHeadElement;

head.append(headTitle);

// main
const main: HTMLDivElement = newElement({
  type: "div",
  id: "main-page",
  class: ['flex-grow-1']
}) as HTMLDivElement;

// footer
const foot: HTMLElement = newElement({
  type: "footer",
  class: ["container-fluid", "text-center", "border"],
});

const footTitle: HTMLHeadingElement = newElement({
  type: "h2",
  content: "Footer",
}) as HTMLHeadingElement;

foot.append(footTitle);

export { foot, head, main };
