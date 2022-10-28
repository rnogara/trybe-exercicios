//Motor
let motorStatus = false;
const ligaDesliga = () => true ? false : true;
function motorSwitch (motorStatus) {
  let status = '';
  if (motorStatus === true) {
    ligaDesliga();
    status = 'desligado';
  } else if (motorStatus === false) {
    ligaDesliga();
    status = 'ligado';
  } else {
    return `Algo deu errado`
  }
  return `O motor está ${status}`
};
console.log(motorSwitch(motorStatus));

// Área do Circulo
const areaCircle = (radius) => Math.PI * (radius ** 2);
console.log('');
console.log(`Essa é a área do círculo: ${areaCircle(5)}`);

//Maior palavra da frase | Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort()
function longestWord(string) {
  let frase = string.split(' ');
  let longest = ' ';
  for (let i in frase){
    frase[i].length > longest.length ? longest = frase[i] : longest = longest;
  }
  return longest;
}
console.log('');
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));