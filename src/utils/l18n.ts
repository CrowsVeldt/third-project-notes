import { L18nLangOption, L18nIdentifier } from "./types";

const l18n = {
  getColors(lang: L18nLangOption): any {
    return this[lang].colors;
  },
  getSortMethods(lang: L18nLangOption): any {
    return this[lang].sortMethods;
  },
  getToolTip(lang: L18nLangOption, id: any): any {
    return this[lang].tooltips[id];
  },
  getConfirmation(
    type: L18nIdentifier,
    lang: L18nLangOption,
    identifier: string
  ): any {
    return this[lang].confirmations[type][identifier];
  },
  getTextContent(
    type: L18nIdentifier,
    lang: L18nLangOption,
    identifier: string
  ): any {
    const getBy = type === "id" ? this[lang].elementsById : this[lang].elementsByClass;
    return getBy[identifier];
  },
  "en-US": {
    colors: [
      { name: "None", value: "none" },
      { name: "Red", value: "salmon" },
      { name: "Blue", value: "lightblue" },
      { name: "Green", value: "lightgreen" },
      { name: "Yellow", value: "gold" },
      { name: "Brown", value: "tan" },
    ],
    sortMethods: [
      { method: "Date Created" },
      { method: "Title" },
      { method: "Target Date" },
      { method: "Color" },
    ],
    tooltips: {
      "plus-button": "Add new note",
      "close-form-button": "Close form",
      "close-full-note": "Close note",
      "toggle-settings": "Toggle settings menu",
    },
    confirmations: {
      id: {
        "wipe-button": "Delete all notes? This cannot be undone.",
      },
      class: {
        "note-delete-button": "Delete note?",
      },
    },
    elementsById: {
      // placeholder:
      "search-bar": "Search",
      // text content:
      "page-title": "Notes",
      "page-footer": "Footer",
      "full-note-created": "Created on: ",
      "full-note-target": "Target Date: ",
      "form-heading:add": "New Note",
      "form-heading:update": "Edit Note",
      "form-button:add": "Add note",
      "form-button:update": "Update note",
      "note-title-label": "Note Title",
      "note-body-label": "Note Body",
      "note-target-date-label": "Target Date",
      "note-color-label": "Color",
      "wipe-button": "Delete all",
      "settings-title": "Settings",
      "language-toggle": "English", // temporary value!!!!
    },
    elementsByClass: {
      "note-target-date": "Target date - ",
      "note-create-date": "Created on - ",
    },
  },
  "he": {
    colors: [
      { name: "ללא צבע", value: "none" },
      { name: "אדום", value: "salmon" },
      { name: "כחול", value: "lightblue" },
      { name: "ירוק", value: "lightgreen" },
      { name: "צהוב", value: "gold" },
      { name: "חום", value: "tan" },
    ],
    sortMethods: [
      { method: "תאריך ייצור" },
      { method: "כותרת" },
      { method: "תאריך יעד" },
      { method: "צבע" },
    ],
    tooltips: {
      "plus-button": "יצור פתק חדש",
      "close-form-button": "סגור חלון",
      "close-full-note": "סגור פתק",
      "toggle-settings": "פתח/סגור הגדרות",
    },
    confirmations: {
      id: {
        "wipe-button": "למחוק את כל הפתקים? אי אפשר לשחזר",
      },
      class: {
        "note-delete-button": "למחוק?",
      },
    },
    elementsById: {
      // placeholder:
      "search-bar": "חיפוש",
      // text content:
      "page-title": "פתקים",
      "page-footer": "פוטר",
      "full-note-created": "תאריך ייצור: ",
      "full-note-target": "תאריך יעד: ",
      "form-heading:add": "פתק חדש",
      "form-heading:update": "עריכה",
      "form-button:add": "להוסיף פתק",
      "form-button:update": "לעדכן פתק",
      "note-title-label": "כותרת",
      "note-body-label": "תוכן",
      "note-target-date-label": "תאריך יעד",
      "note-color-label": "צבע",
      "wipe-button": "למחוק הכל",
      "settings-title": "הגדרות",
      "language-toggle": "עברית", // temporary value!!!!
    },
    elementsByClass: {
      "note-target-date": "תאריך יעד - ",
      "note-create-date": "תאריך יצור - ",
    },
  },
};

export default l18n;

// type LangObject = {
//   colors: [
//     { name: string; value: string },
//     { name: string; value: string },
//     { name: string; value: string },
//     { name: string; value: string },
//     { name: string; value: string }
//   ];
//   sortMethods: [
//     { method: string },
//     { method: string },
//     { method: string },
//     { method: string }
//   ];
//   tooltips: {
//     "plus-button": string;
//     "close-form-button": string;
//     "close-full-note": string;
//     "toggle-settings": string;
//   };
//   confirmations: {
//     id: {
//       "wipe-button": string;
//     };
//     class: {
//       "note-delete-button": string;
//     };
//   };
//   elementsById: {
//     "search-bar": string;
//     "page-title": string;
//     "page-footer": string;
//     "full-note-created": string;
//     "full-note-target": string;
//     "form-heading:add": string;
//     "form-heading:update": string;
//     "form-button:add": string;
//     "form-button:update": string;
//     "note-title-label": string;
//     "note-body-label": string;
//     "note-target-date-label": string;
//     "note-color-label": string;
//     "wipe-button": string;
//     "settings-title": string;
//     "language-toggle": string;
//   };
//   elementsByClass: {
//     "note-target-date": string;
//     "note-create-date": string;
//   };
// };