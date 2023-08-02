import "./style.css";
import { foot, head, main } from "./components/pageLayout";
import noteDisplayControls from "./components/noteDisplayControls";
import toggleFormButton from "./components/toggleFormButton";
import { noteContainer, populateNoteContainer } from "./components/noteContainer";
import { noteForm } from "./components/createNoteForm";

const app = document.querySelector<HTMLDivElement>("#app")!
app.style.height = '100vh'

const container = document.createElement('div')
container.classList.add('d-flex', 'flex-column', 'h-100')
container.appendChild(head)
container.appendChild(noteDisplayControls)
container.appendChild(main)
main.appendChild(noteContainer)
container.appendChild(noteForm('Add Note', 'New Note', 'add-note'))
container.appendChild(noteForm('Update Note', 'Edit Note', 'edit-note-form'))
container.appendChild(toggleFormButton('toggle-add-note', 'add-note'))
container.appendChild(foot)
container.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement
    if (!target.classList.contains('form') &&
        !target.classList.contains('form-control') &&
        !target.classList.contains('form-label')) {
        if (target.id !== 'toggle-add-note' && !target.classList.contains('edit-button')) {
            const formOpen: HTMLCollectionOf<Element> = document.getElementsByClassName('form')
            for (let form in formOpen) {
                if ( form === '0' || form === '1' && 
                    formOpen[form].classList.contains('d-flex')) {
                    formOpen[form].classList.remove('d-flex')
                }
            }
        }
    }
}
)

app.appendChild(container)
populateNoteContainer()
