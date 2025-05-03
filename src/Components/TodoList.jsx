import React from "react";
import TodoItem from "./TodoItem";
import '../Components/todoList.css'

const TodoList = ({ todos }) => {
  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
