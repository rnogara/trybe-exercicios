import { expect, describe, test } from '@jest/globals';
import fetch from 'node-fetch';
import btnHandler from './main';

global.fetch = fetch;

describe('Quando requisição bem sucedida, ela deverá retornar os dados esperados', () => {
  test('deve retornar os dados quando passamos um cep válido', async () => {
    const address = await JSDOM.apply(btnHandler('30130010'));
    expect(address.cep).toBe('30130-010');
    expect(address.logradouro).toBe('Praça Sete de Setembro');
    expect(address.bairro).toBe('Centro');
    expect(address.uf).toBe('MG');
  });

  test('deve aceitar ceps com hífen ou sem hífen', async () => {
    let address = await btnHandler('30130010');
    expect(address.cep).toBe('30130-010');

    address = await btnHandler('30130-010');
    expect(address.cep).toBe('30130-010');
  });
});

describe('Quando a requisição é rejeitada, ela deverá retornar erro', () => {
  test('Lança erro "Você precisa passar um CEP" quando passar cep vazio', async () => {
    const emptyCep = '';

    await expect(btnHandler(emptyCep)).rejects.toThrow(
      new Error('Você precisa passar um CEP'),
    );
  });

  test('Deve lançar erro quando passar cep inválido', async () => {
    const invalidCep = 'XXXXX-XXX';
    const invalidCepLessDigits = '00000-00';
    const invalidCepMoreDigits = '00000-0000';

    await expect(btnHandler(invalidCep)).rejects.toThrow();
    await expect(btnHandler(invalidCepLessDigits)).rejects.toThrow();
    await expect(btnHandler(invalidCepMoreDigits)).rejects.toThrow();
  });
});
