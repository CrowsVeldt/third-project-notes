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

// main
const main = newElement({
  type: "div",
  id: "main-page",
  class: ["flex-grow-1"],
}) as HTMLDivElement;

// footer
const foot = newElement({
  type: "footer",
  id: "footer",
  class: ["container-fluid", "text-center", "border"],
}) as HTMLElement;

const footTitle = newElement({
  type: "h2",
  id: "page-foot-title",
  content: l10n.getTextContent(
    getCurrentLanguage() as l10nLangOption,
    "page-foot-title"
  ),
}) as HTMLHeadingElement;

head.append(headTitle);
foot.append(footTitle);

export { foot, head, main };
