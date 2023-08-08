import newElement from "../../utils/newElement";
import barContainer from "./searchBar";
import selectContainer from "./sortSelector";

const noteDisplayControls: HTMLDivElement = newElement({
  type: "div",
  id: "search-and-sort",
  class: ["container", "d-flex", "justify-content-between", "pb-2"],
}) as HTMLDivElement;

noteDisplayControls.append(selectContainer, barContainer);

export default noteDisplayControls;
