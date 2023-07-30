import "./style.css";
import {makeFooter, makeHeader, makeMain } from "./components/createPage";
import noteContainerControl from "./components/createNoteControl";
import addNoteButton from "./components/createAddNoteButton";
import Note from "./classes/Note";


// const y = new Note('-1037251818', 'shit', 'fuck', '28/11/30', '29/07/23' , 'green');
// const x = new Note('-1251818', 'shit', 'fuck', '28/11/30', '29/07/23' , 'green');
// console.log(y.existsInStorage());
// console.log(x.existsInStorage());

// x.saveToStorage();

const app = document.querySelector<HTMLDivElement>("#app")!
app.style.height = '100vh'

const container = document.createElement('div')
container.classList.add('d-flex', 'flex-column', 'h-100')

container.appendChild(makeHeader())
container.appendChild(noteContainerControl())
container.appendChild(makeMain())
container.appendChild(addNoteButton())
container.appendChild(makeFooter())

app.appendChild(container)
