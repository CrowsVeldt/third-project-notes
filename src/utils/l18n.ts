const l18n = {
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
    elementsById: {
      // placeholder:
      "search-bar": "Search",
      // tooltip:
      "plus-button": "Add new note",
      "close-form-button": "Close window",
      "toggle-settings": "Toggle settings menu",
      // text content:
      "wipe-button": {
        textContent: "Delete all",
        confirm: "Delete all notes? This cannot be undone.",
      },
      "full-note-created": "Created on: ",
      "full-note-target": "Target Date: ",
      "input-form-title": { add: "New note", update: "Edit Note" },
      "note-title-label": "note-title-label",
      "note-body-label": "note-body-label",
      "note-date-label": "note-target-date-label",
      "note-color-label": "note-color-label",
      "form-button": {
        add: "Add note",
        update: {
          textContent: "Update note",
          confirm: "Update note details? This cannot be undone",
        },
      },
      "page-title": "Notes",
      "page-footer": "Footer",
      "settings-title": "Settings",
      "language-toggle": "English", // temporary value!!!!
    },
    elementsByClass: {
      // text content:
      "note-target-date": "Target date - ",
      "note-create-date": "Created on - ",
      // confirm
      "note-delete-button": "Delete note?",
    },
  },
};

export default l18n