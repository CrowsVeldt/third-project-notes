import newElement from "../../utils/newElement";

const toggleContainer = (
  id: string,
  classes: string[],
  props: string[][],
) =>
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
    props: [...props],
  }) as HTMLDivElement;

const toggle = (id: string) => newElement({
  type: "i",
  id: id,
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
  const toggle: HTMLElement | null = document.getElementById(id);
  const s: HTMLElement | null = document.getElementById(id + "-switch");
  if (toggle !== null && s !== null) {
    if (toggle.getAttribute(attribute) === value) {
      s.classList.add("toggle-right");
      s.classList.remove("toggle-left");
    } else {
      s.classList.add("toggle-left");
      s.classList.remove("toggle-right");
    }
  }
}

export { toggleContainer, toggle, setToggle };
