import l18n from "../../utils/l18n";
import { getCurrentLanguage } from "../../utils/language";
import newElement from "../../utils/newElement";
import { L18nLangOption } from "../../utils/types";
import { switchDirection } from "../../utils/util";

const languageToggle = newElement({
  type: "button",
  id: "language-toggle",
  content: l18n.getTextContent(
    "id",
    getCurrentLanguage() as L18nLangOption,
    "language-toggle"
  ),
  class: ["settings-child", "settings"],
  eventListener: {
    eventType: "click",
    listener: () => {
      switchDirection("swap");
    },
  },
});

export default languageToggle;
