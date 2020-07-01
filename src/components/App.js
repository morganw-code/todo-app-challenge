import React from 'react';
import { Container } from 'semantic-ui-react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  return (
    <>
      <Container>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </Container>
    </>
  );
};

export default App;
