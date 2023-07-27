function newNote(
  title: string,
  body: string,
  targetDate: string,
  color: string
) {
  // create Hash from s
  const hashCode = (s: string) =>
    s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  const date = new Date();
  const cDate = formatDate(date)
    // set id to Hash of current time + random characters
  const id = hashCode(
    date.getTime().toString() + (Math.random() + 1).toString(36).substring(7)
  ).toString();

  const buttonId = "button-" + id;

  const note = document.createElement("div");
  note.id = id;
  note.style.backgroundColor = color;

  const noteTitle = document.createElement("h3");
  noteTitle.innerText = title;

  const noteBody = document.createElement("p");
  noteBody.innerText = body;

  const noteCDate = document.createElement("p");
  noteCDate.innerText = cDate;

  const noteTDate = document.createElement("p");
  noteTDate.innerText = targetDate;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.id = buttonId;
  deleteButton.addEventListener("click", () => {
    document.getElementById(id)?.remove();
  });

  note.appendChild(noteTitle);
  note.appendChild(noteBody);
  note.appendChild(noteCDate);
  note.appendChild(noteTDate);
  note.appendChild(deleteButton);

  return note;
}

function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date): string {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}

export default newNote;