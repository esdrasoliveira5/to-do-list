import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FormCreateProfile from '../components/FormCreateProfile';
import { BodyStyle, MainStyle } from '../styled-components/MainPageStyles';
import { FormBoxStyle } from '../styled-components/ComponentStyles';

function CreateProfile() {
  return (
    <BodyStyle>
      <Header />
      <MainStyle>
        <FormBoxStyle>
          <h1>Criar perfil</h1>
          <FormCreateProfile />
        </FormBoxStyle>
      </MainStyle>
      <Footer />
    </BodyStyle>
  );
}

export default CreateProfile;
