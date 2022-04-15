import React, { useContext, useState } from 'react';
import TodoListContext from '../context/AppContext';
import { createTask } from '../services/fetchApi';
import { ToDoFormStyle } from '../styled-components/ComponentStyles';

function ToDo() {
  const { savedTasks, setSavedTasks } = useContext(TodoListContext);
  const [toDoValues, setToDoValues] = useState({
    title: '',
    description: '',
    priority: '',
    dateLimit: '10-02-2022',
  });

  function handleToDoValues({ target }) {
    const { value, name } = target;
    setToDoValues({
      ...toDoValues,
      [name]: value,
    });
  }
  async function handleSaveTasks() {
    const { title, description, priority, dateLimit } = toDoValues;
    if (!title || !description || !priority || !dateLimit) {
      return (
        global.alert('Todos os campos precisam ser preenchidos')
      );
    }
    global.alert('Salvando Tarefa!');
    const { user: { token } } = JSON.parse(localStorage.getItem('to-do-list'));
    const response = await createTask(token, { title, description, priority, dateLimit });

    if (response.message) {
      return (
        global.alert('Falha em salvar a tarefa!!')
      );
    }
    setSavedTasks([...savedTasks, response]);
    setToDoValues({
      ...toDoValues,
      title: '',
      description: '',
      dateLimit: '',
    });
    return (
      global.alert('Tarefa Salva!')
    );
  }
  const { title, description, dateLimit } = toDoValues;
  return (
    <ToDoFormStyle>
      <h1>To-Do List</h1>
      <label htmlFor="title">
        <h4>Titulo:</h4>
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ (event) => handleToDoValues(event) }
        />
      </label>
      <label htmlFor="title">
        <h4>Descrição:</h4>
        <textarea
          name="description"
          value={ description }
          onChange={ (event) => handleToDoValues(event) }
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
              onChange={ (event) => handleToDoValues(event) }
            />
            Baixa
          </label>
          <label htmlFor="medium">
            <input
              type="radio"
              name="priority"
              value="Media"
              onChange={ (event) => handleToDoValues(event) }
            />
            Media
          </label>
          <label htmlFor="high">
            <input
              type="radio"
              name="priority"
              value="Alta"
              onChange={ (event) => handleToDoValues(event) }
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
            onChange={ (event) => handleToDoValues(event) }
          />
        </label>
      </label>
      <button
        type="button"
        onClick={ handleSaveTasks }
      >
        Enviar Tarefa
      </button>
    </ToDoFormStyle>
  );
}

export default ToDo;
