import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TodoListContext from '../context/AppContext';
import { UserDataStyle } from '../styled-components/ComponentStyles';
import { ButtonYellow } from '../styled-components/styles';

function UserData() {
  const { userData } = useContext(TodoListContext);
  const { name, lastName, email } = userData;
  return (
    <UserDataStyle>
      <h3>Dados do Usuario</h3>
      <div>
        <div>
          <label htmlFor="name">
            Nome:
            {' '}
            {name}
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Sobrenome:
            {' '}
            {lastName}
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            {' '}
            {email}
          </label>
        </div>
      </div>
      <ButtonYellow>
        <Link to="/edit-profile">
          <button type="button">
            Editar Perfil
          </button>
        </Link>
      </ButtonYellow>
    </UserDataStyle>
  );
}

export default UserData;
