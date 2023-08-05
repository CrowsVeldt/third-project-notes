import { openFormButtonHandler } from "./createNoteForm";
import newElement from "../utils/newElement";

function toggleFormButton(): HTMLButtonElement {
  return newElement({
    type: "button",
    id: "plus-button",
    class: ["position-fixed", "end-0", "top-0", "fs-2", "toggle-button"],
    content: "+",
    props: [["style", "width:50px;height:50px;"]],
    eventListener: {
      eventType: "click",
      listener: (evt) => {
        if (evt) {
          openFormButtonHandler(evt);
        }
      },
    },
  }) as HTMLButtonElement;
}

export default toggleFormButton;
