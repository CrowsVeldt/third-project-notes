function directionToggle(): HTMLDivElement {
  const toggle: HTMLDivElement = document.createElement("div");
  toggle.id = "box";
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("up");
  });

  const arrow: HTMLDivElement = document.createElement("div");
  arrow.id = "arrow";

  toggle.appendChild(arrow);
  return toggle;
}

export default directionToggle;
