const l18n = {
  getColors(lang: string): any {
    return this[lang].colors;
  },
  getSortMethods(lang: string): any {
    return this[lang].sortMethods;
  },
  getToolTip(lang: string, id: string): any {
    return this[lang].tooltips[id];
  },
  getConfirmation(type: "id" | "class", lang: string, identifier: string): any {
    return this[lang].confirmations[type][identifier];
  },
  getTextContent(type: 'id'| 'class', lang: string, identifier: string): any {
    // finish this
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
        "form-button": "Update note details? This cannot be undone",
      },
      class: {
        "note-delete-button": "Delete note?",
      },
    },
    elementsById: {
      // placeholder:
      "search-bar": "Search",
      // text content:
      "wipe-button": "Delete all",
      "full-note-created": "Created on: ",
      "full-note-target": "Target Date: ",
      "input-form-title": { add: "New note", update: "Edit Note" },
      "note-title-label": "note-title-label",
      "note-body-label": "note-body-label",
      "note-date-label": "note-target-date-label",
      "note-color-label": "note-color-label",
      "form-button": {
        add: "Add note",
        update: "Update note",
      },
      "page-title": "Notes",
      "page-footer": "Footer",
      "settings-title": "Settings",
      "language-toggle": "English", // temporary value!!!!
    },
    elementsByClass: {
      "note-target-date": "Target date - ",
      "note-create-date": "Created on - ",
    },
  },
};

export default l18n;
