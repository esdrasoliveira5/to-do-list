import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoListContext from '../context/AppContext';
import { loginUser } from '../services/fetchApi';
import { ButtonGreen, ButtonYellow } from '../styled-components/styles';

function FormLogin() {
  const { setLoginValues } = useContext(TodoListContext);
  const [loginValues, setloginValues] = useState({
    email: '',
    password: '',
  });

  function handleLoginValues({ target }) {
    const { value, name } = target;
    setloginValues({
      ...loginValues,
      [name]: value,
    });
  }

  async function handleSubmitLogin() {
    const { email, password } = loginValues;

    if (!email || !password) {
      return (
        global.alert('Email ou senha vazio')
      );
    }
    global.alert('Carregando');
    const response = await loginUser(email, password);

    if (response.message === 'User not found!') {
      return (
        global.alert('Email errado ou Usuario nao cadastrado')
      );
    }
    if (response.message === 'Wrong Password') {
      return (
        global.alert('Senha incorreta')
      );
    }
    const { userId, token } = response;

    if (response.token) {
      localStorage.setItem('to-do-list', JSON.stringify({
        user: {
          userId,
          email,
          token,
        },
      }));
      setLoginValues({
        userId,
        email,
        token,
        logged: true,
      });
      return (
        global.alert('Bem vindo!!')
      );
    }
  }
  const { email, password } = loginValues;
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="exemple@email.com"
            value={ email }
            onChange={ (event) => handleLoginValues(event) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            placeholder="password123"
            maxLength="12"
            value={ password }
            onChange={ (event) => handleLoginValues(event) }
          />
        </label>
      </div>
      <ButtonGreen>
        <button
          type="button"
          onClick={ handleSubmitLogin }
        >
          Login
        </button>
      </ButtonGreen>
      <ButtonYellow>
        <Link to="/create-profile">
          <button type="button" name="createAccount">
            Criar conta
          </button>
        </Link>
      </ButtonYellow>
    </div>
  );
}

export default FormLogin;
