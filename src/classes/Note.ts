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
    targetDate?: string,
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
      targetDate: this.#targetDate
    }
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

  // setId(id: string) {
  //   this.#id = id;
  //   return this.#id;
  // }

  // setTitle(title: string) {
  //   this.#title = title;
  //   return this.#title;
  // }

  // setBody(body: string) {
  //   this.#body = body;
  //   return this.#body;
  // }

  // setTargetDate(targetDate: string) {
  //   this.#targetDate = targetDate;
  //   return this.#targetDate;
  // }

  // setCreateDate(createDate: string) {
  //   this.#createDate = createDate;
  //   return this.#createDate;
  // }

  // setColor(color: string) {
  //   this.#color = color;
  //   return this.#color;
  // }

  existsInStorage() {
    if (getNote(this.#id)) return true
    return false
  }


  saveToStorage () {
      if (!this.existsInStorage()) {
          saveNote({
              title: this.#title,
              body: this.#body,
              color: this.#color,
              id: this.#id,
              createDate: this.#createDate,
              targetDate: this.#targetDate,
          })
      }
  }
}

export default NoteObj;
