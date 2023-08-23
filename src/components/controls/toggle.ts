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
    props: [...props],
  }) as HTMLDivElement;

const toggle = (id: string, initialDirection: string) =>
  newElement({
    type: "i",
    id: id,
    class: [
      "toggle",
      "rounded-circle",
      "position-relative",
      "settings",
      "settings-child",
      "bg-light",
    ],
    props: [["data-direction", initialDirection]],
  }) as HTMLElement;

function setToggle(id: string): void;
function setToggle(id: string, direction: string): void;
function setToggle(id: string, direction: string | void): void {
  const toggle: HTMLElement | null = document.getElementById(id);
  const toggleSwitch: HTMLElement | null = document.getElementById(
    id + "-switch"
  );

  if (toggle !== null && toggleSwitch !== null) {
    if (direction) {
      toggleSwitch.setAttribute("data-direction", direction);
    } else if (toggleSwitch.getAttribute("data-direction") === "left") {
      toggleSwitch.setAttribute("data-direction", "right");
    } else {
      toggleSwitch.setAttribute("data-direction", "left");
    }
  }
}

export { toggleContainer, toggle, setToggle };
