import React from 'react';
import Footer from '../components/Footer';
import FormEditProfile from '../components/FormEditProfile';
import Header from '../components/Header';
import { FormBoxStyle } from '../styled-components/ComponentStyles';
import { BodyStyle, MainStyle } from '../styled-components/MainPageStyles';

function EditeProfile() {
  return (
    <BodyStyle>
      <Header />
      <MainStyle>
        <FormBoxStyle>
          <h1>Editar perfil</h1>
          <FormEditProfile />
        </FormBoxStyle>
      </MainStyle>
      <Footer />
    </BodyStyle>
  );
}

export default EditeProfile;
