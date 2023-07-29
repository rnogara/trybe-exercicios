    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    let pessoa = {
      nome: 'Henri',
      idade: 20
    }
    pessoa = {
      nome: 'Luna',
      idade: 19
    } // Altere essa estrutura para corrigir o erro.
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);
    
    const numeroAleatorio = () => Math.random();
    console.log('');
    console.log(numeroAleatorio());

    let nome = 'Ivan';
    const hello = (nome) => `Olá, ${nome}!`;
    console.log('');
    console.log(hello(nome));

    let sobrenome = 'Pires';
    const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
    console.log('');
    console.log(nomeCompleto(nome, sobrenome));

    let speed = 90;
    const speedCar = (speed) => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
    console.log('');
    console.log(speedCar(speed));