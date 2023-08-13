const langOptions: {} = {
  english: {
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
      plusButton: "Add new note",
      xButton: "Close window",
      settings: "Toggle settings menu",
    },
    placeholders: {
      searchBar: "search",
    },
    elementText: {
      wipeButton: "Delete all",
      fullNote: {
        dates: {
          dates: {
            createDate: "Created on: ",
            targetDate: "Target date: ",
          },
        },
      },
      note: {
        dates: {
          createDate: "Created on - ",
          targetDate: "Target date - ",
        },
      },
      noteForm: {
        formTitle: {
          add: "New note",
          update: "Edit note",
        },
        noteTitle: "Note title",
        body: "Note body",
        date: "Target date",
        color: "Select color",
        actionButton: {
          add: "Add note",
          update: "Update note",
        },
      },
      pageElements: {
        pageTitle: "Notes",
        footer: "Footer",
        settingsTitle: "Settings",
      },
    },
    confirmations: {
      wipeButton: "Delete all notes? This cannot be undone.",
      deleteNote: "Delete note?",
      updateNote: "Update note details? This cannot be undone",
    },
  },
};

export default langOptions