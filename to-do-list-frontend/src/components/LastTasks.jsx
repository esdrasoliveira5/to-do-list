import PropTypes from 'prop-types';
import React from 'react';
import { TableStyle } from '../styled-components/ComponentStyles';
import Tasks from './Task';

function LastTasks({ savedTasks, setSavedTasks }) {
  const SLICE_NUMBER = -3;
  const tasks = savedTasks.slice(SLICE_NUMBER);
  return (
    <TableStyle>
      <h1> Ultimas Tarefas Adicionadas</h1>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descricao</th>
            <th>Prioridade</th>
            <th>Data Limite</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.reverse().map((task) => Tasks(task, savedTasks, setSavedTasks))
          }
        </tbody>
      </table>
    </TableStyle>
  );
}

LastTasks.propTypes = {
  setSavedTasks: PropTypes.func.isRequired,
  savedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LastTasks;
