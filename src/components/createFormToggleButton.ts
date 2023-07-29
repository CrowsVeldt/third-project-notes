function createToggleButton (parent: HTMLDivElement): HTMLButtonElement {
    const btn: HTMLButtonElement = document.createElement('button')
    btn.innerText = '>'
    btn.style.width = '50px'
    btn.style.height = '50px'
    btn.id = 'toggle-note-form'
    btn.classList.add('hidden')
    btn.addEventListener('click', () => {
        parent.classList.toggle('hidden')
        btn.classList.toggle('hidden')
        if (btn.classList.contains('hidden')) {
          btn.innerText = '>'
        } else { btn.innerText ='<'}
    })
    
    return btn
}

export default createToggleButton