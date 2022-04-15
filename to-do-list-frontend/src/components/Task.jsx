import React from 'react';
import { deleteTasks } from '../services/fetchApi';
import { ButtonRed } from '../styled-components/styles';

function Tasks(task, savedTasks, setSavedTasks) {
  const { id, title, description, priority, dateLimit } = task;

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

export default Tasks;
