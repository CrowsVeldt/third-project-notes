import newNote from "./note";

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
    noteContainer.classList.add('container', 'd-flex', 'flex-wrap')
    // V added for testing V
    noteContainer.appendChild(newNote('title', 'note body', '07/12/2023', 'red'))

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
