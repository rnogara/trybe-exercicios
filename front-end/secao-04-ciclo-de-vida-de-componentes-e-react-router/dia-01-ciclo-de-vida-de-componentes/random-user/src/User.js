import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() { 
    const { user } = this.props;
    return (
      <section>
        <img src={ user.picture.medium } alt={ `Foto de ${user.name.first} ${user.name.last}` } />
        <h1>{ `${user.name.title} ${user.name.first} ${user.name.last}` }</h1>
        <p><strong>Address: </strong>
        { `${user.location.street.name}, ${user.location.street.number} - ${user.location.city}, ${user.location.state} - ${user.location.country}` }</p>
        <p><strong>Age: </strong>{ user.dob.age }</p>
        <p><strong>Email: </strong>{ user.email }</p>
      </section>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User;