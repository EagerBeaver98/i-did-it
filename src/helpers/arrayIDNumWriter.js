const getNewIDNum = (arrayWithIDs) => {
  var newID;
  if (arrayWithIDs[0].id) {
    newID = arrayWithIDs.at(-1).id + 1;
  } else if (arrayWithIDs[0].tweetID) {
    newID = arrayWithIDs.at(-1).tweetID + 1;
  }
  return newID;
};

export default getNewIDNum;
