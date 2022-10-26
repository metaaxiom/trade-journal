import React from "react";

export default function JournalEntryForm(props) {
  const { entryDto, setEntryDto } = props;

  const handleEntryFieldUpdate = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEntryDto((values) => ({ ...values, [name]: value }));
  };

  return (
    <form className="entry__form">
      <label>Description</label>
      <br />
      <textarea
        className="entry__description"
        name="description"
        value={entryDto.description}
        onChange={handleEntryFieldUpdate}
        rows="5"
      ></textarea>
    </form>
  );
}
