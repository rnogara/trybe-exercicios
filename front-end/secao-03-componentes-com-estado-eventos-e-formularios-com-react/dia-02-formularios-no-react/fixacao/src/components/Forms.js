import React from "react";
import './Forms.css';

class Forms extends React.Component {
  state = {
    color: '',
    name: '',
    age: '',
    feedback: '',
    check: '',
    src: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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

  render() {
    const { name, age, feedback, check, src } = this.state;
    return(
      <form>
        <label htmlFor="color">Escolha uma cor: <select id="color" name="color" onChange={ this.handleBgColor }>
          <option value=''> </option>
          <option value='cadetblue'className="cadetblue"> </option>
          <option value='bisque' className="bisque">  </option>
          <option value='lightgreen' className="lightgreen">  </option>
          </select></label>
        <label htmlFor="name">Nome: <input 
          name="name" 
          id="name" 
          type="text" 
          value={ name } 
          onChange={ this.handleChange } />
        </label>
        <label htmlFor="age">Idade: <input 
          name="age" 
          id="age" 
          type="number" 
          value={ age } 
          onChange={ this.handleChange } />
        </label>
        <label htmlFor="feedback">Escreva seu Feedback: <br/>
          <textarea 
          placeholder="Escreva seu feeedback" 
          name="feedback" 
          id="feedback" 
          value={ feedback } 
          onChange={ this.handleChange } />
        </label>
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
      </form>
    )
  }
}

export default Forms;
