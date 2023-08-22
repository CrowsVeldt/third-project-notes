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

type SortMethodType = { method: string };

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
  heading: HTMLHeadingElement;
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

type l10nLangOption = "en-US" | "he";

type l10nTextContent =
  | "search-bar"
  | "page-title"
  | "page-foot-title"
  | "full-note-created"
  | "full-note-target"
  | "form-heading:add"
  | "form-heading:update"
  | "form-button:add"
  | "form-button:update"
  | "note-title-label"
  | "note-body-label"
  | "note-target-date-label"
  | "note-color-label"
  | "wipe-button"
  | "settings-title"
  | "note-target-date"
  | "note-create-date";

type l10nConfirmation = "wipe-button" | "note-delete-button";

export type {
  colorObject,
  ElementParams,
  FormElement,
  Note,
  NoteUpdate,
  SortMethodType,
  TabIndexObject,
  CounterTarget,
  l10nLangOption,
  l10nTextContent,
  l10nConfirmation,
};
