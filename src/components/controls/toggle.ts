import newElement from "../../utils/newElement";

const toggleContainer = (id: string, classes: string[], props: string[][]) =>
  newElement({
    type: "div",
    id: id,
    class: [
      ...classes,
      "toggle-parent",
      "border",
      "border-dark",
      "rounded-pill",
      "settings-child",
      "settings",
      "bg-primary",
      "order-2",
    ],
    props: [...props, ["dir", "ltr"]],
    eventListener: {
      eventType: "click",
      listener: () => {
        setToggle("language-toggle", "data-language", "he");
      },
    },
  }) as HTMLDivElement;

const toggle = newElement({
  type: "i",
  class: [
    "toggle",
    "border",
    "border-light",
    "rounded-circle",
    "position-relative",
    "settings",
    "settings-child",
    "bg-light",
  ],
}) as HTMLElement;

function setToggle(id: string, attribute: string, value: string): void {
  if (document.getElementById(id)!.getAttribute(attribute) === value) {
    toggle.style.left = "1.3em";
  } else {
    toggle.style.left = "0.1em";
  }
}

export { toggleContainer, toggle, setToggle };
