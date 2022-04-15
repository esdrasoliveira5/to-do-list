import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AllTasks from '../components/AllTasks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import UserData from '../components/UserData';
import TodoListContext from '../context/AppContext';
import { getUser } from '../services/fetchApi';
import { ProfileStyle } from '../styled-components/ComponentStyles';
import { BodyStyle, MainStyle } from '../styled-components/MainPageStyles';

function PerfilTodoList() {
  const { userData, setUserData } = useContext(TodoListContext);
  const { savedTasks, setSavedTasks } = useContext(TodoListContext);
  const { loginValues } = useContext(TodoListContext);

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
        const { name, lastName, email, tasks } = response;
        setUserData({ name, lastName, email });
        setSavedTasks(tasks.sort((a, b) => a.id - b.id));
      }
      if (localResponse === null) {
        return history.push('/');
      }
    };
    userLogged();
  }, [loginValues]);

  useEffect(() => {

  }, [userData, savedTasks]);
  return (
    <BodyStyle>
      <Header />
      <MainStyle>
        <ProfileStyle>
          <h1>PERFIL</h1>
          <UserData />
          {
            savedTasks.length !== 0 ? <AllTasks
              savedTasks={ savedTasks }
              setSavedTasks={ setSavedTasks }
            /> : ''
          }
        </ProfileStyle>
      </MainStyle>
      <Footer />
    </BodyStyle>
  );
}

export default PerfilTodoList;
