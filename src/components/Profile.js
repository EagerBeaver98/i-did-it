import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Profile(props) {
  return (
    <div className="profile">
    <h2>Profile</h2>
    <p>Profile ID: {props.profile.id}</p>
    <p>Current alter ID: {props.alterID}</p>
    <p>Current alter: {props.currentAlter}</p>
    <Link to="/add_alter">
    <Button>New Alter</Button>
    </Link>
    {props.profile.alters.map((personality) => {
      return (
        <div key={personality.id}>
        <p>Alter ID: {personality.id}</p>
        <p>Alter Name: {personality.name}</p>
        </div>
      )
    })}
    </div>
  )
};

export default Profile;