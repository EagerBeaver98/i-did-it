import { useState } from "react";


function AddAlter(props) {

  const [newAlter, setNewAlter] = useState({name: "Name", age: 0, gender: "Gender"});

  function handleChange(event) {
    setNewAlter({...newAlter, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.profile.addAlter(newAlter);
  }

  return(
  <form className="newAlterForm" onSubmit={handleSubmit}>
    <input type="text" name="name" value={newAlter.name} onChange={handleChange}></input>
    <input type="number" name="age" value={newAlter.age} onChange={handleChange}></input>
    <input type="text" name="gender" value={newAlter.gender} onChange={handleChange}></input>
    <input type="submit" value="Submit"></input>
  </form>
  )
}

export default AddAlter;