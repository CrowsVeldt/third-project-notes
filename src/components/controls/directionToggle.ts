import newElement from "../../utils/newElement";

const directionToggle = newElement({
  type: "div",
  id: "direction",
  class: ["rounded", "button-color", "form-control"],
  props: [["tabindex", "2"]],
  eventListener: {
    eventType: "click",
    listener: () => {
      directionToggle.classList.toggle("up");
    },
  },
}) as HTMLDivElement;

const arrow = newElement({
  type: "div",
  id: "direction-arrow",
  class: ["border", "border-2", "border-start-0", "border-bottom-0"],
}) as HTMLDivElement;

directionToggle.appendChild(arrow);

export default directionToggle;
