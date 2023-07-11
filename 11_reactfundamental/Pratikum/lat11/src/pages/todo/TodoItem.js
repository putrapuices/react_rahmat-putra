import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ id, title, completed, onToggleComplete }) => {
  const itemStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? 'gray' : 'black',
  };

  const handleClick = () => {
    onToggleComplete(id, !completed);
  };

  return (
    <div className="todo-item" style={itemStyle} onClick={handleClick}>
      {title}
    </div>
  );
};

export default TodoItem;
