import newElement from "../../utils/newElement";
import barContainer from "./searchBar";
import selectContainer from "./sortSelector";

const noteDisplayControls: HTMLDivElement = newElement({
  type: "div",
  class: ["container", "d-flex", "justify-content-between"],
}) as HTMLDivElement;

noteDisplayControls.append(selectContainer, barContainer);

export default noteDisplayControls;
