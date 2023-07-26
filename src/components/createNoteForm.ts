import createNote from "./note";

const noteForm: () => string = (): string => {
  const date = new Date();
  const minDate: string = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  const form = `
    <form action="" class="add-note" id="add-note">
        <label for="title-input" class="form-label">Title*</label>
        <input type="text" name="title" id="title-input" class="form-control" required/>

        <label for="body-input" class="form-label">Note body*</label>
        <textarea name="body" id="body-input" class="border" required></textarea>

        <label for="target-date" class="form-label">Target date</label>
        <input type="date" name="target-date" id="target-date" min="${minDate}"/>

        <label for="color-select" class="form-label">Note color</label>
        <select
            name="color"
            id="color-select"
            class="form-select"
            aria-label="Default select element"
        >
            <option selected>None</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="brown">brown</option>
        </select>
        <button onclick="createNote" id="form-button">Add note</button>
    </form>
`;
  return form;
};
export default noteForm;
