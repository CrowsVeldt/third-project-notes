const langOptions = {
  getLanguage: function (langName: string) {
    // console.log(this[langName])
    if (langName === "en-US") {
      return this.english;
    } else if (langName === "he") {
      return this.hebrew;
    }

    console.log('fail')
  },
  english: { // Done
    colors: [ // Done
      { name: "None", value: "none" }, // Done
      { name: "Red", value: "salmon" }, // Done
      { name: "Blue", value: "lightblue" }, // Done
      { name: "Green", value: "lightgreen" }, // Done
      { name: "Yellow", value: "gold" }, // Done
      { name: "Brown", value: "tan" }, // Done
    ], // Done
    sortMethods: [ // Done
      { method: "Date Created" }, // Done
      { method: "Title" }, // Done
      { method: "Target Date" }, // Done
      { method: "Color" }, // Done
    ], // Done
    tooltips: { // Done
      plusButton: "Add new note", // Done
      xButton: "Close window", // done
      settings: "Toggle settings menu", // done
    }, // Done
    placeholders: { // Done
      searchBar: "search", // Done
    }, // Done
    elementText: { //done
      wipeButton: "Delete all", // done
      fullNote: { // Done
        dates: { // Done
          createDate: "Created on: ", // Done
          targetDate: "Target date: ", // Done
        }, // Done
      }, // Done
      note: { // Done
        dates: { // Done
          createDate: "Created on - ", // Done
          targetDate: "Target date - ", // Done
        }, // Donw
      }, // Donw
      noteForm: { // Donw
        formTitle: { // Donw
          add: "New note", // Donw
          update: "Edit note", // Donw
        }, // Done
        noteTitle: "Note title", // Done
        body: "Note body", // Done
        date: "Target date", // Done
        color: "Select color", // Done
        actionButton: { // Done
          add: "Add note",// Done
          update: "Update note",// Done
        },// Done
      },// Done
      pageElements: { // Done
        pageTitle: "Notes", // Done
        footer: "Footer", // Done
      }, // Done
      settings: { // Done
        title: "Settings", // Done
        langToggle: "English", // Done
      }, // Done
    }, // Done
    confirmations: { // Done
      wipeButton: "Delete all notes? This cannot be undone.", // Done
      deleteNote: "Delete note?", // Done
      updateNote: "Update note details? This cannot be undone", // Done
    }, // Done
  }, // Done
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
