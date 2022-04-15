import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LastTasks from '../components/LastTasks';
import ToDo from '../components/ToDo';
import TodoListContext from '../context/AppContext';
import { getUser } from '../services/fetchApi';
import { BodyStyle, MainStyle } from '../styled-components/MainPageStyles';
import { ToDoStyle } from '../styled-components/ComponentStyles';

function ToDoListPage() {
  const { loginValues, savedTasks, setSavedTasks } = useContext(TodoListContext);
  const history = useHistory();

  useEffect(() => {
    const userLogged = async () => {
      const localResponse = JSON.parse(localStorage.getItem('to-do-list'));
      if (localResponse !== null) {
        const { userId, token } = localResponse.user;
        const response = await getUser(token, userId);
        if (response.message) {
          return history.push('/');
        }
        setSavedTasks(response.tasks.sort((a, b) => a.id - b.id));
      }
      if (localResponse === null) {
        return history.push('/');
      }
    };
    userLogged();
  }, [loginValues]);

  useEffect(() => {

  }, [savedTasks]);

  return (
    <BodyStyle>
      <Header />
      <MainStyle>
        <ToDoStyle>
          <ToDo />
          {
            savedTasks.length !== 0 ? <LastTasks
              savedTasks={ savedTasks }
              setSavedTasks={ setSavedTasks }
            /> : ''
          }
        </ToDoStyle>
      </MainStyle>
      <Footer />
    </BodyStyle>
  );
}

export default ToDoListPage;
