import "./style.css";
import {foot, head, main } from "./components/createPage";
import noteContainerControl from "./components/createNoteControl";
import toggleNoteFormButton from "./components/toggleNoteFormButton";

const app = document.querySelector<HTMLDivElement>("#app")!
app.style.height = '100vh'

const container = document.createElement('div')
container.classList.add('d-flex', 'flex-column', 'h-100')
container.appendChild(head)
container.appendChild(noteContainerControl())
container.appendChild(main)
container.appendChild(toggleNoteFormButton)
container.appendChild(foot)

app.appendChild(container)
