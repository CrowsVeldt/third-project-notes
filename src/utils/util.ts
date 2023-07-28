import { SortMethod, colorObject } from "./types";

const noteColors: colorObject[] = [
  { name: "None", value: "none" },
  { name: "Red", value: "salmon" },
  { name: "Blue", value: "lightblue" },
  { name: "Green", value: "lightgreen" },
  { name: "Yellow", value: "gold" },
  { name: "Brown", value: "tan" },
];

const sortMethods: SortMethod[] = [
  { method: "Date Created" },
  { method: "Title" },
  { method: "Target Date" },
  { method: "Color" },
];

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

const lowerCase: (arg0: string) => string = (n: string) =>
  n.toLocaleLowerCase();

export { noteColors, sortMethods, formatDate, lowerCase };
