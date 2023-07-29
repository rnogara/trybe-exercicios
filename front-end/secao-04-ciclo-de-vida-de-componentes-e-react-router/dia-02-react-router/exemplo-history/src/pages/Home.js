import React from 'react';

class Home extends React.Component {
  state = {
    userName: 'Tryber',
    role: 'Admin',
  }

  render() {
    const { history } = this.props;
    return (
      <section>
        <h1>Home Page</h1>
        <button
          type="button"
          onClick={ () => history.push('/welcome', this.state) }
        >
          Acesse a página de Boas-Vindas
        </button>
      </section>
    );
  }
}

export default Home;
