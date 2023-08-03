import "./style.css";
import { foot, head, main } from "./components/pageLayout";
import noteDisplayControls from "./components/noteDisplayControls";
import toggleFormButton from "./components/toggleFormButton";
import { noteContainer, populateNoteContainer } from "./components/noteContainer";
import { createNoteForm, wipeForm } from "./components/createNoteForm";

const app = document.querySelector<HTMLDivElement>("#app")!
app.style.height = '100vh'

const container = document.createElement('div')
container.classList.add('d-flex', 'flex-column', 'h-100')
container.appendChild(head)
container.appendChild(noteDisplayControls)
container.appendChild(main)
main.appendChild(noteContainer)
container.appendChild(createNoteForm())
container.appendChild(toggleFormButton())
container.appendChild(foot)
container.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement
    if (!target.classList.contains('form') &&
        !target.classList.contains('form-control') &&
        !target.classList.contains('form-label')) {
        if (!target.classList.contains('toggle-button')) {
            const formOpen: HTMLElement | null = document.getElementById('input-form')
                if (formOpen && formOpen.classList.contains('d-flex')) {
                    formOpen.classList.remove('d-flex')
                    wipeForm()
                }
        }
    }
}
)

app.appendChild(container)
populateNoteContainer()
