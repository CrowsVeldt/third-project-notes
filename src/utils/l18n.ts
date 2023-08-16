import {
  L18nLangOption,
  L18nTextContent,
  L18nToolTip,
  L18nConfirmation,
} from "./types";

const l18n = {
  getColors(lang: L18nLangOption): any {
    return this[lang].colors;
  },
  getSortMethods(lang: L18nLangOption): any {
    return this[lang].sortMethods;
  },
  getToolTip(lang: L18nLangOption, id: L18nToolTip): any {
    return this[lang].tooltips[id];
  },
  getToolTips(lang: L18nLangOption): any {
    return this[lang].tooltips;
  },
  getConfirmation(lang: L18nLangOption, key: L18nConfirmation): any {
    return this[lang].confirmations[key];
  },
  getTextContent(lang: L18nLangOption, key: L18nTextContent): any {
    return this[lang].textContent[key];
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
      "wipe-button": "Delete all notes? This cannot be undone.",
      "note-delete-button": "Delete note?",
    },
    textContent: {
      "search-bar": "Search",
      "page-title": "Notes",
      "page-footer": "Footer",
      "full-note-created": "Created on: ",
      "full-note-target": "Target Date: ",
      "form-heading:add": "New Note",
      "form-heading:update": "Edit Note",
      "form-button:add": "Add note",
      "form-button:update": "Update note",
      "note-title-label": "Note Title *",
      "note-body-label": "Note Body *",
      "note-target-date-label": "Target Date",
      "note-color-label": "Color",
      "wipe-button": "Delete all",
      "settings-title": "Settings",
      "language-toggle": "Switch language",
      "note-target-date": "Target date - ",
      "note-create-date": "Created on - ",
    },
  },
  he: {
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
      "wipe-button": "למחוק את כל הפתקים? אי אפשר לשחזר",
      "note-delete-button": "למחוק?",
    },
    textContent: {
      "search-bar": "חיפוש",
      "page-title": "פתקים",
      "page-footer": "פוטר",
      "full-note-created": "תאריך ייצור: ",
      "full-note-target": "תאריך יעד: ",
      "form-heading:add": "פתק חדש",
      "form-heading:update": "עריכה",
      "form-button:add": "להוסיף פתק",
      "form-button:update": "לעדכן פתק",
      "note-title-label": "כותרת *",
      "note-body-label": "תוכן *",
      "note-target-date-label": "תאריך יעד",
      "note-color-label": "צבע",
      "wipe-button": "למחוק הכל",
      "settings-title": "הגדרות",
      "language-toggle": "להחליף שפה",
      "note-target-date": "תאריך יעד - ",
      "note-create-date": "תאריך יצור - ",
    },
  },
};

export default l18n;
