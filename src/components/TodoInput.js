import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const TodoInput = () => {
  const [inputText, setInputText] = useState('');

  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  return <Input placeholder="Add To-Do" onKeyUp={handleInput} />;
};

export default TodoInput;
