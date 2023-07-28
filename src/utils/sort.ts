import { Note } from "./types";

//  sortMethods:
//   'Date Created',
//   'Title',
//   'Target date',
//   'Color'

function sortFunction(a: any, b: any) {
  if (a === b) return 0;
  if (a > b) return 1;
  return -1;
}

function sortNotes(notes: Note[], method: string): Note[] {
  switch (method) {
    case "Date Created":
      return notes.sort((a, b) => sortFunction(a.createDate, b.createDate));
    case "Title":
      return notes.sort((a, b) => sortFunction(a.title, b.title));
    case "Target Date":
      return notes.sort((a, b) => sortFunction(a.targetDate, b.targetDate));
    default:
      return notes.sort((a, b) => sortFunction(a.color, b.color));
  }
}

export { sortNotes };
