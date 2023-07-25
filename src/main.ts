import "./style.css";
import mainPage from "./components/page";
import createNote from "./components/note";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${mainPage}
  ${createNote({
    title: "Note Title",
    body: "Note Body",
    createDate: new Date(),
    targetDate: new Date(),
    color: "red",
  })}
`;
