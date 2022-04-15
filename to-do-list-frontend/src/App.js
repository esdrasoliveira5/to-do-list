import React from 'react';
import { Route, Switch } from 'react-router';
import TodoListProvider from './context/TodoListProvider';
import CreateProfile from './pages/CreateProfile';
import LoginPage from './pages/LoginPage';
import PerfilTodoList from './pages/PerfilTodoList';
import EditeProfile from './pages/ProfileEditor';
import TaskEditor from './pages/TaskEditor';
import ToDoListPage from './pages/ToDoListPage';
import { AppStyled } from './styled-components/MainPageStyles';

function App() {
  return (
    <Switch>
      <AppStyled>
        <TodoListProvider>
          <Route exact path="/to-do" component={ ToDoListPage } />
          <Route exact path="/profile" component={ PerfilTodoList } />
          <Route exact path="/edit-task/:id" component={ TaskEditor } />
          <Route exact path="/edit-profile" component={ EditeProfile } />
          <Route exact path="/create-profile" component={ CreateProfile } />
          <Route exact path="/" component={ LoginPage } />
        </TodoListProvider>
      </AppStyled>
    </Switch>
  );
}

export default App;
