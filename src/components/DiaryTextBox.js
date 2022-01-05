import { React, useState } from "react";

export default function DiaryTextBox(props) {
  const [state, setState] = useState({ value: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addDiary(state.value);
  };

  const handleChange = (event) => {
    setState({ value: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          name="newTextBox"
          onChange={handleChange}
        ></input>
        <input type="submit" value="Post"></input>
      </form>
    </div>
  );
}
