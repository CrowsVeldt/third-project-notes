type BackgroundColor = "red" | "blue" | "green" | "yellow" | "brown" | 'none';

type Note = {
  title: string;
  body: string;
  targetDate?: string;
  color: BackgroundColor;
};

function createNote(deetz: Note): string {
  const title: string = deetz.title;
  const body: string = deetz.body;
  const cDate: string = new Date().toLocaleDateString("he-IL", {dateStyle: 'short'}).replaceAll('.', '/');
  const tDate: string  = deetz.targetDate ? deetz.targetDate : ''
  const bgColor: BackgroundColor = deetz.color;


  const note: string = `
    <div id="note" style="background-color: ${bgColor};">
        <div class="card-body">
          <h2 id="note-title" class="card-title">${title}</h2>
          <p id="note-body" class="card-text">${body}</p>
          <p id="creation-date" class="card-text">Created: ${cDate}</p>
          <p id="target-date"card-text>Target date: ${tDate}</p>
        </div>
    </div>
`;

  return note;
}

export default createNote;
