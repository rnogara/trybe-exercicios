import React from 'react';
import './App.css';
import User from './User';

class App extends React.Component {
  state = {
    loading: true,
    randomUser: {},
  }

  fetchUser = () => {
    fetch('https://api.randomuser.me/')
    .then((response) => response.json())
    .then((data) =>{
      this.setState({
        randomUser: data.results[0],
        loading: false,
      });
    });
  }

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const ageMax = 50;
    if ( nextState.randomUser.dob.age < ageMax) return true;
  }

  render () {
    const { randomUser, loading } = this.state;
    return (
      <div className="App">
        {
          loading 
            ? <div>Carregando...</div>
            : <User user={ randomUser } />
        }
      </div>
    );
  }
}

export default App;
