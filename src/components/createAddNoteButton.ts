import { toggleForm } from "./createNoteForm";
import newElement from "../utils/newElement";

function addNoteButton(): HTMLButtonElement {
  const btn: HTMLButtonElement = newElement({
    type: 'button',
    id: 'toggle-add-note',
    class: ['position-fixed', 'end-0', 'bottom-0', 'fs-1'],
    content: '+',
    props: [['style', 'width:50px;height:50px;']],
    eventListener: {
      eventType: 'click', 
      listener: () => {
        toggleForm('note-form')
      }
    }
  }) as HTMLButtonElement

  return btn;
}

export default addNoteButton;
