import React from "react";
import './Forms.css';

class Forms extends React.Component {
  state = {
    color: '',
    name: '',
    age: '',
    feedback: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleBgColor = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    document.body.style.backgroundColor = e.target.value;
  };

  render() {
    const { name, age, feedback } = this.state;
    return(
      <form>
        <label htmlFor="color">Escolha uma cor: <select id="color" name="color" onChange={ this.handleBgColor }>
          <option value=''> </option>
          <option value='cadetblue'className="cadetblue"> </option>
          <option value='bisque' className="bisque">  </option>
          <option value='lightgreen' className="lightgreen">  </option>
          </select></label>
        <label htmlFor="name">Nome: <input name="name" id="name" type="text" value={ name } onChange={ this.handleChange } /></label>
        <label htmlFor="age">Idade: <input name="age" id="age" type="age" value={ age } onChange={ this.handleChange } /></label>
        <textarea placeholder="Escreva seu feeedback" name="feedback" id="feedback" value={ feedback } onChange={ this.handleChange } />
      </form>
    )
  }
}

export default Forms;
