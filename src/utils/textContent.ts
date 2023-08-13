const langOptions = {
  // accept language code from [en-Us, he] returns textContent object for that language
  getLanguage: function (langName: string) {
    if (langName === "en-US") {
      return this.english;
    } else if (langName === "he") {
      return this.hebrew;
    }
  },
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
          createDate: "Created on: ",
          targetDate: "Target date: ",
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
      },
      settings: {
        title: "Settings",
        langToggle: "English",
      },
    },
    confirmations: {
      wipeButton: "Delete all notes? This cannot be undone.",
      deleteNote: "Delete note?",
      updateNote: "Update note details? This cannot be undone",
    },
  },
  hebrew: {
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
      plusButton: "יצור פתק חדש",
      xButton: "סגור חלון",
      settings: "פתח/סגור הגדרות",
    },
    placeholders: {
      searchBar: "חיפוש",
    },
    elementText: {
      wipeButton: "למחוק הכל",
      fullNote: {
        dates: {
          createDate: "תאריך ייצור: ",
          targetDate: "תאריך יעד: ",
        },
      },
      note: {
        dates: {
          createDate: "תאריך יעד - ",
          targetDate: "תאריך יצור - ",
        },
      },
      noteForm: {
        formTitle: {
          add: "פתק חדש",
          update: "עריכה",
        },
        noteTitle: "כותרת",
        body: "תוכן",
        date: "יעד",
        color: "צבע",
        actionButton: {
          add: "להוסיף פתק",
          update: "לעדכן פתק",
        },
      },
      pageElements: {
        pageTitle: "פתקים",
        footer: "פוטר",
      },
      settings: {
        title: "הגדרות",
        langToggle: "עברית",
      },
    },
    confirmations: {
      wipeButton: "למחוק את כל הפתקים? אי אפשר לשחזר",
      deleteNote: "למחוק?",
      updateNote: "לעדכן?",
    },
  },
};

export default langOptions;
