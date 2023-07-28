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

export type { colorObject, Note, SortMethod };
