import { React, useState } from "react";

export default function HomeTextBox(props) {
  const [state, setState] = useState({ value: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addPost(state.value);
    props.setTextBoxStatus({ showTextBox: false });
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
