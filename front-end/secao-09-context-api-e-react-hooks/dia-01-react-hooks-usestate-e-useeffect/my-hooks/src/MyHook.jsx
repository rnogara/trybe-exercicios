import React, { useState } from 'react';
// Input do tipo text contendo o nome completo;
// Input do tipo number contendo a idade;
// Input do tipo text contendo a cidade;
// Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
// Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na aplicação.

export default function MyHook() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: <input type="text" id="name" value={ name } onChange={({target}) => setName(target.value) } /></label>
        <label htmlFor="age">Idade: <input type="number" id="age" value={ age } onChange={({target}) => setAge(target.value) }/></label>
        <label htmlFor="city">Cidade: <input type="text" id="city" value={ city } onChange={({target}) => setCity(target.value) }/></label>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
        }}
        >
        Enviar
        </button>
      </form>
    </div>
  )
}
