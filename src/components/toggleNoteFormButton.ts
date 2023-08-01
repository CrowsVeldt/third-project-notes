import { toggleForm } from "./createNoteForm";
import newElement from "../utils/newElement";

  const toggleNoteFormButton : HTMLButtonElement = newElement({
    type: 'button',
    id: 'toggle-add-note',
    class: ['position-fixed', 'end-0', 'bottom-0', 'fs-1', 'toggle-button'],
    content: '+',
    props: [['style', 'width:50px;height:50px;']],
    eventListener: {
      eventType: 'click', 
      listener: () => {
        toggleForm('note-form')
      }
    }
  }) as HTMLButtonElement

export default toggleNoteFormButton
