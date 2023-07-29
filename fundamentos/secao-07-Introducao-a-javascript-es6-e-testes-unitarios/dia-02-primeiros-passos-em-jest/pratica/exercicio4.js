
const techList = (arr, name) => {
  const result = [];
  arr.sort();
  if(arr.length === 0) {
    return 'Vazio!';
  }
  arr.forEach(element => {
    result.push({tech: element, name});
  });
  return result;
}

module.exports = techList;