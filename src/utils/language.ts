import { storageExists } from "./storage";

const langPrefStored = (): boolean => {
  if (storageExists()) {
    if (localStorage.getItem("langPref")) return true;
  }
  return false;
};

function setLanguagePreferance(lang: string): boolean {
  if (storageExists()) {
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
  return navigator.language
}

export {setLanguagePreferance, getLanguagePreferance, getBrowserDefaultLanguage}