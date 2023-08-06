import { openFormButtonHandler } from "../noteForm";
import newElement from "../../utils/newElement";

const toggleFormButton: HTMLButtonElement = newElement({
  type: "button",
  id: "plus-button",
  class: ["position-fixed", "end-0", "top-0", "fs-2", "toggle-button"],
  content: "+",
  props: [
    ["style", "width:50px;height:50px;"],
    ["tabindex", "4"],
  ],
  eventListener: {
    eventType: "click",
    listener: (evt) => {
      if (evt) {
        openFormButtonHandler(evt);
      }
    },
  },
}) as HTMLButtonElement;

export default toggleFormButton;
