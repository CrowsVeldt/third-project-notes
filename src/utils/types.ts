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

type elementInput = {
  type: string;
  id?: string;
  class?: string[];
  content?: string;
  props?: string[][];
};

export type { colorObject, Note, SortMethod, elementInput };
