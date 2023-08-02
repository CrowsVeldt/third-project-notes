import { toggleForm } from "./createNoteForm";
import newElement from "../utils/newElement";

function toggleFormButton (id: string, targetId: string): HTMLButtonElement {
  return newElement({
    type: 'button',
    id: id,
    class: ['position-fixed', 'end-0', 'bottom-0', 'fs-1', 'toggle-button'],
    content: '+',
    props: [['style', 'width:50px;height:50px;']],
    eventListener: {
      eventType: 'click', 
      listener: () => {
        toggleForm(targetId)
      }
    }
  }) as HTMLButtonElement
}

export default toggleFormButton
