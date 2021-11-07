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
  {id: 7, name: "Jennifer", gender: "Female", active: true}]
};

const tweets = [
  {
    tweet: "I'm Drew",
    tweetID: 1,
    profileID: 1,
    profileName: "Winniebean",
    alterID: 2,
    datetime: 1630442027288,
  },
  {
    tweet: "I'm Winnie",
    tweetID: 2,
    profileID: 1,
    profileName: "Winniebean",
    alterID: 1,
    datetime: 1630442066400,
  },
  {
    tweet: "I'm Rosie",
    tweetID: 3,
    profileID: 1,
    profileName: "Winniebean",
    alterID: 3,
    datetime: 1630442133625,
  }
];

export {profile, tweets};