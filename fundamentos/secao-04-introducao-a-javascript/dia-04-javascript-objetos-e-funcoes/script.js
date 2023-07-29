let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info['recorrente'] = 'Sim';
console.log('');
console.log(info);

console.log('');
console.log('Chaves presentes no objeto info:');
for (let i in info ){
  console.log(i);
}

console.log('');
console.log('Valores presentes no objeto info:');
for (let i in info ){
  console.log(info[i]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log('');
for(let n in info2){
  if (info[n] === info2[n]){
    console.log('Ambos ' + n + 's');
  } else {
    console.log(info[n] + ' e ' + info2[n]);
  }
}



