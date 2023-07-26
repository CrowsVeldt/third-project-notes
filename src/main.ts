import "./style.css";
import mainPage from "./components/page";
// import createNote from "./components/note";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${mainPage}
`;
