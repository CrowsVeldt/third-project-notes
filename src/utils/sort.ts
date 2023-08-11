import { Note } from "./types";

function sortFunction(a: any, b: any) {
  const direction: HTMLElement | null = document.getElementById("direction");
  const toggle: boolean =
    direction !== null && direction.classList.contains("up") ? true : false;

  let result = 0;

  if (a > b) {
    result = 1;
  } else if (a < b) {
    result = -1;
  }

  // if toggle classlist foes not contain 'up', reverse sort order
  if (toggle) {
    return result - (result + result);
  }

  return result;
}

function sortNotes(notes: undefined | Note[], method: string): Note[] | void {
  if (!notes) return;
  let sorted: Note[] = notes;
  switch (method) {
    case "Date Created":
      sorted = notes.sort((a, b) => sortFunction(b.createDate, a.createDate));
      break;
    case "Title":
      sorted = notes.sort((a, b) =>
        sortFunction(a.title.toLocaleLowerCase(), b.title.toLocaleLowerCase())
      );
      break;
    case "Target Date":
      sorted = notes.sort((a, b) => sortFunction(b.targetDate, a.targetDate));
      break;
    case "Color":
      sorted = notes.sort((a, b) => sortFunction(a.color, b.color));
      break;
  }

  return sorted;
}

export default sortNotes;
