import newElement from "../../utils/newElement";
import langOptions from "../../utils/textContent";
import { switchDirection } from "../../utils/util";

const languageToggle = newElement({
  type: "button",
  id: "language-toggle",
  content: langOptions.english.elementText.settings.langToggle,
  class: ["settings-child", "settings"],
  eventListener: {
    eventType: "click",
    listener: () => {
      switchDirection("swap");
    },
  },
});

export default languageToggle;
