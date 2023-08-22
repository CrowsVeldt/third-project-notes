// import { setToggle } from "../components/controls/toggle";
import { storageExists } from "./util";

function themeSaved() {
  if (storageExists()) {
    const themePref = localStorage.getItem("theme");

    if (themePref) return themePref;
  } else {
    return "light";
  }
}

function setTheme(theme: string) {
  const html = document.getElementsByTagName("html")[0];

  if (html !== null) {
    if (theme === "dark") {
      html.setAttribute("data-bs-theme", "dark");
    } else {
      html.setAttribute("data-bs-theme", "light");
    }
  }
  // setToggle('theme-toggle', 'data-theme', 'light')
}

const themeColors = {
  dark: {},
  light: {},
};

export { setTheme, themeSaved };
