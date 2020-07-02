import React, { useState, useContext } from 'react';
import { Input } from 'semantic-ui-react';
import TodoContext from '../contexts/TodoContext';

const TodoInput = () => {
  const [inputText, setInputText] = useState('');
  const { addTodoTask } = useContext(TodoContext);

  const handleInput = (event) => {
    setInputText(event.target.value);

    if(event.keyCode === 13) {
      addTodoTask(inputText);
    }
  };

  return <Input placeholder="Add To-Do" onKeyUp={handleInput} />;
};

export default TodoInput;
