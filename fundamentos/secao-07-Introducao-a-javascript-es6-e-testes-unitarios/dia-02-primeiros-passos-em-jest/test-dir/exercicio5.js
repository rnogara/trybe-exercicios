
function hydrate(string) {
  const arr = string.split('');
  const numFinder = arr.filter(Number);
  let water = 0;
  for(let i in numFinder) {
    water += numFinder[i];
  }
  if (water === 1) {
    return `1 copo de água`
  } else {
    return `${water} copos de água`
  }
}
hydrate(console.log('1 copo de água'));


module.exports = {hydrate};