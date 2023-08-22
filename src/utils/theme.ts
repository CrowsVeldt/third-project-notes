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
  const themeObject = themes[theme];
  console.log(themeObject);
  const app = document.getElementById('app')
  const mainPage = document.getElementById("main-page");
  const footer = document.getElementById('footer')
  const header = document.getElementById('page-head')
  const filter = document.getElementById('search-and-sort')
  const settings = document.getElementById('settings')
  const search = document.getElementById('search-bar')
  const sort = document.getElementById('sort-select')
  //const direction = document.getElementById('direction-toggle')
  const plus = document.getElementById('plus-button')
  app.style.backgroundColor = themeObject.backgroundColor;
  app.style.color = themeObject.color;
  mainPage.style.backgroundColor = themeObject.backgroundColor;
  mainPage.style.color = themeObject.color;
  footer.style.backgroundColor = themeObject.backgroundColor;
  footer.style.color = themeObject.color;
  header.style.backgroundColor = themeObject.backgroundColor;
  header.style.color = themeObject.color;
  filter.style.backgroundColor = themeObject.backgroundColor;
  filter.style.color = themeObject.color;
  settings.style.backgroundColor = themeObject.backgroundColor;
  settings.style.color = themeObject.color;
  search.style.backgroundColor = themeObject.backgroundColor;
  search.style.color = themeObject.color;
  sort.style.backgroundColor = themeObject.backgroundColor;
  sort.style.color = themeObject.color;
  plus.style.backgroundColor = themeObject.backgroundColor;
  plus.style.color = themeObject.color;
}

type ThemeName = "dark" | "light";

type ThemeElement = "backgroundColor" | "color";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

export { setTheme, themeSaved };
