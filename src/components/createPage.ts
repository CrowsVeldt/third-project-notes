import newElement from "../utils/newElement";
import { noteContainer } from "./noteContainer";

// header
const head: HTMLHeadingElement = newElement({
  type: 'header',
  class: ['container-fluid', 'text-center', 'border']
}) as HTMLHeadingElement

const headTitle: HTMLHeadElement = newElement({
  type: 'h1',
  id: 'title',
  content: 'Notes'
}) as HTMLHeadElement

head.appendChild(headTitle)

// main
const main: HTMLDivElement = newElement({
  type: 'div',
  id: 'main-page',
  class: ['flex-grow-1']
}) as HTMLDivElement

const noteCon: HTMLDivElement = noteContainer();
main.appendChild(noteCon);

// footer
const foot: HTMLElement = newElement({
  type: 'footer',
  class: ['container-fluid', 'text-center', 'border']
})

const footTitle: HTMLHeadingElement = newElement({
  type: 'h2',
  content: 'Footer'
}) as HTMLHeadingElement

foot.appendChild(footTitle)

export { foot, head, main };
