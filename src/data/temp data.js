const profile = {
  id: 1,
  email: "test@test.com", 
  password_digest: "password", 
  name: "Winniebean", 
  alters: [{id: 1, name: "Winnie", gender: "Female", active: true}, 
  {id: 2, name: "Drew", gender: "Male", active: true}, 
  {id: 3, name: "Rosie", gender: "Female", active: true},
  {id: 4, name: "Dalilah", gender: "Female", active: true}, 
  {id: 5, name: "Louise", gender: "Female", active: true}, 
  {id: 6, name: "Simon", gender: "Male", active: true}, 
  {id: 7, name: "Jennifer", gender: "Female", active: true}],
  addAlter: (alter) => {
    this.alters.push({id: this.alters.length + 1, name: alter.name, gender: alter.gender, active: true})
  }
};

const tweets = [
  {
  tweet: "I'm Drew",
  profileID: 1,
  alterID: 2},
  {
    tweet: "I'm Winnie",
    profileID: 1,
    alterID: 1
  },
  {
    tweet: "I'm Rosie",
    profileID: 1,
    alterID: 3
  }
];

export {profile, tweets};