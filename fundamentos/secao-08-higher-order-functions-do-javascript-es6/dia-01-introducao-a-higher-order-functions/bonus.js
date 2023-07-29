const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// PARTE 1
// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = (dragon) => Math.floor((Math.random() * (dragon.strength - 14)) + 15);
// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (warrior) => Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - (warrior.strength - 1))) + warrior.strength);
// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.
const mageDamage = (mage) => {
  let skill = { damage: 0, mana: mage.mana};
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  }
  skill.damage = Math.floor((Math.random() * ((mage.intelligence * 2) - (mage.intelligence - 1))) + mage.intelligence);
  skill.mana = mage.mana -15;
  return skill;
};

// PARTE 2

const gameActions = {
  // Crie as HOFs neste objeto.
  // Crie a primeira HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.
  warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage(warrior);
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  // Crie a segunda HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.
  mageTurn: (mageDamage) => {
    const mageTurnStats = mageDamage(mage);
    const mageDmg = mageTurnStats.damage;
    mage.mana -= mageTurnStats.mana;
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
  },
  // Crie a terceira HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.
  dragonTurn: (dragonDamage) => {
    const dragonDmg = dragonDamage(dragon);
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },
  // Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());
