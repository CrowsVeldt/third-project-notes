import { 
  formHandler 
} from "../noteForm";
import newElement from "../../utils/newElement";

const toggleFormButton: HTMLButtonElement = newElement({
  type: "button",
  id: "plus-button",
  class: ["position-fixed", "end-0", "top-0", 
  "toggle-button"],
  props: [
    ["style", "width:50px;height:50px;"],
    ["tabindex", "4"],
    ["data-bs-toggle", "tooltip"],
    ["data-bs-placement", "left"],
    ["title", "Add new note"],
  ],
  eventListener: {
    eventType: "click",
    listener: (evt) => {
      if (evt) {
        formHandler(evt);
      }
    },
  },
}) as HTMLButtonElement;

const plus = newElement({
  type: 'p',
  content: '+',
  class: ['fs-3', 'toggle-button'],
  props: [['style', 'pointer-events:none;']],
}) as HTMLParagraphElement

toggleFormButton.append(plus)

export default toggleFormButton;
