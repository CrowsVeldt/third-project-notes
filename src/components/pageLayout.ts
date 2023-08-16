import l18n from "../utils/l18n";
import { getCurrentLanguage } from "../utils/language";
import newElement from "../utils/newElement";
import { L18nLangOption } from "../utils/types";

// header
const head = newElement({
  type: "header",
  id: "page-head",
  class: ["container-fluid", "text-center", "border"],
}) as HTMLHeadingElement;

const headTitle = newElement({
  type: "h1",
  id: "page-title",
  content: l18n.getTextContent(
    getCurrentLanguage() as L18nLangOption,
    "page-title"
  ),
  class: ["l18n-target"],
}) as HTMLHeadElement;

head.append(headTitle);

// main
const main = newElement({
  type: "div",
  id: "main-page",
  class: ["flex-grow-1"],
}) as HTMLDivElement;

// footer
const foot = newElement({
  type: "footer",
  class: ["container-fluid", "text-center", "border"],
});

const footTitle = newElement({
  type: "h2",
  id: "page-footer",
  content: l18n.getTextContent(
    getCurrentLanguage() as L18nLangOption,
    "page-footer"
  ),
  class: ["l18n-target"],
}) as HTMLHeadingElement;

foot.append(footTitle);

export { foot, head, main };
