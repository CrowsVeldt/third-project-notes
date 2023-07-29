import sortSelect from "../form components/sortSelector";
import makeSearchBar from "./createSearchBar";

function makeDisplayControl () {
    const controlContainer = document.createElement('div')
    controlContainer.classList.add('container', 'd-flex', 'justify-content-between')

    controlContainer.appendChild(sortSelect())
    controlContainer.appendChild(makeSearchBar())

    return controlContainer
}

export default makeDisplayControl