import React from "react";

class InputName extends React.Component {
  render() {
    const { name, handleChange} = this.props;
    return (
      <label htmlFor="name">Nome: <input 
      name="name" 
      id="name" 
      type="text" 
      value={ name } 
      onChange={ handleChange } />
    </label>
    )
  }
}

export default InputName;
