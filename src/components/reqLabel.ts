import l10n from "../utils/l10n";
import { getCurrentLanguage } from "../utils/languageFunctions";
import newElement from "../utils/newElement";
import { L10nLangOption, L10nTextContent } from "../utils/types";

function reqLabel(id: string, target: string): HTMLSpanElement {
  const container = newElement({
    type: "div",
    class: ["d-flex", "form-child"],
  });

  const label: HTMLElement = newElement({
    type: "label",
    id: id,
    content: l10n.getTextContent(
      getCurrentLanguage() as L10nLangOption,
      id as L10nTextContent
    ),
    class: ["form-label", "form-child", "me-1"],
    props: [["for", target]],
  });

  const reqSpan: HTMLSpanElement = document.createElement("span");
  const reqP = newElement({
    type: "p",
    id: id + "-req",
    class: ["form-child"],
    props: [["style", "font-size:small;"]],
  }) as HTMLParagraphElement;

  reqSpan.appendChild(reqP);
  container.append(label, reqSpan);

  return container;
}

export default reqLabel;
