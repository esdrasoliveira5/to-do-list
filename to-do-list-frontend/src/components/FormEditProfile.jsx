import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateUser, getUser, deleteUser } from '../services/fetchApi';
import { ButtonGreen, ButtonRed } from '../styled-components/styles';

function FormEditProfile() {
  const history = useHistory();
  const toDo = 'to-do-list';
  const [accountValours, setAccountValours] = useState({
    name: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
  });

  useEffect(() => {
    const userLogged = async () => {
      const localResponse = JSON.parse(localStorage.getItem(toDo));
      if (localResponse !== null) {
        const { userId, token } = localResponse.user;
        const response = await getUser(token, userId);
        if (response.message) {
          return history.push('/');
        }
        const { name, lastName, password } = response;
        setAccountValours({ ...accountValours, name, lastName, password });
      }
      if (localResponse === null) {
        return history.push('/');
      }
    };
    userLogged();
  }, []);

  function handleAccountValues({ target }) {
    const { value, name } = target;
    setAccountValours({
      ...accountValours,
      [name]: value,
    });
  }

  async function handleEditAccount() {
    const MAX_LENGTH = 8;
    const { name, lastName, password, passwordConfirm } = accountValours;
    if (password.length < MAX_LENGTH) {
      return (
        global.alert('Senha precisa ter no minimo 8 caracteres')
      );
    }
    if (password !== passwordConfirm) {
      return (
        global.alert('As senhas precisam ser iguais')
      );
    }
    global.alert('Editando Perfil');
    const { userId, token } = JSON.parse(localStorage.getItem(toDo)).user;
    const response = await updateUser(token, userId, { name, lastName, password });
    if (response.message) {
      return (
        global.alert('Falha em editar')
      );
    }
    history.push('/profile');
    return (
      global.alert('Perfil Editado!')
    );
  }

  async function handleDeleteAccount() {
    const { userId, token } = JSON.parse(localStorage.getItem(toDo)).user;
    global.alert('Deletando Usuario!');
    const response = await deleteUser(token, userId);
    if (response.message !== 'User deleted') {
      return global.alert('Falha em Deletar conta!');
    }
    history.push('/');
    return global.alert('Usuario Deletado!');
  }
  const { name, lastName, password, passwordConfirm } = accountValours;
  return (
    <form>
      <div>
        <label htmlFor="name">
          Name:
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
          Sobrenome:
          <input
            type="text"
            name="lastName"
            value={ lastName }
            onChange={ (event) => handleAccountValues(event) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Senha:
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
          Confirme a Senha:
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
          onClick={ handleEditAccount }
        >
          Salvar
        </button>
      </ButtonGreen>
      <ButtonRed>
        <button
          type="button"
          onClick={ handleDeleteAccount }
        >
          Excluir Conta
        </button>
      </ButtonRed>
    </form>
  );
}

export default FormEditProfile;
