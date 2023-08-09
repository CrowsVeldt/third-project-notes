import { ElementParams } from "./types";

function newElement(a: ElementParams) {
  const el: HTMLElement = document.createElement(a.type);
  el.id = a.id ? a.id : "";

  const classes: string[] = a.class ? a.class : [];
  el.classList.add(...classes);

  if (a.props) {
    a.props.forEach((element) => {
      el.setAttribute(element[0], element[1]);
    });
  }

  if (a.eventListener) {
    el.addEventListener(a.eventListener.eventType, a.eventListener.listener);
  }

  el.innerHTML = a.content ? a.content : "";

  return el;
}

export default newElement;
