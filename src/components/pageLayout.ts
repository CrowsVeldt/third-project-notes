import newElement from "../utils/newElement";
import langOptions from "../utils/textContent";

// header
const head = newElement({
  type: "header",
  id: 'page-head',
  class: ["container-fluid", "text-center", "border"],
}) as HTMLHeadingElement;

const headTitle = newElement({
  type: "h1",
  id: "page-title",
  content: langOptions.english.elementText.pageElements.pageTitle,
}) as HTMLHeadElement;

head.append(headTitle);

// main
const main = newElement({
  type: "div",
  id: "main-page",
  class: ['flex-grow-1']
}) as HTMLDivElement;

// footer
const foot = newElement({
  type: "footer",
  class: ["container-fluid", "text-center", "border"],
});

const footTitle = newElement({
  type: "h2",
  id: 'page-footer',
  content: langOptions.english.elementText.pageElements.footer,
}) as HTMLHeadingElement;

foot.append(footTitle);

export { foot, head, main };
