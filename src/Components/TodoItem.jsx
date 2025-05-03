import React, { useState } from 'react';
import '../Components/TodoItem.css';

const TodoItem = ({ todo }) => {

  const [completed, setCompleted] = useState(todo.completed);  

  const toggle = () => {
    setCompleted(!completed);  
  };

  return (
    <div className='item'>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={toggle}>
        {completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TodoItem;
