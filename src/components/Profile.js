function Profile(props) {
  return (
    <div>
    <h2>Profile</h2>
    <p>{props.profile.alters[0].name}</p>
    </div>
  )
};

export default Profile;