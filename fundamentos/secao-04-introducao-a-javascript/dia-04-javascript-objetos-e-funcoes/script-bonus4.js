let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(`O morador do Bloco 2 de nome ${moradores.blocoDois[moradores.blocoDois.length -1].nome} ${moradores.blocoDois[moradores.blocoDois.length -1].sobrenome} mora no ${moradores.blocoDois[moradores.blocoDois.length -1].andar}º andar, apartamento ${moradores.blocoDois[moradores.blocoDois.length -1].apartamento}.`);

console.log('No bloco um vivem os moradores:')
for (let i in moradores.blocoUm){
  console.log(`- ${moradores.blocoUm[i].nome} ${moradores.blocoUm[i].sobrenome}`);
}
console.log('No bloco dois vivem os moradores:')
for (let i in moradores.blocoDois){
  console.log(`- ${moradores.blocoDois[i].nome} ${moradores.blocoDois[i].sobrenome}`);
}