const getNewIDNum = (arrayWithIDs) => {
  const newID = arrayWithIDs.at(-1).id + 1;
  return newID;
};

export default getNewIDNum;