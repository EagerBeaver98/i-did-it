import { useState } from "react";
import { useHistory } from "react-router";


function AddAlter(props) {

  const [newAlter, setNewAlter] = useState({name: "", age: 0, gender: ""});

  const history = useHistory();

  function handleChange(event) {
    setNewAlter({...newAlter, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.state.profile.addAlter(newAlter);
    history.goBack();
    
  }

  return(
  <form className="newAlterForm" onSubmit={handleSubmit}>
    <label>Name:
    <input type="text" name="name" value={newAlter.name} onChange={handleChange}></input>
    </label>
    <label>Age:
    <input type="number" name="age" value={newAlter.age} onChange={handleChange}></input>
    </label>
    <label>Gender:
    <input type="text" name="gender" value={newAlter.gender} onChange={handleChange}></input>
    </label>
    <input type="submit" value="Submit"></input>
  </form>
  )
}

export default AddAlter;