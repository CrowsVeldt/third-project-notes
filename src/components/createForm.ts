import newElement from "../utils/newElement";
import { createInput, createLabel } from "./labelAndInput"
import { elementParams } from "../utils/types";

function createForm() {
    // form heading
    // title input
    // body input
    // target date input
    // color input
    // action button
}

const formHeading = newElement({
    type: 'h3',
    class: ['form-label'],
    content: 'Title'
})

// const titleLabel
const titleLabel = createLabel('title-input', ['form-label'])
// const titleInput input type=text
const titleInput = createInput('text', 'title-input', ['form--control'], true, [['maxlength', '20']])

// const bodyLabel
// const bodyInput type=textarea

// const targetDateLabel
// const targetDateInput input type=date

// const colorLabel
// const colorInput type=select + type=options

// const actionButton
