import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      if (newTodo.trim() !== '') {
        const newTodoItem = {
          id: Date.now(),
          title: newTodo,
          completed: false
        };

        setTodoList([...todoList, newTodoItem]);
        setNewTodo('');
      } else {
        alert('Anda harus mengisi inputan terlebih dahulu');
      }
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <label htmlFor="newTodo" className="input-label">
          Tambahkan pekerjaan
        </label>
        <div className="input-wrapper">
          <input
            type="text"
            id="newTodo"
            className="input-field"
            placeholder="Silahkan masukkan & enter..."
            value={newTodo}
            onChange={handleInputChange}
            onKeyPress={handleAddTodo}
          />
          <div className="input-highlight" />
          <div className="input-bar" />
        </div>
      </div>
      <div className="todo-list">
        {todoList.length > 0 ? (
          todoList.map(todo => (
            <div className="todo-item" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Hapus</button>
            </div>
          ))
        ) : (
          <p>Tidak ada pekerjaan dalam daftar</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
