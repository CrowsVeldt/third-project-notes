type BackgroundColor = "red" | "blue" | "green" | "yellow" | "brown";

type Note = {
  title: string;
  body: string;
  createDate: Date;
  targetDate: Date;
  color: BackgroundColor;
};

function createNote(deetz: Note): string {
  const title: string = deetz.title;
  const body: string = deetz.body;
  const tDate: Date = deetz.targetDate;
  const cDate: Date = deetz.createDate;
  const bgColor: BackgroundColor = deetz.color;

  const note: string = `
    <div id="note" style="background-color:${bgColor};">
        <h2 id="note-title">${title}</h2>
        <p id="note-body">${body}</p>
        <p id="creation-date">${cDate}</p>
        <p id="target-date">${tDate}</p>
    </div>
`;

  return note;
}

export default createNote;
