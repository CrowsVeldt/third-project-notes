import "./style.css";
import {makeFooter, makeHeader, makeMain } from "./components/createPage";
import noteContainerControl from "./components/createNoteControl";
import toggleNoteFormButton from "./components/toggleNoteFormButton";

const app = document.querySelector<HTMLDivElement>("#app")!
app.style.height = '100vh'

const container = document.createElement('div')
container.classList.add('d-flex', 'flex-column', 'h-100')
container.appendChild(makeHeader())
container.appendChild(noteContainerControl())
container.appendChild(makeMain())
container.appendChild(toggleNoteFormButton)
container.appendChild(makeFooter())

app.appendChild(container)
