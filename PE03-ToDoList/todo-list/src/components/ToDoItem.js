import React from "react";

const ToDoItem = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{task.text}</span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
