import makeNoteForm from "./createNoteForm"
import newNote from "./createNote"

function makeMain () {
    const container = document.createElement('div')
    container.id = 'main-page'

    const head = document.createElement('header')
    head.classList.add('container-fluid', 'text-center', 'border')
    const title = document.createElement('h1')
    title.id = 'title'
    title.innerText = 'Notes'
    head.appendChild(title)

    const noteContainer = document.createElement('div')
    noteContainer.id = 'note-container'
    noteContainer.classList.add('container', 'd-flex', 'flex-wrap', 'space-between')
    noteContainer.appendChild(makeNoteForm())
    // VVV for testing VVV
    noteContainer.appendChild(newNote('title', 'note body', '07/12/2023', 'none'))

    const foot = document.createElement('footer')
    foot.classList.add('container-fluid', 'border', 'text-center', 'position-absolute', 'bottom-0')
    const footTitle = document.createElement('h2')
    footTitle.innerText = 'Footer'
    foot.appendChild(footTitle)

    container.appendChild(head)
    container.appendChild(noteContainer)
    container.appendChild(foot)

    return container
}

export default makeMain
