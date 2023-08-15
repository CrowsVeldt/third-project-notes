import { storageExists } from "./noteStorage";

const langPrefStored = (): boolean => {
  if (storageExists()) {
    if (localStorage.getItem("langPref")) return true;
  }
  return false;
};

function setLanguagePreferance(lang: string): boolean {
  if (langPrefStored()) {
    localStorage.setItem("langPref", lang);
    return true;
  }
  return false;
}

function getLanguagePreferance(): string {
  if (langPrefStored()) {
    const lang: string | null = localStorage.getItem("langPref");
    if (lang) {
      return JSON.parse(lang);
    }
  }
  return "";
}

function getBrowserDefaultLanguage(): string {
  return navigator.language;
}

function getCurrentLanguage(): string {
  const lang = langPrefStored()
    ? getLanguagePreferance()
    : getBrowserDefaultLanguage();

  if (lang === "he") document.querySelector("html")!.dir = "rtl";

  return lang;
}

export {
  langPrefStored,
  setLanguagePreferance,
  getLanguagePreferance,
  getBrowserDefaultLanguage,
  getCurrentLanguage,
};
