import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
it('Verifica se não exibe mensagem se email ainda não for enviado', () => {
  render(<ValidEmail email="" />);
  const value = screen.queryByTestId('id-email-valid-text');
  expect(value).not.toBeInTheDocument();
});
it('Verifica o email troca de cor para Válido', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const validEmail = screen.getByText('Email Válido');
  expect(validEmail).toHaveStyle({ color: 'green' });
});
it('Verifica o email troca de cor para Inválido', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const invalidEmail = screen.getByText('Email Inválido');
  expect(invalidEmail).toHaveStyle({ 'color': 'red' });
});