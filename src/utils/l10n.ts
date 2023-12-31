import { replaceLangOption } from "./languageFunctions";
import {
  L10nLangOption,
  L10nTextContent,
  L10nConfirmation,
  L10nObject,
} from "./types";

const l10n: L10nObject = {
  getColors(lang: L10nLangOption): any {
    return this[replaceLangOption(lang)].colors;
  },
  getSortMethods(lang: L10nLangOption): any {
    return this[replaceLangOption(lang)].sortMethods;
  },
  getToolTips(lang: L10nLangOption): any {
    return this[replaceLangOption(lang)].tooltips;
  },
  getConfirmation(lang: L10nLangOption, key: L10nConfirmation): any {
    return this[replaceLangOption(lang)].confirmations[key];
  },
  getTextContent(lang: L10nLangOption, key: L10nTextContent): any {
    return this[replaceLangOption(lang)].textContent[key];
  },
  getAllTextContents(lang: L10nLangOption): any {
    return this[replaceLangOption(lang)].textContent;
  },
  "en-US": {
    colors: [
      { name: "None", value: "0" },
      { name: "Red", value: "1" },
      { name: "Blue", value: "2" },
      { name: "Green", value: "3" },
      { name: "Yellow", value: "4" },
      { name: "Brown", value: "5" },
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
      "language-toggle": "Switch language",
    },
    confirmations: {
      "wipe-button": "Delete all notes? This cannot be undone.",
      "note-delete-button": "Delete note?",
    },
    textContent: {
      "search-bar": "Search...",

      "form-heading:add": "New Note",
      "form-heading:update": "Edit Note",
      "form-button:add": "Add note",
      "form-button:update": "Update note",

      "page-title": "Notes",

      "full-note-created": "Created on: ",
      "full-note-target": "Target Date: ",

      "note-title-label": "Note Title",
      "note-title-label-req": "(Required)",
      "note-body-label": "Note Body",
      "note-body-label-req": "(Required)",
      "note-target-date-label": "Target Date",
      "note-color-label": "Color",

      "wipe-button": "Delete all",
      "settings-title": "Settings",
      "note-target-date": "Target date - ",
      "note-create-date": "Created on - ",
      "theme-toggle-light": "Light",
      "theme-toggle-dark": "Dark",
    },
  },
  he: {
    colors: [
      { name: "ללא צבע", value: "0" },
      { name: "אדום", value: "1" },
      { name: "כחול", value: "2" },
      { name: "ירוק", value: "3" },
      { name: "צהוב", value: "4" },
      { name: "חום", value: "5" },
    ],
    sortMethods: [
      { method: "תאריך יצירה" },
      { method: "כותרת" },
      { method: "תאריך יעד" },
      { method: "צבע" },
    ],
    tooltips: {
      "plus-button": "יצור פתק חדש",
      "close-form-button": "סגור חלון",
      "close-full-note": "סגור פתק",
      "toggle-settings": "פתח/סגור הגדרות",
      "language-toggle": "להחליף שפה",
    },
    confirmations: {
      "wipe-button": "למחוק את כל הפתקים? לא יהיה אפשר לשחזר אותם אחר כך",
      "note-delete-button": "למחוק את הפתק?",
    },
    textContent: {
      "search-bar": "חיפוש...",

      "page-title": "פתקים",

      "full-note-created": "תאריך יצירה: ",
      "full-note-target": "תאריך יעד: ",

      "form-heading:add": "פתק חדש",
      "form-heading:update": "עריכה",
      "form-button:add": "הוסף פתק",
      "form-button:update": "עדכן פתק",

      "note-title-label": "כותרת",
      "note-title-label-req": "(נדרש)",
      "note-body-label": "תוכן",
      "note-body-label-req": "(נדרש)",
      "note-target-date-label": "תאריך יעד",
      "note-color-label": "צבע",

      "wipe-button": "מחק הכל",
      "settings-title": "הגדרות",
      "note-target-date": "תאריך יעד - ",
      "note-create-date": "תאריך יצירה - ",
      "theme-toggle-light": "בהיר",
      "theme-toggle-dark": "חשוך",
    },
  },
};

export default l10n;
