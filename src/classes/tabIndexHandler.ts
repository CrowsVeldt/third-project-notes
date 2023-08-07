import { TabIndexObject } from "../utils/types";

class TabIndexHandler {
  #list: TabIndexObject[];

  constructor() {
    this.#list = (() => {
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

  removeTabIndexes() {
    this.#list.forEach((i: TabIndexObject) => {
      i.el.tabIndex = -1;
    });
  }

  resetTabIndexes() {
    this.#list.forEach((i: TabIndexObject) => {
      i.el.tabIndex = i.oldIndex;
    });
  }
}

export default TabIndexHandler;
