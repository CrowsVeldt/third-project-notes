import noteForm from '../components/createNoteForm'

const mainPage: string = `
    <div id="main-page">
        <h1 id="Title">Notes</h1>
        ${noteForm()}
    </div>
`;
export default mainPage;
