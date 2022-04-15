import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TodoListContext from './AppContext';

function TodoListProvider({ children }) {
  const [loginValues, setLoginValues] = useState({
    userId: '',
    email: '',
    token: '',
    logged: false,
  });
  const [savedTasks, setSavedTasks] = useState([]);
  const [userData, setUserData] = useState({});
  const contextValue = {
    loginValues,
    setLoginValues,
    savedTasks,
    setSavedTasks,
    userData,
    setUserData,
  };

  return (
    <TodoListContext.Provider value={ contextValue }>
      { children }
    </TodoListContext.Provider>
  );
}

TodoListProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TodoListProvider;
