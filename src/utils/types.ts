type colorObject = {
  name: string;
  value: string;
};

type Note = {
  title: string;
  body: string;
  color: number;
  id?: string;
  createDate?: string;
  targetDate?: string;
};

type SortMethodType = { method: string };

type EventListener = {
  eventType: string;
  listener: (evt?: Event) => void;
};

type ElementParams = {
  type: string;
  id?: string;
  class?: string[];
  content?: string;
  eventListener?: EventListener;
  props?: string[][];
};

type FormElement = {
  heading: HTMLHeadingElement;
  title: HTMLInputElement;
  body: HTMLInputElement;
  date: HTMLInputElement;
  color: HTMLSelectElement;
  button: HTMLButtonElement;
  noteId?: string;
};

type NoteUpdate = {
  [title: string]: string | number;
  body: string;
  targetDate: string;
  color: number;
};

type TabIndexObject = {
  el: HTMLElement;
  oldIndex: number;
};

type CounterTarget = HTMLInputElement | HTMLTextAreaElement;

type L10nLangOption = "en-US" | "he";

type L10nTextContent =
  | "search-bar"
  | "page-title"
  | "full-note-created"
  | "full-note-target"
  | "form-heading:add"
  | "form-heading:update"
  | "form-button:add"
  | "form-button:update"
  | "note-title-label"
  | "note-body-label"
  | "note-target-date-label"
  | "note-color-label"
  | "wipe-button"
  | "settings-title"
  | "note-target-date"
  | "note-create-date"
  | "theme-toggle-light"
  | "theme-toggle-dark"
  ;

type L10nConfirmation = "wipe-button" | "note-delete-button";

type L10nObject = {
  getColors: (lang: L10nLangOption) => any;
  getSortMethods: (lang: L10nLangOption) => any;
  getToolTips: (lang: L10nLangOption) => any;
  getConfirmation: (lang: L10nLangOption, key: L10nConfirmation) => any;
  getTextContent: (lang: L10nLangOption, key: L10nTextContent) => any;
  getAllTextContents: (lang: L10nLangOption) => any;
  "en-US": {
    colors: colorObject[];
    sortMethods: SortMethodType[];
    tooltips: {};
    confirmations: {
      "wipe-button": string;
      "note-delete-button": string;
    };
    textContent: {
      "search-bar": string;
      "page-title": string;
      "full-note-created": string;
      "full-note-target": string;
      "form-heading:add": string;
      "form-heading:update": string;
      "form-button:add": string;
      "form-button:update": string;
      "note-title-label": string;
      "note-body-label": string;
      "note-target-date-label": string;
      "note-color-label": string;
      "wipe-button": string;
      "settings-title": string;
      "note-target-date": string;
      "note-create-date": string;
      "theme-toggle-light": string;
      "theme-toggle-dark": string;
    };
  };
  he: {
    colors: colorObject[];
    sortMethods: SortMethodType[];
    tooltips: {};
    confirmations: {
      "wipe-button": string;
      "note-delete-button": string;
    };
    textContent: {
      "search-bar": string;
      "page-title": string;
      "full-note-created": string;
      "full-note-target": string;
      "form-heading:add": string;
      "form-heading:update": string;
      "form-button:add": string;
      "form-button:update": string;
      "note-title-label": string;
      "note-body-label": string;
      "note-target-date-label": string;
      "note-color-label": string;
      "wipe-button": string;
      "settings-title": string;
      "note-target-date": string;
      "note-create-date": string;
      "theme-toggle-light": string;
      "theme-toggle-dark": string;
    };
  };
};

type ThemeName = "dark" | "light";

type ThemeColor = {
  [value: string]: string | number;
  index: number;
};

type ThemeColorsArray = ThemeColor[];

type ThemeListObject = {
  dark: string[];
  light: string[];
};

export type {
  colorObject,
  ElementParams,
  FormElement,
  Note,
  NoteUpdate,
  SortMethodType,
  TabIndexObject,
  CounterTarget,
  L10nLangOption,
  L10nTextContent,
  L10nConfirmation,
  ThemeName,
  ThemeColorsArray,
  ThemeListObject,
  L10nObject
};
