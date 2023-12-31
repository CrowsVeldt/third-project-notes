import l10n from "../utils/l10n";
import { getCurrentLanguage } from "../utils/languageFunctions";
import newElement from "../utils/newElement";
import { L10nLangOption } from "../utils/types";

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
    getCurrentLanguage() as L10nLangOption,
    "page-title"
  ),
}) as HTMLHeadElement;

// main
const main = newElement({
  type: "div",
  id: "main-page",
  class: ["flex-grow-1"],
}) as HTMLDivElement;

head.append(headTitle);

export { head, main };
