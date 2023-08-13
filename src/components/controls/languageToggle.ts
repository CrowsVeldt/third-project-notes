import newElement from "../../utils/newElement";

const languageToggle = newElement({
  type: "button",
  id: "language-toggle",
  content: "en/he",
  class: ["settings-child", 'settings'],
  eventListener: {
    eventType: "click",
    listener: () => {
      const html = document.querySelector("html");

      if (html) {
        const direction = html.dir;

        if (direction === "ltr") {
          html.dir = "rtl";
        } else {
          html.dir = "ltr";
        }
      }
    },
  },
});

export default languageToggle;
