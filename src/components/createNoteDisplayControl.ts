import sortSelect from "../form components/sortSelector";
import makeSearchBar from "./createSearchBar";

function makeDisplayControl () {
    const controlContainer = document.createElement('div')
    controlContainer.classList.add('w-100')

    controlContainer.appendChild(sortSelect())
    controlContainer.appendChild(makeSearchBar())

    return controlContainer
}

export default makeDisplayControl