import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";


function AddAlter(props) {

  const [newAlter, setNewAlter] = useState({id: props.state.profile.alters.length + 1, name: "", age: 0, gender: "", active: true});

  const history = useHistory();

  function handleChange(event) {
    setNewAlter({...newAlter, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setState({...props.state, profile: {...props.state.profile, alters: [...props.state.profile.alters, newAlter]}});
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