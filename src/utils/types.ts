type colorObject = {
  name: string;
  value: string;
};

type Note = {
  title: string;
  body: string;
  color: string;
  targetDate?: string;
  id?: string;
  createDate?: string;
};

type SortMethod = { method: string };

// type SortSignature = () => ((arg0: Note, arg1: Note) => number)
// e.g. (a: Note, b: Note) => number
// type SortFunctionSignature = (a: Note, b: Note) => number

export type { colorObject, Note, SortMethod };
