import { Note } from "./types";

function sortFunction(a: any, b: any): number {
  const direction: HTMLElement | null = document.getElementById("direction");
  const toggle: boolean =
    direction !== null && direction.classList.contains("up") ? true : false;
  let result: number = 0;
  if (a > b) {
    result = 1;
  } else if (a < b) {
    result = -1;
  }
  // if toggle classlist does not contain 'up', reverse sort order
  if (toggle) {
    return result - (result + result);
  }
  return result;
}

// only sort notes with targetDates, leave the rest as-is and append
function sortByTargetDate(notes: Note[]): Note[] {
  const yesTargetDate: Note[] = [];
  const noTargetDate: Note[] = [];

  notes.forEach((note) => {
    if (note.targetDate === "") {
      noTargetDate.push(note);
    } else {
      yesTargetDate.push(note);
    }
  });

  const sortedNotes: Note[] = yesTargetDate.sort((a: Note, b: Note) =>
    sortFunction(a.targetDate, b.targetDate)
  );

  return sortedNotes.concat(noTargetDate);
}

function sortNotes(notes: undefined | Note[], method: string): Note[] | void {
  if (!notes) return;
  let sorted: Note[] = notes;

  if (method === "Date Created" || method === "תאריך ייצור") {
    sorted = notes.sort((a: Note, b: Note) =>
      sortFunction(b.createDate, a.createDate)
    );
  } else if (method === "Title" || method === "כותרת") {
    sorted = notes.sort((a: Note, b: Note) =>
      sortFunction(a.title.toLocaleLowerCase(), b.title.toLocaleLowerCase())
    );
  } else if (method === "Color" || method === "צבע") {
    sorted = notes.sort((a: Note, b: Note) => sortFunction(a.color, b.color));
  } else if (method === "Target Date" || method === "תאריך יעד") {
    sorted = sortByTargetDate(notes);
  }

  return sorted;
}

export default sortNotes;
