import React, { useState } from 'react';
import TodoItem from './TodoItem';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Membuat Sawah", completed: false },
    { id: 2, title: "Membuat Buku", completed: true },
    { id: 3, title: "Membuat Kue", completed: true },
    { id: 4, title: "Membuat Bakwan", completed: false },
    { id: 5, title: "Membuat Pisang Goreng", completed: true },
    { id: 6, title: "Membuat Seblak", completed: false },
  ]);

  const handleToggleComplete = (id, completed) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default App;
