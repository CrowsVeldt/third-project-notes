import "./style.css";
import {foot, head, main } from "./components/pageLayout";
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
noteContainer.appendChild(noteForm())
container.appendChild(toggleNoteFormButton)
container.appendChild(foot)

app.appendChild(container)
populateNoteContainer()
