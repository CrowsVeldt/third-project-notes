import { getNote, saveNote } from "../utils/storage";
import { makeHash, formatDate } from "../utils/util";

class Note {
  #id: string;
  #title: string;
  #body: string;
  #targetDate: string;
  #createDate: string;
  #color: string;
  constructor(
    id?: string,
    title?: string,
    body?: string,
    targetDate?: string,
    createDate?: string,
    color?: string
  ) {
    const date = new Date();
    this.#id = id ? id : makeHash(date.getTime().toString());
    this.#title = title ? title : "";
    this.#body = body ? body : "";
    this.#targetDate = targetDate ? targetDate : "";
    this.#createDate = createDate ? createDate : formatDate(date);
    this.#color = color ? color : "";
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

  setId(id: string) {
    this.#id = id;
    return this.#id;
  }

  setTitle(title: string) {
    this.#title = title;
    return this.#title;
  }

  setBody(body: string) {
    this.#body = body;
    return this.#body;
  }

  setTargetDate(targetDate: string) {
    this.#targetDate = targetDate;
    return this.#targetDate;
  }

  setCreateDate(createDate: string) {
    this.#createDate = createDate;
    return this.#createDate;
  }

  setColor(color: string) {
    this.#color = color;
    return this.#color;
  }

  existsInStorage() {
     console.log(this.#id)
    if (getNote(this.#id)) return true
    return false
  }

  saveToStorage () {
      if (!this.existsInStorage()) {
          saveNote({
              id: this.#id,
              title: this.#title,
              body: this.#body,
              targetDate: this.#targetDate,
              createDate: this.#createDate,
              color: this.#color
          })
      }
  }
}

export default Note;
