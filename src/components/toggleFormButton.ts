import { formButtonHandler, wipeForm, } from "./createNoteForm"; 
import newElement from "../utils/newElement";

function toggleFormButton (): HTMLButtonElement {
  return newElement({
    type: 'button',
    id: 'plus-button',
    class: ['position-fixed', 'end-0', 'bottom-0', 'fs-1', 'toggle-button'],
    content: '+',
    props: [['style', 'width:50px;height:50px;']],
    eventListener: {
      eventType: 'click', 
      listener: () => {
        wipeForm()
        formButtonHandler()
      }
    }
  }) as HTMLButtonElement
}

export default toggleFormButton
