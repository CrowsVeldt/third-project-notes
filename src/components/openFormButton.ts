function createPlusButton () {
    const btn = document.createElement('button')
    btn.innerText = '+'
    btn.id = 'show-note-form'
    btn.addEventListener('click', (evt) => {
        toggleForm()
    })
    btn.style.position = 'fixed'
    btn.style.left = '0%'
    
    return btn
}

function toggleForm () {
  const form = document.getElementById('add-note-form')
  const plus = document.getElementById('show-note-form')
  if (form && plus) {
    switch (form.style.display) {
        case 'flex':
            form.style.display = 'none'
            plus.style.left = '0%'
            plus.innerText = '+'
            break;
        case 'none':
            form.style.display = 'flex'
            plus.style.left = '22.5%'
            plus.innerText = '-'
            break
    }
  }
}

export default createPlusButton