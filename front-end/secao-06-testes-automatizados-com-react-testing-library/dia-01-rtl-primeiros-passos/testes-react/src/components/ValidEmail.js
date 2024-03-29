import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      { email && 
      <h3 data-test-id="id-email-valid-text">{(verifyEmail(email) 
        ? <span style={{ color: 'green' }}>Email Válido</span> 
        : <span style={{ color: 'red' }}>Email Inválido</span>)}
      </h3>
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
