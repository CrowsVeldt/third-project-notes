import l10n from "../utils/l10n";
import { getCurrentLanguage } from "../utils/languageFunctions";
import { l10nLangOption } from "../utils/types";

class FormObject {
  #head: string;
  #title: string;
  #body: string;
  #tDate: string;
  #color: string;
  #buttonName: string;
  #noteId?: string;

  constructor(
    head: string,
    title: string,
    body: string,
    tDate: string,
    color: string,
    buttonName: string
  ) {
    this.#head = head;
    this.#title = title;
    this.#body = body;
    this.#tDate = tDate;
    this.#color = color;
    this.#buttonName = buttonName;
    this.#noteId = "";
  }

  getHead(): string {
    return this.#head;
  }
  getTitle(): string {
    return this.#title;
  }
  getBody(): string {
    return this.#body;
  }
  getTDate(): string {
    return this.#tDate;
  }
  getColor(): string {
    return this.#color;
  }
  getButtonName(): string {
    return this.#buttonName;
  }
  getNoteId(): string | undefined {
    return this.#noteId;
  }

  getDetails(): {
    head: string;
    title: string;
    body: string;
    tDate: string;
    color: string;
    buttonName: string;
    noteId: string | undefined;
  } {
    return {
      head: this.#head,
      title: this.#title,
      body: this.#body,
      tDate: this.#tDate,
      color: this.#color,
      buttonName: this.#buttonName,
      noteId: this.#noteId,
    };
  }

  setHead(val: string): void {
    this.#head = val;
  }
  setTitle(val: string): void {
    this.#title = val;
  }
  setBody(val: string): void {
    this.#body = val;
  }
  setTDate(val: string): void {
    this.#tDate = val;
  }
  setColor(val: string): void {
    this.#color = val;
  }
  setButtonName(val: string): void {
    this.#buttonName = val;
  }
  setNoteId(val: string): void {
    this.#noteId = val;
  }

  setAll(
    a: string,
    b: string,
    c: string,
    d: string,
    e: string,
    f: string,
    g: string
  ): void {
    this.#head = a;
    this.#title = b;
    this.#body = c;
    this.#tDate = d;
    this.#color = e;
    this.#buttonName = f;
    this.#noteId = g;
  }

  resetAll(): void {
    this.#head = l10n.getTextContent(getCurrentLanguage() as l10nLangOption, 'form-heading:add');
    this.#title = "";
    this.#body = "";
    this.#tDate = "";
    this.#color = "none";
    this.#buttonName = l10n.getTextContent(getCurrentLanguage() as l10nLangOption, 'form-button:add');
    this.#noteId = "";
  }
}

export default FormObject;
