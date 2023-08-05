import { Note } from "./types";

function sortFunction(a: any, b: any) {
  if (a === b) return 0;
  if (a > b) return 1;
  return -1;
}

function sortNotes(notes: undefined | Note[], method: string): Note[] | void {
  if (!notes) return;
  const toggle: boolean | undefined = document
    .getElementById("box")
    ?.classList.contains("up");
  let met: Note[] = notes;
  switch (method) {
    case "Date Created":
      met = notes.sort((a, b) => sortFunction(b.createDate, a.createDate));
      break;
    case "Title":
      met = notes.sort((a, b) => sortFunction(a.title, b.title));
      break;
    case "Target Date":
      met = notes.sort((a, b) => sortFunction(a.targetDate, b.targetDate));
      break;
    default:
      met = notes.sort((a, b) => sortFunction(a.color, b.color));
      break;
  }
  if (toggle) return met.reverse();

  return met;
}

export default sortNotes;
