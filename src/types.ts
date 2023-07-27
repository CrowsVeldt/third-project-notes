type backgroundColor = "red" | "green" | "blue" | "yellow" | "brown" | "none";

type Note = {
  title: string;
  body: string;
  color: backgroundColor;
  targetDate?: string;
  id?: string;
  createDate?: string;
};

export type { Note, backgroundColor };
