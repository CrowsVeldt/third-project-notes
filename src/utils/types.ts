type colorObject = {
  name: string
  value: string
}

type Note = {
  title: string;
  body: string;
  color: string
  targetDate?: string;
  id?: string;
  createDate?: string;
};

export type { colorObject, Note };
