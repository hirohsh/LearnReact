import React from 'react';
import { useState } from 'react';

const Form = ({ addTodoList }) => {
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    if (todo !== '') {
      const newTodo = {
        id: 0,
        content: todo,
      };
      addTodoList(newTodo);
      setTodo('');
    }
  };
  return (
    <>
      <p>Form.jsx</p>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>追加</button>
    </>
  );
};

export default Form;
