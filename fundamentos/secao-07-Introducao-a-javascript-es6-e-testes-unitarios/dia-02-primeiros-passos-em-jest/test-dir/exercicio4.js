
function techList(tech, name) {
  const fullList = [];
  const sortTech = tech.sort();
  if (tech.length !== 0){
    sortTech.forEach(element => {
      fullList.push({tech: element,
        name: name,});
    });
  } else if (tech.length === 0) {
    return 'Vazio!';
  }
  return fullList;
}

module.exports = { techList };