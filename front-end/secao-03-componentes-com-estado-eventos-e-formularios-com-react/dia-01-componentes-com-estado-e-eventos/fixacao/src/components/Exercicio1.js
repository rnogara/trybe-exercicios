import React from "react";

class Exercicio1 extends React.Component {
  constructor() {
    super()
    this.Hello = this.Hello.bind(this);
    this.How = this.How.bind(this);
    this.Ready = this.Ready.bind(this);
  }

  Hello() {
    console.log(this);
    console.log('Hello World')
  }
  
  How() {
    console.log(this);
    console.log('How are you today?');
  }
  
  Ready() {
    console.log(this);
    console.log('Are you ready?');
  }

  render() {
    return (
      <div>
        <button onClick={ this.Hello }>Botão 1</button>
        <button onClick={ this.How }>Botão 2</button>
        <button onClick={ this.Ready }>Botão 3</button>
      </div>
    )
  }
}

export default Exercicio1;
