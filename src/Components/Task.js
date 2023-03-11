import React from "react";

const Task = (props) => {
  return (
    <div className="task">
      <h1>{props.task}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

export default Task;
