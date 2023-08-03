import { getNote, saveNote } from "../utils/storage";
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

  getDetails() {
    return {
      title: this.#title,
      body: this.#body,
      color: this.#color,
      id: this.#id,
      createDate: this.#createDate,
      targetDate: this.#targetDate,
    };
  }

  getTitle() {
    return this.#title;
  }

  getBody() {
    return this.#body;
  }

  getTargetDate() {
    return this.#targetDate;
  }

  getColor() {
    return this.#color;
  }

  getId() {
    return this.#id;
  }

  getCreateDate() {
    return this.#createDate;
  }

  existsInStorage() {
    if (getNote(this.#id)) return true;
    return false;
  }

  saveToStorage() {
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
