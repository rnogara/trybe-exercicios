import React from "react";

class Exercicio2 extends React.Component{
  constructor() {
    super()
    this.state = {
      contatorNumero: 0,
      bgColor: 'green',
    }
    this.Contador = this.Contador.bind(this);
  }

  Contador() {
    this.setState((estadoAtual, _props) => ({
      contatorNumero: estadoAtual.contatorNumero + 1,
    }));
    const { contatorNumero } = this.state;
    if ((contatorNumero + 1) % 2 === 0) {
      console.log('green');
      this.setState((_corAtual, _props) => ({
        bgColor: 'green',
      }));
    } else {
      console.log('white');
      this.setState((_corAtual, _props) => ({
        bgColor: 'white',
      }));
    }
  }

  render() {
    const { contatorNumero, bgColor } = this.state;
    return(
      <button
        className="counterBtn"
        onClick={ this.Contador }
        style={ {backgroundColor: bgColor} }
      >
        { contatorNumero }
      </button>
    )
  }

}

export default Exercicio2;
