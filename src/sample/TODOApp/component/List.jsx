import React from 'react';

const List = ({ todos, setTodos }) => {
  const complete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <p>List.jsx</p>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <button
                onClick={() => {
                  complete(todo.id);
                }}
              >
                完了
              </button>
              <span>{todo.content}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
