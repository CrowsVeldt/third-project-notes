import l10n from "../utils/l10n";
import { getCurrentLanguage } from "../utils/languageFunctions";
import newElement from "../utils/newElement";
import { l10nLangOption } from "../utils/types";

// header
const head = newElement({
  type: "header",
  id: "page-head",
  class: ["container-fluid", "text-center", "border"],
}) as HTMLHeadingElement;

const headTitle = newElement({
  type: "h1",
  id: "page-title",
  content: l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "page-title"
  ),
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
  content: l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "page-footer"
  ),
}) as HTMLHeadingElement;

foot.append(footTitle);

export { foot, head, main };
