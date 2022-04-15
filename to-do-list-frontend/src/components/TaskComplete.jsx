import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteTasks, getAllTasks, updateCategory } from '../services/fetchApi';
import { ButtonRed, ButtonYellow } from '../styled-components/styles';

function TasksComplete(task, savedTasks, setSavedTasks) {
  const history = useHistory();

  const { id, title, description, priority, dateLimit, created, categoryId } = task;

  async function handleSelect({ target }) {
    const { token } = JSON.parse(localStorage.getItem('to-do-list')).user;
    global.alert('Atualizando');
    const response = await updateCategory(token, id, target.value);
    if (response.staus) {
      return (
        global.alert('Falha em mudar Categoria!')
      );
    }
    const tasks = await getAllTasks(token);
    setSavedTasks(tasks.sort((a, b) => a.id - b.id));
  }

  function handleEditTask() {
    history.push(`/edit-task/${id}`);
  }

  async function handleRemoveTask() {
    const { token } = JSON.parse(localStorage.getItem('to-do-list')).user;
    const response = await deleteTasks(token, id);
    if (response.message !== 'Task deleted') {
      return (
        global.alert('Falha em deletar a tarefa!')
      );
    }
    if (response.message === 'Task deleted') {
      // eslint-disable-next-line react/destructuring-assignment
      const newSavedTasks = savedTasks.filter((t) => t.id !== id);
      setSavedTasks(newSavedTasks);
      return (
        global.alert('Tarefa deletada!')
      );
    }
  }

  return (
    <tr key={ `${id}-${title}` }>
      <td>{title}</td>
      <td>{description}</td>
      <td>{priority}</td>
      <td>{dateLimit}</td>
      <td>{created}</td>
      <td>
        <select
          defaultValue={ categoryId }
          onChange={ (event) => handleSelect(event) }
        >
          <option value={ 1 }>Não iniciado</option>
          <option value={ 2 }>Iniciado</option>
          <option value={ 3 }>Concluído</option>
        </select>
      </td>
      <td>
        <ButtonYellow>
          <button
            type="button"
            onClick={ handleEditTask }
          >
            Editar
          </button>
        </ButtonYellow>
      </td>
      <td>
        <ButtonRed>
          <button
            type="button"
            onClick={ handleRemoveTask }
          >
            Excluir
          </button>
        </ButtonRed>
      </td>
    </tr>
  );
}

export default TasksComplete;
