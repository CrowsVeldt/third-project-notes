import { storageExists } from "./util";

function themeSaved() {
  if (storageExists()) {
    const themePref = localStorage.getItem("theme");

    if (themePref) return themePref;
  } else {
    return "light";
  }
}

function setTheme(theme: ThemeName) {
    const app = document.getElementById('app')!
    const settings = document.getElementById('settings')!
    const form = document.getElementById('input-form')!
    const fullNote = document.getElementById('full-note')!
  if (theme === 'dark') {
    app.classList.add(...themes['dark'])
    app.classList.remove(...themes['light'])
    settings.classList.add(...themes['dark'])
    settings.classList.remove(...themes['light'])
    form.classList.add(...themes['dark'])
    form.classList.remove(...themes['light'])
    fullNote.classList.add(...themes['dark'])
    fullNote.classList.remove(...themes['light'])
  } else if (theme === "light") {
    app.classList.add(...themes['light'])
    app.classList.remove(...themes['dark'])
    settings.classList.add(...themes['light'])
    settings.classList.remove(...themes['dark'])
    form.classList.add(...themes['light'])
    form.classList.remove(...themes['dark'])
    fullNote.classList.add(...themes['light'])
    fullNote.classList.remove(...themes['dark'])
  }
  
  // const mainPage = document.getElementById("main-page");
  // const footer = document.getElementById('footer')
  // const header = document.getElementById('page-head')
  // const filter = document.getElementById('search-and-sort')
  // const search = document.getElementById('search-bar')
  // const sort = document.getElementById('sort-select')
  //const direction = document.getElementById('direction-toggle')
  // const plus = document.getElementById('plus-button')
}

type ThemeName = "dark" | "light";

const themes = {
  dark: ['bg-dark', 'text-light', 'border-light'],
  light: ['bg-light', 'text-dark', 'border-dark'],
};

export { setTheme, themeSaved };
