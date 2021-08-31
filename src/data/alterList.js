function listAlterNames(alters) {
  const list = [];
  for (let alter in alters) {
    list.push(alter.name);
  }
  return list;
};

export {listAlterNames};