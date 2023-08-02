type colorObject = {
  name: string;
  value: string;
};

type Note = {
  title: string;
  body: string;
  color: string;
  id?: string;
  createDate?: string;
  targetDate?: string;
};

type SortMethod = { method: string };

type EventListener = {
  eventType: string,
  listener: (evt?: Event) => void
}

type elementParams = {
  type: string;
  id?: string;
  class?: string[];
  content?: string;
  eventListener?: EventListener,
  props?: string[][];
};

export type { colorObject, Note, SortMethod, elementParams };
