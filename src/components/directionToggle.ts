function directionToggle(): HTMLDivElement {
    const toggle = document.createElement('div')
    toggle.id = 'box'
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('up')
        if (toggle.classList.contains('up')) {
            console.log('check')
        } else {
            console.log('uncheck')
        }
    })

    const arrow = document.createElement('div')
    arrow.id = 'arrow'
    
    toggle.appendChild(arrow)
    return toggle
}

export default directionToggle