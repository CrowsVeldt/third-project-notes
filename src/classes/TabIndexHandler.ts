import { TabIndexObject } from "../utils/types";

class TabIndexHandler {
  #list: TabIndexObject[];

  constructor() {
    this.#list = (() => {
      // IIFE to get all elements with tabIndex > 0
      const indexes: TabIndexObject[] = [];
      const elements = document.querySelectorAll(
        ":not(.form-child)"
      ) as NodeListOf<HTMLElement>;
      for (let node in elements) {
        if (elements[node].tabIndex >= 0) {
          indexes.push({
            el: elements[node],
            oldIndex: elements[node].tabIndex,
          });
        }
      }
      return indexes;
    })();
  }

  listTabIndexes(): void {
    const indexes: TabIndexObject[] = [];
    const elements = document.querySelectorAll(
      ":not(.form-child)"
    ) as NodeListOf<HTMLElement>;
    for (let node in elements) {
      if (elements[node].tabIndex >= 0) {
        indexes.push({
          el: elements[node],
          oldIndex: elements[node].tabIndex,
        });
      }
    }
    this.#list = indexes;
  }

  removeTabIndexes(): void {
    this.#list.forEach((i: TabIndexObject) => {
      i.el.tabIndex = -1;
    });
  }

  resetTabIndexes(): void {
    this.#list.forEach((i: TabIndexObject) => {
      i.el.tabIndex = i.oldIndex;
    });
  }
}

export default TabIndexHandler;
