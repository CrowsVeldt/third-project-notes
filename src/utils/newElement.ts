import { elementInput } from "./types";

function newElement(a: elementInput) {

  const el = document.createElement(a.type)
  el.id = a.id ? a.id : ''

  const classes = a.class ? a.class : []
  el.classList.add(...classes)
  
  if (a.props) {
    a.props.forEach(element => {
      el.setAttribute(element[0], element[1])
    });
  }

  el.innerHTML = a.content ? a.content : ''

  return el
}

export default newElement