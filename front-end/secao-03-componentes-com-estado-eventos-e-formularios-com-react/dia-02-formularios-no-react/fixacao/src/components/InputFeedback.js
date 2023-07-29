import React from "react";

class InputFeedback extends React.Component {
  render() {
    const { feedback, handleChange } = this.props;
    return (
      <label htmlFor="feedback">Escreva seu Feedback: <br/>
        <textarea 
        placeholder="Escreva seu feeedback" 
        name="feedback" 
        id="feedback" 
        value={ feedback } 
        onChange={ handleChange } />
      </label>
    )
  }
}

export default InputFeedback;
