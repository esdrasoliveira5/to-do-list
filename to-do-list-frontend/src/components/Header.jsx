import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styled-components/MainPageStyles';
import TodoListContext from '../context/AppContext';

function Header() {
  const { setLoginValues } = useContext(TodoListContext);

  function handleSignOff() {
    localStorage.removeItem('to-do-list');
    setLoginValues({
      userId: '',
      email: '',
      token: '',
      logged: false,
    });
    window.location.reload();
  }
  return (
    <HeaderStyle>
      <h2>To-Do List App</h2>
      <div>
        <Link
          style={ { textDecoration: 'none', color: '#023047' } }
          to="/to-do"
        >
          HOME
        </Link>
      </div>
      <div>
        <Link
          style={ { textDecoration: 'none', color: '#023047' } }
          to="/profile"
        >
          PERFIL
        </Link>
      </div>
      <button
        type="button"
        onClick={ handleSignOff }
      >
        Sign off
      </button>
    </HeaderStyle>
  );
}

export default Header;
