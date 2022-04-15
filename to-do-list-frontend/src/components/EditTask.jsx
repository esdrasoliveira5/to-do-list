import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getTasks, getUser, updateTasks } from '../services/fetchApi';
import { ToDoFormStyle } from '../styled-components/ComponentStyles';

function EditTasks() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dateLimit: '',
    priority: '',
  });
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  useEffect(() => {
    const userLogged = async () => {
      const localResponse = JSON.parse(localStorage.getItem('to-do-list'));
      if (localResponse !== null) {
        const { userId, token } = localResponse.user;
        const response = await getUser(token, userId);
        if (response.message) {
          return history.push('/');
        }
        const { title, description, dateLimit, priority } = await getTasks(token, path);
        setTask({ title, description, dateLimit, priority });
      }
      if (localResponse === null) {
        return history.push('/');
      }
    };
    userLogged();
  }, []);

  function handleTaskValues({ target }) {
    const { value, name } = target;
    setTask({
      ...task,
      [name]: value,
    });
  }

  async function handleSaveTasks() {
    const { title, description, priority, dateLimit } = task;
    if (!title || !description || !priority || !dateLimit) {
      return (
        global.alert('Todos os campos precisam ser preenchidos')
      );
    }
    global.alert('Editando Tarefa!');
    const { user: { token } } = JSON.parse(localStorage.getItem('to-do-list'));
    const response = await updateTasks(token, path,
      { title, description, priority, dateLimit });

    if (response.message) {
      return (
        global.alert('Falha em salvar a tarefa!!')
      );
    }
    setTask({
      ...task,
      title: '',
      description: '',
      dateLimit: '',
    });

    history.push('/profile');
    return (
      global.alert('Tarefa Salva!')
    );
  }

  const { title, description, dateLimit, priority } = task;
  return (
    <ToDoFormStyle>
      <h1>Editar Tarefa</h1>
      <label htmlFor="title">
        <h4>Titulo:</h4>
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ (event) => handleTaskValues(event) }
        />
      </label>
      <label htmlFor="title">
        <h4>Descrição:</h4>
        <textarea
          name="description"
          value={ description }
          onChange={ (event) => handleTaskValues(event) }
        />
      </label>
      <label htmlFor="priority">
        <h4>Prioridade:</h4>
        <div>
          <label htmlFor="low">

            <input
              type="radio"
              name="priority"
              value="Baixa"
              checked={ priority === 'Baixa' }
              onChange={ (event) => handleTaskValues(event) }
            />
            Baixa
          </label>
          <label htmlFor="medium">

            <input
              type="radio"
              name="priority"
              value="Media"
              checked={ priority === 'Media' }
              onChange={ (event) => handleTaskValues(event) }
            />
            Media
          </label>
          <label htmlFor="high">

            <input
              type="radio"
              name="priority"
              value="Alta"
              checked={ priority === 'Alta' }
              onChange={ (event) => handleTaskValues(event) }
            />
            Alta
          </label>
        </div>
        <label htmlFor="dateLimit">
          <h4>Data limite:</h4>
          <input
            type="date"
            value={ dateLimit }
            name="dateLimit"
            onChange={ (event) => handleTaskValues(event) }
          />
        </label>
      </label>
      <button
        type="button"
        onClick={ handleSaveTasks }
      >
        Salvar
      </button>
    </ToDoFormStyle>
  );
}

export default EditTasks;
