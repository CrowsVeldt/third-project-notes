import { L18nLangOption } from "./types.ts";
import { storageExists } from "./util.ts";

const langStored = (): boolean => {
  if (storageExists()) {
    if (localStorage.getItem("lang")) return true;
  }
  return false;
};

function initialLanguageCheck() {
  if (getLanguage() === undefined) {
    setLanguage(navigator.language as L18nLangOption);
  }
}

function setLanguage(lang: any): boolean {
  if (lang !== undefined) {
    const langString = `{"language": "${lang}"}`;
    localStorage.setItem("lang", langString);
  }
  return true;
}

function getLanguage(): L18nLangOption | void {
  if (langStored()) {
    const lang: string | null = localStorage.getItem("lang");
    if (lang) {
      const parsedLang = JSON.parse(lang);
      return parsedLang.language;
    }
  }
}

function getBrowserDefaultLanguage(): L18nLangOption {
  const browserLang = navigator.language as L18nLangOption;
  return browserLang;
}

function getCurrentLanguage(): L18nLangOption {
  const html: HTMLHtmlElement | null = document.querySelector("html");
  const lang: L18nLangOption | void = langStored()
    ? getLanguage()
    : getBrowserDefaultLanguage();

  if (html !== null) {
    if (lang === "he") {
      html.dir = "rtl";
    } else {
      html.dir = "ltr";
    }
  }
  return lang!;
}

const langOptions: string[] = ['en-US', 'he']

function replaceLangOption(val: string): L18nLangOption {
  if (langOptions.includes(val)) return val as L18nLangOption
  return 'en-US'
}


export {
  langStored,
  setLanguage,
  getLanguage,
  getBrowserDefaultLanguage,
  getCurrentLanguage,
  initialLanguageCheck,
  replaceLangOption
};
