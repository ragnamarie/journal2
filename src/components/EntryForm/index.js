import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm({ onAddEntry, id, date, isFavorite }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Extract the values
    const name = formData.get("name");
    const plot = formData.get("plot");

    // Create the data object
    const data = {
      id: id,
      date: date,
      name,
      plot,
      isFavorite: isFavorite,
    };

    // Call onAddActivity and pass the data object as an argument
    onAddEntry(data);
    console.log(data);
    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="plot">Plot</label>
          <textarea name="plot" id="plot" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
