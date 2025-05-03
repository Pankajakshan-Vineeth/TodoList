import React, { use, useState } from "react";

const TodoInput = ({addTodo}) => {
 
const [input, setInput] = useState('');

const handleChange = (event)=>{
   let usertyped = event.target.value;
    setInput(usertyped);
}

const addTask = (event)=>{
    event.preventDefault();
    if (input.trim()!=='') {
        addTodo(input);
        console.log(input);
        setInput('');
    }
}

  return (
    <div className="container">
      <h1>To-Do-List</h1>
      <input onChange = {handleChange} type="text" placeholder="Enter task" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TodoInput;
