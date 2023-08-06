import newElement from "../../utils/newElement";

const directionToggle: HTMLDivElement = newElement({
  type: "div",
  id: "box",
  props: [["tabindex", "2"]],
  eventListener: {
    eventType: "click",
    listener: () => {
      directionToggle.classList.toggle("up");
    },
  },
}) as HTMLDivElement;

const arrow: HTMLDivElement = newElement({
  type: "div",
  id: "arrow",
}) as HTMLDivElement;

directionToggle.appendChild(arrow);

export default directionToggle;
