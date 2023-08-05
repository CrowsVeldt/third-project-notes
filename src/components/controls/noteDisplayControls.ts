import sortSelect from "./sortSelector";
import newElement from "../../utils/newElement";
import makeSearchBar from "./searchBar";

const noteDisplayControls: HTMLDivElement = newElement({
  type: "div",
  class: ["container", "d-flex", "justify-content-between"],
}) as HTMLDivElement;

noteDisplayControls.appendChild(sortSelect());
noteDisplayControls.appendChild(makeSearchBar());

export default noteDisplayControls;
