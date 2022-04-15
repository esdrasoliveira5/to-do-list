import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import FormLogin from '../components/FormLogin';
import Header from '../components/Header';
import TodoListContext from '../context/AppContext';
import { getUser } from '../services/fetchApi';
import { FormBoxStyle } from '../styled-components/ComponentStyles';
import { BodyStyle, MainStyle } from '../styled-components/MainPageStyles';

function LoginPage() {
  const { loginValues } = useContext(TodoListContext);
  const history = useHistory();
  useEffect(() => {
    const userLogged = async () => {
      const localResponse = JSON.parse(localStorage.getItem('to-do-list'));
      if (localResponse !== null) {
        const { userId, token } = localResponse.user;
        const response = await getUser(token, userId);
        if (!response.message) {
          history.push('/to-do');
        }
      }
    };
    userLogged();
  }, [loginValues]);

  return (
    <BodyStyle>
      <Header />
      <MainStyle>
        <FormBoxStyle>
          <FormLogin />
        </FormBoxStyle>
      </MainStyle>
      <Footer />
    </BodyStyle>
  );
}

export default LoginPage;
