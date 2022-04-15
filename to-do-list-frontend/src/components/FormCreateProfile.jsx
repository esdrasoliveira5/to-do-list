import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../services/fetchApi';
import { ButtonGreen } from '../styled-components/styles';

const validator = require('email-validator');

function FormCreateProfile() {
  const history = useHistory();

  const [accountValours, setAccountValours] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  function handleAccountValues({ target }) {
    const { value, name } = target;
    setAccountValours({
      ...accountValours,
      [name]: value,
    });
  }

  async function handleCreateAccount() {
    const MAX_LENGTH = 8;
    const { name, lastName, email, password, passwordConfirm } = accountValours;
    if (!name || !lastName || !email || !password || !passwordConfirm) {
      return (
        global.alert('Todos os campos precisam estar preenchidos')
      );
    }
    if (!validator.validate(email)) {
      return (
        global.alert('Email invalido')
      );
    }
    if (password.length < MAX_LENGTH) {
      return (
        global.alert('Senha precisa ter 8 caracteres')
      );
    }
    if (password !== passwordConfirm) {
      return (
        global.alert('As senhas precisam ser iguais')
      );
    }
    global.alert('Criando Usuario');
    const response = await createUser(name, lastName, email, password);
    if (response.message === 'User alreddy exists') {
      global.alert('Email ja cadastrado!');
    }
    if (response.message === 'User created') {
      global.alert('Usuario Criado com Sucesso');
      history.push('/');
    }
  }
  const { name, lastName, email, password, passwordConfirm } = accountValours;
  return (
    <form>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ (event) => handleAccountValues(event) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="name">
          Sobrenome
          <input
            type="text"
            name="lastName"
            value={ lastName }
            onChange={ (event) => handleAccountValues(event) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ (event) => handleAccountValues(event) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            maxLength="12"
            value={ password }
            onChange={ (event) => handleAccountValues(event) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="passwordConfirm">
          Confirme a Senha
          <input
            type="password"
            name="passwordConfirm"
            maxLength="12"
            value={ passwordConfirm }
            onChange={ (event) => handleAccountValues(event) }
          />
        </label>
      </div>
      <ButtonGreen>
        <button
          type="button"
          onClick={ handleCreateAccount }
        >
          Criar
        </button>
      </ButtonGreen>
    </form>
  );
}

export default FormCreateProfile;
