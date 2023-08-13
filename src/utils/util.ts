import langOptions from "./textContent";
import { SortMethodType, colorObject } from "./types";

const noteColors: colorObject[] = langOptions.english.colors

const sortMethods: SortMethodType[] = langOptions.english.sortMethods

const hideClasses: string[] = [
  "position-fixed",
  "bg-light",
  "flex-column",
  "start-50",
  "translate-middle-x",
  "border",
  "border-dark",
  "rounded",
  "hideable",
];

// Receives string, combine with random string, return hash of both
function makeHash(s: string): string {
  const randString: string = (Math.random() + 1).toString(36).substring(7);
  const output: string = (s + randString)
    .split("")
    .reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0)
    .toString();
  return output;
}

// Receives number, returns number as string padded to two chars
function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}

// Receive date as Date or string, return formatted date string
function formatDate(date: string): string;
function formatDate(date: Date): string;
function formatDate(date: string | Date): string {
  if (typeof date === "string") {
    return date.split("-").reverse().join("/");
  } else {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }
}

function formatMinDate(date: Date): string {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
}
// regex to prevent adding html tags to input value
const removeTag: RegExp = new RegExp("(<[a-zA-Z0-9]+>)|(</[a-zA-Z0-9]+>)", "g");

// noteA and NoteB are type: any because otherwise it throws an error
// TODO: fix type error
function notesDifferent(noteA: any, noteB: any): boolean {
  for (let key in noteA) {
    if (noteA[key] !== noteB[key]) {
      return true;
    }
  }
  return false;
}

function getBrowserDefaultLanguage(): string {
  return navigator.language
}

export {
  formatDate,
  formatMinDate,
  hideClasses,
  makeHash,
  noteColors,
  notesDifferent,
  padTo2Digits,
  removeTag,
  sortMethods,
  getBrowserDefaultLanguage
};
