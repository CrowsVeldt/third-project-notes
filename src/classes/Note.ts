import { getNote, saveNote } from "../utils/noteStorage";
import { Note } from "../utils/types";
import { makeHash, formatDate } from "../utils/util";

class NoteObj {
  #title: string;
  #body: string;
  #color: string;
  #id: string;
  #createDate: string;
  #targetDate: string;
  constructor(
    title?: string,
    body?: string,
    color?: string,
    id?: string,
    createDate?: string,
    targetDate?: string
  ) {
    const date = new Date();
    this.#title = title ? title : "";
    this.#body = body ? body : "";
    this.#color = color ? color : "none";
    this.#id = id ? id : makeHash(date.getTime().toString());
    this.#createDate = createDate ? createDate : formatDate(date);
    this.#targetDate = targetDate ? targetDate : "";
  }

  getDetails(): Note {
    return {
      title: this.#title,
      body: this.#body,
      color: this.#color,
      id: this.#id,
      createDate: this.#createDate,
      targetDate: this.#targetDate,
    };
  }

  getTitle(): string {
    return this.#title;
  }

  getBody(): string {
    return this.#body;
  }

  getTargetDate(): string {
    return this.#targetDate;
  }

  getColor(): string {
    return this.#color;
  }

  getId(): string {
    return this.#id;
  }

  getCreateDate(): string {
    return this.#createDate;
  }

  existsInStorage(): boolean {
    if (getNote(this.#id)) return true;
    return false;
  }

  saveToStorage(): void {
    if (!this.existsInStorage()) {
      saveNote({
        title: this.#title,
        body: this.#body,
        color: this.#color,
        id: this.#id,
        createDate: this.#createDate,
        targetDate: this.#targetDate,
      });
    }
  }
}

export default NoteObj;
