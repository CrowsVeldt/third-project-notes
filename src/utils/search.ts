import Fuse from "fuse.js";
import { Note } from "./types";

function search(query: string, notes: Note[]): Note[] {
  const results: Note[] = [];

  // Using Fuse for fuzzy search
  const fuseOptions: {} = {
    isCaseSensitive: false,
    includeScore: true,
    threshold: 0.5,
    includeMatches: true,
    keys: ["title", "body"],
  };

  new Fuse(notes, fuseOptions)
    .search(query)
    .forEach((i) => results.push(i.item));

  return results;
}

export default search;
