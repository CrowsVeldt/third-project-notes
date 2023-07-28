type BackgroundColor = "red" | "green" | "blue" | "yellow" | "brown" | "none";

type Note = {
  title: string;
  body: string;
  color: BackgroundColor;
  targetDate?: string;
  id?: string;
  createDate?: string;
};

export type { BackgroundColor, Note };
