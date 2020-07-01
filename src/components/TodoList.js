import React from 'react';
import { Header } from 'semantic-ui-react';
import TodoTask from './TodoTask';

const TodoList = () => {
  return (
    <>
      <Header as="h2">Tasks:</Header>
      <TodoTask />
    </>
  );
};

export default TodoList;
