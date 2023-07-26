type BackgroundColor = "red" | "blue" | "green" | "yellow" | "brown" | 'none';

// type Note = {
//   title: string;
//   body: string;
//   targetDate?: string;
//   color: BackgroundColor;
// };
const hashCode = (s: string) => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)


class Note {
  #title: string
  #body: string
  #createDate: string
  #targetDate: string
  #color: BackgroundColor
  #id: number
  constructor(title: string, body: string, targetDate: string, color: BackgroundColor) {
    const date = new Date()

    this.#title = title
    this.#body = body
    this.#createDate = date.toLocaleDateString("he-IL", {dateStyle: 'short'}).replaceAll('.', '/');
    this.#targetDate = targetDate
    this.#color = color
    this.#id = hashCode(date.getTime().toString() + (Math.random() + 1).toString(36).substring(7))
  }

  getNote() {
    const title = this.#title
    const body = this.#body
    const cDate = this.#createDate
    const tDate = this.#targetDate
    const id = this.#id

    // const del = document.createElement('button')
    // del.innerHTML = 'delete'
    // del.id = `button-${this.#id}`
    // del.onclick = () => {
    //   const el = document.querySelector('#' + del.id)
    //   el?.remove()
    // }

    return `
      <div id="${id}" class="note flex flex-column border border-dark rounded" style="background-color: ${this.#color}; ">
        <h3>${title}</h3>
        <p>${body}</p>
        <p>Created on: ${cDate}</p>
        <p>Target date: ${tDate}</p>
        <button id="button-${id}" onClick="${(() => alert("teest"))}" class="">Delete</button>
      </div>
    `
  }

  deleteNote () {
    console.log(this.#id)

    //document.getElementById(id.toString())?.remove()
  }
}

// function createNote (title: string, body: string, targetDate: string, color: BackgroundColor) {
//   const note = new Note(title, body, targetDate, color)
//   return note.newNote()
// }

export default Note

// function createNote(): string {
// // deetz: Note
// //   const title: string = deetz.title;
// //   const body: string = deetz.body;
//   const cDate: string = new Date().toLocaleDateString("he-IL", {dateStyle: 'short'}).replaceAll('.', '/');
// //   const tDate: string  = deetz.targetDate ? deetz.targetDate : ''
// //   const bgColor: BackgroundColor = deetz.color;


//   const note: string = `
//     <div id="note" class="card border border-dark border-2" style="background-color: red;">
//         <div class="card-body">
//           <h2 id="note-title" class="card-title">Title</h2>
//           <p id="note-body" class="card-text">Note Body</p>
//           <p id="creation-date" class="card-text">Created: ${cDate}</p>
//           <p id="target-date"card-text></p>
//         </div>
//     </div>
// `;

//   return note;
// }

// export default createNote;

//     // <div id="note" class="card border border-dark border-2" style="background-color: ${bgColor};">
//     //     <div class="card-body">
//     //       <h2 id="note-title" class="card-title">${title}</h2>
//     //       <p id="note-body" class="card-text">${body}</p>
//     //       <p id="creation-date" class="card-text">Created: ${cDate}</p>
//     //       <p id="target-date"card-text>Target date: ${tDate}</p>
//     //     </div>
//     // </div>