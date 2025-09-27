import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task-item">
      {/* Custom checkbox */}
      <div
        className={`checkbox ${task.completed ? "checked" : ""}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.completed && <span>✓</span>}
      </div>

      {/* Task text */}
      <span className={task.completed ? "completed" : ""}>
        {task.text}
      </span>

      {/* Delete button */}
      <button onClick={() => deleteTask(task.id)}>🗑️</button>
    </div>
  );
}

export default TaskItem;
