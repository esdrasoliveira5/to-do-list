import React from 'react';
import EditTasks from '../components/EditTask';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToDoStyle } from '../styled-components/ComponentStyles';
import { BodyStyle, MainStyle } from '../styled-components/MainPageStyles';

function TaskEditor() {
  return (
    <BodyStyle>
      <Header />
      <MainStyle>
        <ToDoStyle>
          <EditTasks />
        </ToDoStyle>
      </MainStyle>
      <Footer />
    </BodyStyle>
  );
}

export default TaskEditor;
