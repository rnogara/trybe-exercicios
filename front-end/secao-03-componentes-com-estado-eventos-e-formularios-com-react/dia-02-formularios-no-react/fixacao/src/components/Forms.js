import React from "react";
import './Forms.css';
import InputFeedback from "./InputFeedback";
import InputName from "./InputName";

class Forms extends React.Component {
  state = {
    color: '',
    name: '',
    age: '',
    feedback: '',
    check: '',
    src: '',
    error: '',
    formularioComErros: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.handleError();
  }

  handleBgColor = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    document.body.style.backgroundColor = e.target.value;
  };

  handlePhoto = (file) => {
    this.setState({
      src: URL.createObjectURL(file),
    });
  }

  handleError = () => {
    if(!this.state.age || !this.state.feedback || !this.state.name) {
      this.setState({
        error: 'Algum dado obrigatório não está preenchido',
        formularioComErros: true,
      });
    } else {
      this.setState({
        error: '',
        formularioComErros: false,
      });
    };
  }

  render() {
    const { name, age, feedback, check, src, error } = this.state;
    return(
      <form>
        <label htmlFor="color">Escolha uma cor: <select id="color" name="color" onChange={ this.handleBgColor }>
          <option value=''> </option>
          <option value='cadetblue'className="cadetblue"> </option>
          <option value='bisque' className="bisque">  </option>
          <option value='lightgreen' className="lightgreen">  </option>
          </select></label>
        <InputName name={ name } handleChange={ this.handleChange } />
        <label htmlFor="age">Idade: <input 
          name="age" 
          id="age" 
          type="number" 
          value={ age } 
          onChange={ this.handleChange } />
        </label>
        <InputFeedback feedback={ feedback } handleChange={ this.handleChange} />
        <label htmlFor="check">Gostou? <input 
          name="check" 
          id="check" 
          type="checkbox" 
          value={ check } 
          onChange={ this.handleChange } />
        </label>
        <fieldset>
          <legend>Foto do avatar</legend>
          <img src={ src } alt='foto do usuário' />
          <input type='file' name='photo' accept=".png, .jpg" onChangeCapture={ ({ target }) => this.handlePhoto(target.files[0]) } />
        </fieldset>
        <br/>
        <span>{ error }</span>
      </form>
    )
  }
}

export default Forms;
