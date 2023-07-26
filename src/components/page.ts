import Note from "./note";

const note = new Note('title', 'note body', '07/12/2023', 'red')

const mainPage: string = `
    <div id="main-page">
        <header class="container-fluid text-center border">
            <h1 id="title" class="">Notes</h1>
        </header>

        <div id="note-container" class="container d-flex flex-wrap">
            ${note.getNote()}
        </div>

        <footer class="container-fluid border text-center position-absolute bottom-0">
            <h2>footer</h2>
        </footer>
    </div>
`;
export default mainPage;
