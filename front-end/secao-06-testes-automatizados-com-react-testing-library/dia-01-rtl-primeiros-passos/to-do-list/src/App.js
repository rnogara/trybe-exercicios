import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    taskInput: '',
    tasks: [],
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleAddBtn = () => {
    const { taskInput } = this.state;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, taskInput],
    }), () => {
      this.setState({ taskInput: '' })
    });
  }

  render() {
    const { taskInput, tasks } = this.state;
    return (
      <div className="App">
        <label htmlFor='taskInput'>
          Tarefa:
          {' '}
          <input
            id='taskInput'
            type="text"
            name='taskInput'
            value={ taskInput }
            onChange={ this.handleChange }
          />
        </label>
        <button 
          data-testid="add-btn" 
          type='button'
          onClick={ this.handleAddBtn }
        >
        Adicionar
        </button>
        <div className='tasks-wrapper'>
          {
            tasks.map((task, index) => (
              <ul key={ index }>
                <li>
                  {task}
                </li>
              </ul>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
