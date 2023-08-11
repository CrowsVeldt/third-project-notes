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
  // if toggle classlist foes not contain 'up', reverse sort order
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
  switch (method) {
    case "Date Created":
      sorted = notes.sort((a: Note, b: Note) =>
        sortFunction(b.createDate, a.createDate)
      );
      break;
    case "Title":
      sorted = notes.sort((a: Note, b: Note) =>
        sortFunction(a.title.toLocaleLowerCase(), b.title.toLocaleLowerCase())
      );
      break;
    case "Color":
      sorted = notes.sort((a: Note, b: Note) => sortFunction(a.color, b.color));
      break;
    case "Target Date":
      sorted = sortByTargetDate(notes);
      break;
  }

  return sorted;
}

export default sortNotes;
