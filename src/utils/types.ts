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
  eventType: string;
  listener: (evt?: Event) => void;
};

type ElementParams = {
  type: string;
  id?: string;
  class?: string[];
  content?: string;
  eventListener?: EventListener;
  props?: string[][];
};

type FormElement = {
  header: HTMLHeadingElement;
  title: HTMLInputElement;
  body: HTMLInputElement;
  date: HTMLInputElement;
  color: HTMLSelectElement;
  button: HTMLButtonElement;
  noteId?: string;
};

type NoteUpdate = {
  [title: string]: string;
  body: string;
  targetDate: string;
  color: string;
};

type TabIndexObject = {
  el: HTMLElement;
  oldIndex: number;
};

type CounterTarget = HTMLInputElement | HTMLTextAreaElement;

export type {
  colorObject,
  ElementParams,
  FormElement,
  Note,
  NoteUpdate,
  SortMethod,
  TabIndexObject,
  CounterTarget,
};
