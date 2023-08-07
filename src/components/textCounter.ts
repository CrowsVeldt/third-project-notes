import newElement from "../utils/newElement";

function textCounter(
  target: HTMLInputElement | HTMLTextAreaElement
): HTMLElement {
  const counter = newElement({
    type: "p",
    id: `${target.id}-counter`,
    content: `${target.value.length}/${target.maxLength}`,
  }) as HTMLElement;

  target.addEventListener("input", () => {
    const counter: HTMLElement | null = document.getElementById(
      `${target.id}-counter`
    );

    if (counter) {
      counter.innerText = `${target.value.length}/${target.maxLength}`;

      if (target.value.length < target.maxLength - 10) {
        counter.style.color = "black";
      } else if (target.value.length >= target.maxLength - 5) {
        counter.style.color = "red";
      } else if (target.value.length >= target.maxLength - 10) {
        counter.style.color = "orange";
      }
    }
  });
  return counter;
}

export default textCounter;
