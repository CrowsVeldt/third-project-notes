import newElement from "../utils/newElement";

function updateErrorMessage(string: string, color: string): void {
    errorMessage.innerText = string
    errorMessage.style.color = color
}

const errorMessage = newElement({
    type: 'p',
    id: 'date-error',
    content: '',
}) as HTMLParagraphElement

export {
    errorMessage,
    updateErrorMessage
}