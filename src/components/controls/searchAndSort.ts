import searchBarContainer from "./searchBar";
import newElement from "../../utils/newElement";
import selectContainer from "./sortSelector";

const noteDisplayControls = newElement({
  type: "div",
  id: "search-and-sort",
  class: ["container", "d-flex", "pb-2", "pt-2", "no-select"],
}) as HTMLDivElement;

noteDisplayControls.append(selectContainer, searchBarContainer);

export default noteDisplayControls;
