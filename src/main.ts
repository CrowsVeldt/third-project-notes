import "./style.css";
import { foot, head, main } from "./components/pageLayout";
import noteDisplayControls from "./components/noteDisplayControls";
import toggleNoteFormButton from "./components/toggleNoteFormButton";
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
container.appendChild(noteForm())
container.appendChild(toggleNoteFormButton)
container.appendChild(foot)
container.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement
    if (!target.classList.contains('form') &&
        !target.classList.contains('form-control') &&
        !target.classList.contains('form-label')) {
        if (target.id !== 'toggle-add-note') {
            const formOpen = document.getElementsByClassName('form')
            if (formOpen[0].classList.contains('d-flex')) {
                formOpen[0].classList.remove('d-flex')
            };
        }
    }
}
)

app.appendChild(container)
populateNoteContainer()
