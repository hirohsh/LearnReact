import React from 'react';
import { useState } from 'react';
import Form from './component/Form';
import List from './component/List';

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: '買い物をする',
    },
    {
      id: 2,
      content: 'テレビを見る',
    },
    {
      id: 3,
      content: 'ゲームをする',
    },
  ];

  const [todos, setTodos] = useState(todoList);

  const addTodoList = (newTodo) => {
    const newTodos = [...todos, newTodo].map((todo, index) => {
      todo.id = index;
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <p>Todo.jsx</p>
      <h2>Reminder</h2>
      <List todos={todos} setTodos={setTodos} />
      <Form addTodoList={addTodoList} />
    </>
  );
};

export default Todo;
