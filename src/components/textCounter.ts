import newElement from "../utils/newElement";
import { CounterTarget } from "../utils/types";

function colorCount(
  target: CounterTarget,
  counter: HTMLParagraphElement
): void {
  if (target.value.length < target.maxLength - 10) {
    counter.style.color = "black";
  } else if (target.value.length >= target.maxLength - 5) {
    counter.style.color = "red";
  } else if (target.value.length >= target.maxLength - 10) {
    counter.style.color = "orange";
  }
}

function countFormula(a: CounterTarget): string {
  return `${a.value.length}/${a.maxLength}`;
}

function setCounter(
  target: CounterTarget,
  counter: HTMLParagraphElement
): void {
  counter.innerText = countFormula(target);
  colorCount(target, counter);
}

function textCounter(target: CounterTarget): HTMLParagraphElement {
  const counter = newElement({
    type: "p",
    id: `${target.id}-counter`,
    content: countFormula(target),
  }) as HTMLParagraphElement;

  target.addEventListener("input", () => {
    const counter = document.getElementById(
      `${target.id}-counter`
    ) as HTMLParagraphElement;

    if (counter) {
      setCounter(target, counter);
    }
  });
  return counter;
}

export { textCounter, setCounter };
