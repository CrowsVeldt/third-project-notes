import { BackgroundColor } from "./types";
const noteColors: BackgroundColor[] = [
  "none",
  "red",
  "blue",
  "green",
  "yellow",
  "brown",
];

const sortMethods: string[] = [
  'Abc',
  'Date Created',
  'Target date',
  'Color'
]

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

const lowerCase: (arg0: string) => string = (n: string) => n.toLocaleLowerCase()

export { noteColors, sortMethods, formatDate, lowerCase };
