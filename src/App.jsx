import React, { use, useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";

const App = () => {

  const [todos, settodos] = useState([]);

  const addTodo=(task)=>{
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    }
    settodos([newTodo,...todos]);
  }

  return (
    <div>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos}/>
      <Header />
    </div>
  );
};

export default App;
