import PropTypes from 'prop-types';
import React from 'react';
import TasksComplete from './TaskComplete';
import { TableStyle } from '../styled-components/ComponentStyles';

function AllTasks({ savedTasks, setSavedTasks }) {
  return (
    <TableStyle>
      <h1> Tarefas Salvas!</h1>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descricao</th>
            <th>Prioridade</th>
            <th>Data Limite</th>
            <th>Criado</th>
            <th>Andamento</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            savedTasks.map((task) => TasksComplete(task, savedTasks, setSavedTasks))
          }
        </tbody>
      </table>
    </TableStyle>
  );
}

AllTasks.propTypes = {
  setSavedTasks: PropTypes.func.isRequired,
  savedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllTasks;
